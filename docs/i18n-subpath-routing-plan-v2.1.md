# 다국어 서브패스 라우팅 구현 계획 v2.1

> R2-D2 코드베이스 전수 분석 + 2차 리뷰 반영 최종본

---

## Context

현재 autosar.io 사이트는 클라이언트 사이드에서만 언어를 전환하며, URL이 변하지 않음.
Google 크롤러는 기본 언어(한국어)만 인덱싱하므로, 일본어/영어/중국어 검색에서 사이트가 노출되지 않음.
주 고객이 한국 + 일본이므로, 최소한 `/ja/` 서브패스 라우팅이 필요함.

**목표:** `autosar.io/company`(한국어 유지), `autosar.io/ja/company`, `autosar.io/en/company` 등 언어별 고유 URL 생성 -> Google이 각 언어 페이지를 개별 인덱싱

---

## 구조적 한계 인지사항

**모든 페이지가 "use client"** (framer-motion, useState, useEffect 사용)이므로:
- next-intl의 서버 사이드 번역 렌더링(SSR)은 활용 불가
- Google 크롤러가 JavaScript를 실행해야 번역된 콘텐츠를 인덱싱 가능
- **실질적 이점: URL 라우팅 분리 + hreflang 태그 + sitemap 분리** (이것만으로도 Google의 다국어 인식에 충분)
- Google은 현재 JavaScript 렌더링을 지원하므로, "use client" 컴포넌트도 크롤링 가능 (다만 인덱싱 지연 가능성 있음)

---

## 구현 방식: next-intl v3.x

- **next-intl v3.x 설치 필수** (현재 Next.js 14.2.35 -> v4.x는 Next.js 15+ 전용)
- ESM 기반 프로젝트 (next.config.mjs) -> import 문법 사용

---

## Step 1: 패키지 설치

```bash
npm install next-intl@^3.22
```

> `@^3.22` 이상 명시 필수. `defineRouting`, `createSharedPathnamesNavigation` API는 v3.22에서 도입됨. `npm install next-intl`(버전 미지정)은 v4.x가 설치되어 Next.js 14와 호환 불가.

---

## Step 2: 설정 파일 생성

### 기존 `src/i18n/config.ts` 처리

현재 `src/i18n/config.ts`가 이미 존재하며 `locales`, `defaultLocale`, `localeNames`를 정의하고 있음.
새로 만드는 `routing.ts`와 역할이 완전히 겹치므로, **`config.ts`를 삭제**하고 `routing.ts`로 통합.
`config.ts`를 import하는 파일이 있다면 `routing.ts`로 import 경로 변경 필요.

### `src/i18n/routing.ts` (신규 -- config.ts 대체)

```ts
import { defineRouting } from 'next-intl/routing';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['ko', 'en', 'ja', 'zh'],
  defaultLocale: 'ko',
  localePrefix: 'as-needed'  // 한국어는 /company 유지, 타 언어만 /ja/company
});

// navigation 헬퍼 (v3.x API)
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);
```

**`localePrefix: 'as-needed'` 선택 이유:**
- 기존 Google 인덱스 26개 URL(`/company`, `/products/adaptive` 등) 보존
- 기존 백링크/북마크 유효성 유지
- 한국어: `/company` (변경 없음)
- 일본어: `/ja/company` (신규)
- 영어: `/en/company` (신규)
- 중국어: `/zh/company` (신규)
- `'always'` 대비 SEO 순위 하락 리스크 제거

### `src/i18n/request.ts` (신규)

```ts
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
```

---

## Step 3: 번역 시스템 통합 (가장 큰 작업)

### 현재 상태 (이중 시스템)

| 시스템 | 파일 | 규모 | 로케일 코드 | 사용 여부 |
|--------|------|------|-------------|-----------|
| A | `src/lib/i18n/translations.ts` | 4,280줄 | `kr`, `en`, `cn`, `jp` | 전 페이지 사용 |
| B | `src/i18n/messages/*.json` | 2,615줄 | `ko`, `en`, `ja`, `zh` | 미사용 |

### 해야 할 것

1. **translations.ts(시스템 A)를 기준으로** 4개 JSON 파일 생성
2. **pageMetadata.ts(471줄)도 JSON에 흡수** -- 각 페이지의 SEO title/description을 `metadata` 네임스페이스로 통합
3. 로케일 코드 통일: `kr`->`ko`, `jp`->`ja`, `cn`->`zh`
4. 키 구조를 next-intl의 네임스페이스 형태로 변환

**변환 예시:**
```
// 기존 translations.ts
translations.kr.main.heroTitle = "AUTOSAR 솔루션"

// 변환 후 ko.json
{
  "main": {
    "heroTitle": "AUTOSAR 솔루션"
  }
}
```

**출력 파일:**
- `src/i18n/messages/ko.json` -- translations.ts의 `kr` 데이터
- `src/i18n/messages/en.json` -- translations.ts의 `en` 데이터
- `src/i18n/messages/ja.json` -- translations.ts의 `jp` 데이터
- `src/i18n/messages/zh.json` -- translations.ts의 `cn` 데이터

> 기존 `src/i18n/messages/ko.json`(시스템 B)은 삭제하고 새로 생성.

### pageMetadata.ts (471줄) 통합

`src/lib/i18n/pageMetadata.ts`가 전 페이지의 SEO title/description을 `kr`, `en`, `jp`, `cn` 코드로 관리 중.
이 데이터를 각 언어 JSON의 `metadata` 네임스페이스로 흡수:

```json
// ko.json 예시
{
  "metadata": {
    "company": {
      "title": "회사소개 | PopcornSAR",
      "description": "PopcornSAR는 AUTOSAR 전문 기업입니다."
    },
    "products": {
      "adaptive": {
        "title": "Adaptive AUTOSAR | PopcornSAR",
        "description": "..."
      }
    }
  },
  "main": { "..." },
  "company": { "..." }
}
```

통합 후 `pageMetadata.ts` 삭제, `generateMetadata`에서 `getTranslations('metadata')` 사용.

### 변환 스크립트 (1일차 첫 번째 산출물)

translations.ts + pageMetadata.ts -> 4개 JSON 변환 스크립트를 먼저 작성:

```bash
# scripts/convert-translations.ts (또는 .js)
```

**스크립트가 처리해야 할 사항:**
1. `as const` assertion 제거
2. `\n` 이스케이프 문자 보존 (JSON string 내 유지)
3. 로케일 키 변환: `kr`->`ko`, `jp`->`ja`, `cn`->`zh`
4. 중첩 객체 구조 그대로 유지
5. pageMetadata.ts의 SEO 데이터를 `metadata` 네임스페이스로 병합

**검증 절차:**
1. 스크립트 실행 -> 4개 JSON 생성
2. 원본 translations.ts의 전체 키 수 vs JSON 키 수 비교 (누락 검출)
3. 각 언어별 키 수가 동일한지 확인 (번역 누락 검출)
4. JSON.parse 유효성 검증
5. 샘플 10개 키의 값이 원본과 동일한지 수동 확인

---

## Step 4: 미들웨어 설정

### `src/middleware.ts` (신규 또는 수정)

```ts
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // 정적 파일, API, _next 등 제외
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
```

**동작 (`localePrefix: 'as-needed'`):**
- `autosar.io/` -> 한국어 유저: 그대로 `/` 표시 (리다이렉트 없음)
- `autosar.io/` -> 일본어 브라우저: `/ja/`로 리다이렉트
- `autosar.io/company` -> 한국어 페이지 직접 렌더링 (기존과 동일)
- `autosar.io/ja/company` -> 일본어 페이지 렌더링

---

## Step 5: 앱 디렉토리 구조 변경 (핵심)

### 현재 구조:
```
src/app/
  layout.tsx         <- <html lang="ko"> 하드코딩
  page.tsx           <- "use client"
  company/page.tsx
  products/adaptive/page.tsx
  ...28개 페이지
```

### 변경 후 구조:
```
src/app/
  [locale]/
    layout.tsx        <- 메인 레이아웃 (nav, footer, providers)
    page.tsx
    company/page.tsx
    products/adaptive/page.tsx
    ...28개 페이지 전부 이동
  layout.tsx           <- 최소 루트 레이아웃 (html, body만)
```

### 루트 `src/app/layout.tsx` (수정 -- 최소화)

> **빌드 검증 필요**: Next.js 14는 루트 layout에 `<html>`, `<body>`를 요구함.
> next-intl 공식 문서는 `return children` 패턴을 제시하지만, Next.js 14 일부 버전에서 경고/에러 발생 가능.
> **방법 A** (next-intl 권장): 루트에서 `return children`, [locale]/layout에서 `<html lang={locale}>` -- 빌드 시 경고 여부 확인
> **방법 B** (안전): 루트에서 `<html><body>{children}</body></html>` 유지, [locale]/layout에서 html lang을 script로 동적 설정
> -> **빌드 후 방법 결정. 방법 A 우선 시도.**

```tsx
// 방법 A (우선 시도)
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return children;
}

// 방법 B (방법 A에서 빌드 에러 시 대체)
// export default function RootLayout({ children }) {
//   return (
//     <html>
//       <body>{children}</body>
//     </html>
//   );
// }
```

### `src/app/[locale]/layout.tsx` (이동 + 수정)

```tsx
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

// locale별 동적 html lang 설정
export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {/* 기존 layout.tsx의 내용 (Header, Footer, ChatbotProvider 등) */}
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
```

---

## Step 6: useLanguage() -> useTranslations() 전환

### 영향 범위 (34개 파일)

| 구분 | 파일 수 | 파일 목록 |
|------|---------|-----------|
| page.tsx | 28개 | 전체 페이지 |
| 공통 컴포넌트 | 4개 | Header.tsx, Footer.tsx, ChatbotModal.tsx, ChatbotProvider.tsx |
| 기타 | 2개 | DynamicMetadata.tsx, not-found.tsx |

### 변환 패턴

**기존 (모든 파일 동일 패턴):**
```tsx
"use client";
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function SomePage() {
  const { t } = useLanguage();
  return <h1>{t.main.heroTitle}</h1>;  // 프로퍼티 접근
}
```

**변경 후:**
```tsx
"use client";  // <- 유지 (framer-motion 등 클라이언트 의존성)
import { useTranslations } from 'next-intl';

export default function SomePage() {
  const t = useTranslations('main');
  return <h1>{t('heroTitle')}</h1>;  // 함수 호출
}
```

### 주의: 네임스페이스 분리

현재 `t.main.heroTitle`, `t.company.title` 등 다양한 네임스페이스를 한 페이지에서 혼용하는 경우:

```tsx
// 기존
const { t } = useLanguage();
<h1>{t.main.heroTitle}</h1>
<p>{t.common.learnMore}</p>

// 변경
const tMain = useTranslations('main');
const tCommon = useTranslations('common');
<h1>{tMain('heroTitle')}</h1>
<p>{tCommon('learnMore')}</p>
```

---

## Step 7: 내부 링크 업데이트

### next-intl의 Link 컴포넌트 사용

```tsx
import { Link } from '@/i18n/routing';

// 자동으로 현재 locale prefix 추가
<Link href="/company">회사소개</Link>
// 한국어일 때 -> /company (prefix 없음, as-needed)
// 일본어일 때 -> /ja/company
```

**Header.tsx, Footer.tsx, 각 페이지 내부 링크 50개 이상 위치 수정 필요.**

### 기존 next/link -> next-intl Link로 전환

```tsx
// 기존
import Link from 'next/link';

// 변경
import { Link } from '@/i18n/routing';
```

---

## Step 8: 언어 전환기 수정

기존 클라이언트 사이드 언어 전환(LanguageContext) -> URL 기반 전환으로 변경.

```tsx
"use client";
import { usePathname, useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';

function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();

  const switchLocale = (locale: string) => {
    router.replace(pathname, { locale });
  };

  return (
    <select value={currentLocale} onChange={(e) => switchLocale(e.target.value)}>
      <option value="ko">한국어</option>
      <option value="en">English</option>
      <option value="ja">日本語</option>
      <option value="zh">中文</option>
    </select>
  );
}
```

### 기존 LanguageContext/LanguageProvider 제거

`useLanguage()` 훅과 `LanguageContext`는 next-intl의 `NextIntlClientProvider`로 대체되므로 삭제.

---

## Step 9: SEO 메타데이터 업데이트

### 9-1. `<html lang>` 동적화 (Step 5에서 처리)

```html
<!-- /company --> <html lang="ko">
<!-- /ja/company --> <html lang="ja">
<!-- /en/company --> <html lang="en">
<!-- /zh/company --> <html lang="zh">
```

### 9-2. og:locale 동적화

```tsx
// [locale]/layout.tsx의 generateMetadata
export async function generateMetadata({ params: { locale } }) {
  const ogLocaleMap = {
    ko: 'ko_KR',
    en: 'en_US',
    ja: 'ja_JP',
    zh: 'zh_CN'
  };

  return {
    openGraph: {
      locale: ogLocaleMap[locale],
      alternateLocales: Object.values(ogLocaleMap).filter(l => l !== ogLocaleMap[locale]),
    }
  };
}
```

### 9-3. 각 페이지 hreflang (alternates)

```tsx
// as-needed 모드: 한국어는 prefix 없음
export async function generateMetadata({ params: { locale } }) {
  const pagePath = '/company';  // 각 페이지별로 다름

  return {
    alternates: {
      canonical: locale === 'ko'
        ? `https://autosar.io${pagePath}`
        : `https://autosar.io/${locale}${pagePath}`,
      languages: {
        'ko': `https://autosar.io${pagePath}`,           // prefix 없음
        'en': `https://autosar.io/en${pagePath}`,
        'ja': `https://autosar.io/ja${pagePath}`,
        'zh': `https://autosar.io/zh${pagePath}`,
        'x-default': `https://autosar.io${pagePath}`,    // 한국어를 x-default로
      }
    }
  };
}
```

**x-default 전략:** 주 고객이 한국+일본이므로 한국어(기본 언어)를 x-default로 설정. 글로벌 확장 시 영어로 변경 가능.

### 9-4. JSON-LD 구조화 데이터 locale 반영

```tsx
// JsonLd.tsx 수정
function OrganizationJsonLd({ locale }: { locale: string }) {
  const baseUrl = locale === 'ko'
    ? 'https://autosar.io'
    : `https://autosar.io/${locale}`;

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "url": baseUrl,
    // ...
  };
}
```

### 9-5. sitemap.xml 업데이트 (`src/app/sitemap.ts`)

```ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://autosar.io';
  const locales = ['ko', 'en', 'ja', 'zh'];
  const pages = [
    '/', '/company', '/company/notice', '/company/contact',
    '/products', '/products/adaptive', '/products/autosario',
    '/products/para', '/products/pacon', '/products/ai',
    '/products/parvisadk', '/products/aiagent',
    '/service', '/service/autosar', '/service/consulting',
    '/service/education', '/service/tool', '/service/ai',
    '/solution', '/solution/cloudnative', '/solution/digital',
    '/solution/ai', '/solution/matlab', '/solution/aiagent',
    '/support', '/support/qna',
  ];

  return pages.flatMap(page =>
    locales.map(locale => ({
      url: locale === 'ko'
        ? `${baseUrl}${page === '/' ? '' : page}`
        : `${baseUrl}/${locale}${page === '/' ? '' : page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: page === '/' ? 1 : 0.8,
    }))
  );
}
```

URL 수: 26 x 4 = **104개**

---

## Step 10: next.config.mjs 업데이트

```js
// ESM 문법 (next.config.mjs)
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 기존 설정 유지
  // ...

  // 기존 redirects도 locale 대응 필요
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/company',
        permanent: true,
      },
      {
        source: '/:locale(en|ja|zh)/about',
        destination: '/:locale/company',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/company/contact',
        permanent: true,
      },
      {
        source: '/:locale(en|ja|zh)/contact',
        destination: '/:locale/company/contact',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
```

---

## Step 11: Chatbot 언어 감지 수정

ChatbotModal.tsx, ChatbotProvider.tsx에서 `useLanguage()` 대신 `useLocale()` 사용:

```tsx
import { useLocale } from 'next-intl';

function ChatbotModal() {
  const locale = useLocale();
  // locale: 'ko' | 'en' | 'ja' | 'zh'
}
```

---

## 수정 파일 목록 (정량)

| 구분 | 파일 | 작업 | 난이도 |
|------|------|------|--------|
| 신규 | `src/i18n/routing.ts` | 라우팅 + navigation 설정 | 낮음 |
| 신규 | `src/i18n/request.ts` | 서버 사이드 번역 로더 | 낮음 |
| 신규 | `src/middleware.ts` | locale 감지 + 리다이렉트 | 낮음 |
| 변환 | `src/i18n/messages/ko.json` | translations.ts `kr` -> JSON 변환 | **높음** |
| 변환 | `src/i18n/messages/en.json` | translations.ts `en` -> JSON 변환 | **높음** |
| 변환 | `src/i18n/messages/ja.json` | translations.ts `jp` -> JSON 변환 | **높음** |
| 변환 | `src/i18n/messages/zh.json` | translations.ts `cn` -> JSON 변환 | **높음** |
| 수정 | `next.config.mjs` | withNextIntl 래퍼 + redirects locale 대응 | 낮음 |
| 수정 | `src/app/layout.tsx` | 최소 루트 레이아웃으로 축소 | 중간 |
| 이동+수정 | `src/app/[locale]/layout.tsx` | 메인 레이아웃 + html lang 동적 + og:locale | 중간 |
| 이동+수정 | page.tsx **28개** | [locale] 하위 이동 + useLanguage->useTranslations | **높음** |
| 수정 | `Header.tsx` | Link + 언어 전환기 리팩토링 | 중간 |
| 수정 | `Footer.tsx` | Link 교체 | 중간 |
| 수정 | `ChatbotModal.tsx` | useLanguage -> useLocale | 낮음 |
| 수정 | `ChatbotProvider.tsx` | useLanguage -> useLocale | 낮음 |
| 수정 | `DynamicMetadata.tsx` | locale 파라미터 기반으로 변경 | 중간 |
| 수정 | `not-found.tsx` | useLanguage -> useTranslations | 낮음 |
| 수정 | `JsonLd.tsx` | locale 파라미터 + URL 동적화 (5개소) | 중간 |
| 수정 | `src/app/sitemap.ts` | 4언어 x 26페이지 = 104 URL | 낮음 |
| 삭제 | `src/lib/i18n/translations.ts` | JSON으로 대체 후 삭제 | - |
| 삭제 | `src/lib/i18n/pageMetadata.ts` | JSON `metadata` 네임스페이스로 흡수 후 삭제 | - |
| 삭제 | `src/lib/i18n/LanguageContext.tsx` | next-intl Provider로 대체 | - |
| 삭제 | `src/i18n/config.ts` | routing.ts로 통합 후 삭제 | - |
| 신규 | `scripts/convert-translations.ts` | 변환 스크립트 (1회성) | 중간 |
| **합계** | **약 48개 파일** | | |

---

## 작업 순서 권장

### 1일차: 기반 설정
- Step 1: `next-intl@^3.22` 설치
- Step 2: routing.ts, request.ts 생성 + 기존 config.ts 삭제
- Step 3: **변환 스크립트 작성 -> 실행 -> diff 검증** (translations.ts + pageMetadata.ts -> 4개 JSON)
- Step 4: middleware.ts 생성

### 2일차: 구조 변경
- Step 5: [locale] 디렉토리 구조 이동 (28개 페이지)
- Step 6: useLanguage -> useTranslations 전환 (34개 파일)
- Step 10: next.config.mjs 수정

### 3일차: 링크 + SEO
- Step 7: 내부 링크 업데이트 (50개 이상 위치)
- Step 8: 언어 전환기 리팩토링
- Step 9: SEO 메타데이터 전체 (html lang, og:locale, hreflang, JSON-LD, sitemap)
- Step 11: Chatbot 언어 감지 수정

### 4일차: 테스트 + 디버그
- 전체 빌드 테스트 (`npm run build`)
- 브라우저 테스트 (4개 언어 x 주요 페이지)
- SEO 검증 (hreflang, sitemap, canonical)
- 기존 URL 리다이렉트 동작 확인
- Google Search Console 사이트맵 재제출

---

## 검증 체크리스트

### 기능 테스트
- [ ] `autosar.io/` -> 한국어 페이지 (리다이렉트 없음)
- [ ] `autosar.io/ja/` -> 일본어 페이지
- [ ] `autosar.io/en/` -> 영어 페이지
- [ ] `autosar.io/zh/` -> 중국어 페이지
- [ ] `autosar.io/company` -> 한국어 회사소개 (기존 URL 유지)
- [ ] `autosar.io/ja/company` -> 일본어 회사소개
- [ ] 언어 전환기 클릭 -> URL 변경 확인
- [ ] 모든 내부 링크가 locale prefix 자동 포함

### SEO 테스트
- [ ] `<html lang="ko">` / `<html lang="ja">` 등 동적 변경
- [ ] og:locale -- ko_KR, ja_JP 등 동적 변경
- [ ] hreflang 태그 -- 4개 언어 + x-default 포함
- [ ] canonical URL -- locale prefix 정확히 반영
- [ ] sitemap.xml -- 104개 URL, 한국어는 prefix 없음
- [ ] robots.txt -- sitemap URL 유효
- [ ] JSON-LD -- locale별 URL 반영

### 호환성 테스트
- [ ] `npm run build` 에러 없음
- [ ] 기존 `/about`, `/contact` 리다이렉트 정상 동작
- [ ] Chatbot 언어 감지 정상

---

## 리스크 및 대응

| 리스크 | 영향 | 대응 |
|--------|------|------|
| "use client" 전 페이지 -- SSR 번역 불가 | Google JS 미실행 시 번역 콘텐츠 미인덱싱 | URL + hreflang만으로도 다국어 인식 가능. 향후 서버 컴포넌트 전환 시 추가 이점 |
| translations.ts <-> JSON 변환 중 데이터 누락 | 일부 페이지 번역 깨짐 | 자동 변환 스크립트 + 전 페이지 수동 검증 |
| Next.js 15 업그레이드 시 params Promise 변경 | 전 페이지 수정 필요 | 현재는 Next.js 14 유지, 업그레이드 시 별도 계획 |
| 로케일 코드 불일치 (kr<->ko, jp<->ja, cn<->zh) | 기존 로직과 충돌 | 변환 시 일괄 통일, 검색/치환으로 누락 방지 |

---

## v1 -> v2 -> v2.1 변경사항 요약

| 항목 | v1 (최초) | v2 (1차 수정) | v2.1 (최종) |
|------|-----------|---------------|-------------|
| localePrefix | `'always'` | `'as-needed'` | 유지 |
| next.config | `require()` (CommonJS) | `import` (ESM) | 유지 |
| next-intl 버전 | 미명시 | `@3` 명시 | **`@^3.22`** 명시 |
| html lang | 미언급 | 동적화 추가 | + 루트 layout 빌드 검증 주의사항 |
| og:locale | 미언급 | 동적화 추가 | 유지 |
| JSON-LD locale | 미언급 | locale 파라미터 추가 | 유지 |
| x-default | `/ko/company` | `/company` | 유지 |
| 번역 시스템 | 미인지 | 이중 시스템 통합 명시 | + **pageMetadata.ts 471줄 흡수** |
| 변환 방법 | 미언급 | "스크립트 권장" | **스크립트 구체화 + diff 검증 절차** |
| config.ts 충돌 | 미인지 | 미인지 | **routing.ts로 통합, config.ts 삭제** |
| useLanguage 범위 | 23개 | 34개 | 유지 |
| "use client" 한계 | 미인지 | 구조적 한계 명시 | 유지 |
| 작업 일수 | 3일 | 4일 | 유지 |
| Chatbot 수정 | 미포함 | Step 11 추가 | 유지 |
| redirects | 미포함 | locale 대응 추가 | 유지 |
| 수정 파일 수 | ~20개 | ~45개 | **~48개** |
