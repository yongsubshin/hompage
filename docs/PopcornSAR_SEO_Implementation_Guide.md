# PopcornSAR 웹사이트 SEO 전면 구현 가이드

이 문서는 Next.js 프로젝트의 SEO를 구현하기 위한 서버 클로드용 프롬프트입니다. 코드베이스에 접근하여 아래 내용을 순서대로 적용해주세요.

> **[피드백] 변경 추적 안내**: 이 문서는 코드 분석, SEO 기술, 마케팅 전략 3개 전문 에이전트 검토 후 피드백이 병합된 최종본입니다. `[수정]`, `[추가]`, `[피드백]` 마커로 원본 대비 변경사항을 추적할 수 있습니다.

---

## 현재 상태 요약

- **프레임워크**: Next.js (App Router)
- **도메인**: https://web.popcornsar.com (프로덕션), 추후 https://popcornsar.com 으로 이전 가능
- **지원 언어**: EN(기본), KR, CN, JP
- **i18n 방식**: 클라이언트 사이드 전환 (React Context + localStorage, URL 미분리)
- **현재 문제**:
  - `og:image`가 `http://localhost:3000/images/og-image.jpg` -- 치명적 버그
  - `og:url`이 `https://popcornsar.com` (실제와 불일치)
  - `robots.txt` 없음 (404)
  - `sitemap.xml` 없음 (404)
  - canonical URL 없음
  - hreflang 태그 없음
  - JSON-LD 구조화 데이터 없음
  - meta description이 전 페이지 동일
  - 페이지별 OG 태그 미분화
  - [추가] `public/images/og-image.jpg` 파일 미존재 (루트 레이아웃에서 참조하지만 실제 파일 없음)
  - [추가] 모든 28개 page.tsx에 `"use client"` 지시어 사용 중 -- 메타데이터 export 불가
  - [추가] 27개 하위 layout.tsx에서 `title: { absolute: "X | PopcornSAR" }` 패턴 사용 중
  - [추가] `/contact`와 `/company/contact` 중복 페이지 존재 (중복 콘텐츠 우려)

> [피드백] 코드 분석 에이전트가 전체 코드베이스를 검사한 결과, 위 추가 항목들이 확인되었습니다. 특히 `"use client"` 문제는 가이드 원본의 metadata 배치 전략 전체를 수정해야 하는 핵심 발견입니다.

---

## [추가] 작업 0: 기존 absolute title 마이그레이션

> [피드백] 코드 분석 결과, 현재 27개 하위 layout.tsx 파일이 모두 `title: { absolute: "X | PopcornSAR" }` 패턴을 사용합니다. 루트 레이아웃의 `template: "%s | PopcornSAR"`을 활용하려면, 하위 파일에서 `absolute`를 제거하고 단순 문자열 title로 전환해야 합니다. SEO 결과물(HTML 출력)은 동일하지만, DRY 원칙에 부합하고 향후 유지보수가 용이합니다.

### 마이그레이션 대상 (27개 파일)

모든 하위 layout.tsx 파일에서 아래 패턴을 변경합니다.

변경 전:

```typescript
export const metadata: Metadata = {
  title: { absolute: "PARVIS | PopcornSAR" },
};
```

변경 후:

```typescript
export const metadata: Metadata = {
  title: "PARVIS",
};
```

루트 레이아웃의 `template: "%s | PopcornSAR"`이 자동으로 `"PARVIS | PopcornSAR"`을 생성합니다.

### 전체 대상 파일 목록

**1단계 카테고리 레이아웃 (5개)**

- `src/app/company/layout.tsx` -- "회사소개 | PopcornSAR" -> title: "회사소개"
- `src/app/products/layout.tsx` -- "제품 | PopcornSAR" -> title: "제품"
- `src/app/solution/layout.tsx` -- "솔루션 | PopcornSAR" -> title: "솔루션"
- `src/app/service/layout.tsx` -- "서비스 | PopcornSAR" -> title: "서비스"
- `src/app/support/layout.tsx` -- "고객지원 | PopcornSAR" -> title: "고객지원"

**2단계 기타 페이지 레이아웃 (4개)**

- `src/app/about/layout.tsx` -- "About | PopcornSAR" -> title: "About"
- `src/app/contact/layout.tsx` -- "Contact | PopcornSAR" -> title: "Contact"
- `src/app/support/qna/layout.tsx` -- "Q&A | PopcornSAR" -> title: "Q&A"
- `src/app/company/notice/layout.tsx` -- "공지사항 | PopcornSAR" -> title: "공지사항"
- `src/app/company/contact/layout.tsx` -- "문의하기 | PopcornSAR" -> title: "문의하기"

**3단계 제품 상세 레이아웃 (7개)**

- `src/app/products/adaptive/layout.tsx` -- title: "AUTOSAR Tool Kit"
- `src/app/products/autosario/layout.tsx` -- title: "AutoSAR.io"
- `src/app/products/para/layout.tsx` -- title: "PARA"
- `src/app/products/pacon/layout.tsx` -- title: "PACON IDE"
- `src/app/products/ai/layout.tsx` -- title: "PARVIS"
- `src/app/products/parvisadk/layout.tsx` -- title: "PARVIS ADK"
- `src/app/products/aiagent/layout.tsx` -- title: "AUTOSAR AI Agent"

**4단계 솔루션 상세 레이아웃 (5개)**

- `src/app/solution/cloudnative/layout.tsx` -- title: "Cloud Native"
- `src/app/solution/digital/layout.tsx` -- title: "Digital Twin"
- `src/app/solution/ai/layout.tsx` -- title: "AI for Adaptive Platforms"
- `src/app/solution/aiagent/layout.tsx` -- title: "PARVIS Agent"
- `src/app/solution/matlab/layout.tsx` -- title: "MATLAB & Simulink"

**5단계 서비스 상세 레이아웃 (5개)**

- `src/app/service/consulting/layout.tsx` -- title: "Consulting Service"
- `src/app/service/autosar/layout.tsx` -- title: "AUTOSAR Implementation"
- `src/app/service/education/layout.tsx` -- title: "AUTOSAR Training"
- `src/app/service/tool/layout.tsx` -- title: "Custom Development"
- `src/app/service/ai/layout.tsx` -- title: "AI Agent Core Training"

### 주의사항

- `title: { absolute: "..." }`는 완전히 커스텀 title이 필요한 페이지에만 사용 (예: 404 페이지)
- 마이그레이션 후 빌드하여 `<title>` 태그가 동일하게 출력되는지 확인

---

## 작업 1: 사이트 전역 기본 URL 설정

프로젝트 루트에 환경변수 또는 상수 파일에서 기본 URL을 정의:

```typescript
// lib/constants.ts (또는 적절한 위치)
export const SITE_URL = 'https://web.popcornsar.com';
export const SITE_NAME = 'PopcornSAR';
```

---

## 작업 2: 레이아웃 전역 메타데이터 수정

[수정] `app/layout.tsx`의 metadata를 아래와 같이 수정합니다.

> [피드백] 원본은 page.tsx에 metadata를 배치하는 예시였으나, 모든 page.tsx가 `"use client"`이므로 **layout.tsx에서만 metadata export가 가능**합니다. Next.js에서 `"use client"` 컴포넌트는 정적 `metadata` 또는 `generateMetadata()` export가 불가능하며, 빌드 에러가 발생합니다. 따라서 이 가이드의 모든 메타데이터 코드 예시는 layout.tsx 기준입니다.

```typescript
// app/layout.tsx
import type { Metadata } from 'next';

const SITE_URL = 'https://web.popcornsar.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'PopcornSAR | ASPICE V-Model 자동화 & AI 테스트케이스 생성',
    template: '%s | PopcornSAR',
  },
  // [수정] 한국어 description 70-80자 이내로 축소, ASPICE/ISO26262 키워드 우선
  description: 'ASPICE V-Model 자동화 전문 기업 PopcornSAR. AI 테스트케이스 자동 생성, ISO 26262 검증, AUTOSAR 개발 도구 제공.',
  // [수정] ASPICE/ISO26262 키워드를 최우선 배치, 30+개에서 핵심 8-10개로 축소
  keywords: [
    // 핵심 프로세스/안전 표준 (최우선)
    'ASPICE', 'ISO 26262', 'V-Model', 'MISRA-C',
    // 브랜드 & 핵심 기능
    'PopcornSAR', 'PARVIS', 'test case generation', 'AI test automation',
    // AUTOSAR 포지셔닝
    'AUTOSAR', 'Adaptive AUTOSAR', 'automotive software',
  ],
  authors: [{ name: 'PopcornSAR', url: SITE_URL }],
  creator: 'PopcornSAR',
  publisher: 'PopcornSAR',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    alternateLocale: ['en_US', 'ja_JP', 'zh_CN'],
    url: SITE_URL,
    siteName: 'PopcornSAR',
    // [수정] OG title은 영문 기준 60자 이내 (Facebook 모바일 40자, 데스크톱 60자 기준)
    title: 'PopcornSAR | ASPICE & AI-Powered Automotive Development',
    // OG description은 영문 150-160자 유지
    description: 'ASPICE V-Model automation specialist. AI-powered test case generation (86.4% coverage), ISO 26262 verification, and AUTOSAR development tools for next-gen mobility.',
    images: [
      {
        // [수정] metadataBase 설정 시 상대 경로 사용 권장
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PopcornSAR - ASPICE & AUTOSAR Solutions Provider',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PopcornSAR | ASPICE & AI-Powered Automotive Development',
    description: 'ASPICE V-Model automation specialist. AI-powered test case generation, ISO 26262 verification, AUTOSAR development tools.',
    images: ['/images/og-image.jpg'],
  },
  // [수정] hreflang: 동일 URL 4개 언어 설정 제거, canonical만 설정
  alternates: {
    canonical: '/',
  },
  verification: {
    // 구글 서치 콘솔 등록 후 아래 값 채우기
    // google: 'GOOGLE_VERIFICATION_CODE',
    // 네이버 서치어드바이저 등록 후 아래 값 채우기
    // other: { 'naver-site-verification': 'NAVER_CODE' },
  },
};
```

> [피드백] **hreflang 변경 이유**: 원본에서는 4개 언어(ko, en, ja, zh)가 모두 동일 URL을 가리키는 hreflang을 설정했습니다. 이는 검색엔진에 모순 신호를 보내며, Google은 `<html lang="ko">`를 기준으로 한국어 하나만 인덱싱할 가능성이 높습니다. 현재 URL 기반 언어 분리가 없으므로, canonical URL만 설정하고 hreflang은 제거합니다. 향후 URL 기반 i18n 전환 시 올바른 hreflang을 추가해야 합니다.

> [피드백] **keywords 축소 이유**: Google은 `meta keywords` 태그를 랭킹 요소로 사용하지 않습니다. 30+개 다국어 키워드 혼합은 SEO 이점 없이 코드 복잡도만 증가시킵니다. 핵심 8-10개 영문 키워드로 축소하되, ASPICE/ISO26262를 최우선 배치합니다.

> [피드백] **description 길이 이유**: 한국어 Google SERP는 70-80자에서 절삭됩니다. 핵심 가치 제안(ASPICE V-Model 자동화)을 첫 40자에 배치하여 검색 결과에서 잘리지 않도록 합니다.

> **중요**: `metadataBase`를 설정하면 상대 경로 OG 이미지가 자동으로 절대 경로로 변환됩니다. 이것만으로도 localhost 문제가 해결됩니다. 하위 페이지에서도 절대 경로 대신 상대 경로를 사용하세요.

---

## 작업 3: 페이지별 메타데이터

> [피드백] 모든 메타데이터는 layout.tsx에 배치합니다. page.tsx는 `"use client"`이므로 메타데이터 export가 불가합니다.
> [수정] 하위 페이지 canonical/OG URL은 `metadataBase` 활용을 위해 상대 경로로 변경합니다.
> [수정] 한국어 description은 모두 70-80자 이내로 작성합니다.

### 3-1. 메인 페이지 (`app/layout.tsx` -- 루트 metadata에 포함)

루트 레이아웃 metadata가 메인 페이지의 메타데이터를 담당합니다 (작업 2 참조).

### 3-2. 회사소개 (`app/company/layout.tsx`)

```typescript
export const metadata: Metadata = {
  // [수정] absolute 제거, template 활용
  title: '회사소개',
  // [수정] 한국어 70자 이내
  description: 'ASPICE/AUTOSAR Adaptive Platform 선두 기업. 50+ 글로벌 고객사, 100+ 프로젝트 경험.',
  openGraph: {
    title: '회사소개 | PopcornSAR',
    description: 'ASPICE & AUTOSAR Adaptive Platform leader. 50+ global clients, 100+ projects.',
    url: '/company',
  },
  alternates: {
    canonical: '/company',
  },
};
```

### [추가] 3-2b. About 페이지 (`app/about/layout.tsx`)

```typescript
export const metadata: Metadata = {
  title: 'About',
  description: 'PopcornSAR company overview. ASPICE, AUTOSAR specialists in Seoul and Tokyo.',
  openGraph: {
    title: 'About | PopcornSAR',
    description: 'PopcornSAR: ASPICE & AUTOSAR specialists with offices in Seoul and Tokyo.',
    url: '/about',
  },
  alternates: {
    canonical: '/about',
  },
};
```

### 3-3. 제품 (`app/products/layout.tsx`)

```typescript
export const metadata: Metadata = {
  title: '제품',
  // [수정] 한국어 70자 이내, ASPICE 키워드 포함
  description: 'ASPICE 자동화 AI 도구 PARVIS와 AUTOSAR 개발 플랫폼. AutoSAR.io, PARA, PACON IDE 제공.',
  openGraph: {
    title: '제품 | PopcornSAR',
    description: 'ASPICE automation AI tools and AUTOSAR development platform. PARVIS, AutoSAR.io, PARA, PACON IDE.',
    url: '/products',
  },
  alternates: {
    canonical: '/products',
  },
};
```

### 3-4. 솔루션 (`app/solution/layout.tsx`)

```typescript
export const metadata: Metadata = {
  title: '솔루션',
  // [수정] 한국어 70자 이내
  description: 'Cloud Native, Digital Twin, AI 기반 AUTOSAR 솔루션. MATLAB 연동, PARVIS Agent 제공.',
  openGraph: {
    title: '솔루션 | PopcornSAR',
    description: 'Cloud Native, Digital Twin, AI-based AUTOSAR solutions with MATLAB integration.',
    url: '/solution',
  },
  alternates: {
    canonical: '/solution',
  },
};
```

### 3-5. 서비스 (`app/service/layout.tsx`)

```typescript
export const metadata: Metadata = {
  title: '서비스',
  // [수정] 한국어 70자 이내, ASPICE 키워드 추가
  description: 'ASPICE 컨설팅, AUTOSAR 구현 지원, 교육, AI Agent Core 교육 등 전문 엔지니어링 서비스.',
  openGraph: {
    title: '서비스 | PopcornSAR',
    description: 'ASPICE consulting, AUTOSAR implementation, training, and AI Agent Core education services.',
    url: '/service',
  },
  alternates: {
    canonical: '/service',
  },
};
```

### 3-6. 고객지원 (`app/support/layout.tsx`)

```typescript
export const metadata: Metadata = {
  title: '고객지원',
  // [수정] 한국어 70자 이내
  description: 'PopcornSAR 제품 다운로드 및 기술 지원. AutoSAR.io 평가판, 개발 플랫폼 소개 자료.',
  openGraph: {
    title: '고객지원 | PopcornSAR',
    description: 'PopcornSAR product downloads and technical support. AutoSAR.io trial available.',
    url: '/support',
  },
  alternates: {
    canonical: '/support',
  },
};
```

### [추가] 3-6b. Q&A 페이지 (`app/support/qna/layout.tsx`)

```typescript
export const metadata: Metadata = {
  title: 'Q&A',
  description: 'AUTOSAR 개발 및 PopcornSAR 제품 관련 자주 묻는 질문과 답변.',
  openGraph: {
    title: 'Q&A | PopcornSAR',
    description: 'Frequently asked questions about AUTOSAR development and PopcornSAR products.',
    url: '/support/qna',
  },
  alternates: {
    canonical: '/support/qna',
  },
};
```

### 3-7. 문의하기 (`app/company/contact/layout.tsx`)

```typescript
export const metadata: Metadata = {
  title: '문의하기',
  // [수정] 한국어 70자 이내
  description: 'PopcornSAR 문의. 한국 본사(서울), 일본 법인(도쿄). AUTOSAR 제품/솔루션 상담.',
  openGraph: {
    title: '문의하기 | PopcornSAR',
    description: 'Contact PopcornSAR. Seoul HQ and Tokyo office. AUTOSAR product and solution inquiries.',
    url: '/company/contact',
  },
  alternates: {
    canonical: '/company/contact',
  },
};
```

### [추가] 3-7b. Contact 페이지 (`app/contact/layout.tsx`)

> [피드백] `/contact`와 `/company/contact` 두 개의 문의 페이지가 존재합니다. 중복 콘텐츠 문제를 피하려면 하나로 통합하거나, 하나에서 다른 하나로 리디렉트하는 것을 권장합니다. 두 페이지를 유지하는 경우, canonical URL을 `/contact`로 통일하세요.

```typescript
export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact PopcornSAR for AUTOSAR solutions and ASPICE consulting inquiries.',
  openGraph: {
    title: 'Contact | PopcornSAR',
    description: 'Contact PopcornSAR. Seoul HQ and Tokyo office.',
    url: '/contact',
  },
  alternates: {
    canonical: '/contact',
  },
};
```

### 3-8. 공지사항 (`app/company/notice/layout.tsx`)

```typescript
export const metadata: Metadata = {
  title: '공지사항',
  // [수정] 한국어 70자 이내
  description: 'PopcornSAR 최신 소식, 제품 업데이트, 이벤트, 파트너십 공지사항.',
  openGraph: {
    title: '공지사항 | PopcornSAR',
    description: 'PopcornSAR latest news, product updates, events, and partnership announcements.',
    url: '/company/notice',
  },
  alternates: {
    canonical: '/company/notice',
  },
};
```

---

## 작업 3-B: 제품 상세 페이지 메타데이터 (17개)

> **공통 문제**: 모든 상세 페이지의 meta description이 동일한 기본값 사용 중. 각 페이지마다 고유한 description 필요.
> [수정] 모든 코드 예시가 layout.tsx 기준으로 변경되었습니다.
> [수정] ASPICE/ISO26262 키워드를 keywords 배열 상위에 배치합니다.

### 제품(Products) 상세 -- 7개

#### `/products/adaptive` (AUTOSAR Tool Kit) -- `layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'AUTOSAR Tool Kit - Adaptive AUTOSAR 통합 개발 도구',
  // [수정] 한국어 80자 이내
  description: 'AutoSAR.io, PARA, PACON IDE 통합 Adaptive AUTOSAR 개발 도구. ARXML 설계부터 빌드/테스트까지.',
  openGraph: {
    title: 'AUTOSAR Tool Kit | PopcornSAR',
    description: 'Integrated Adaptive AUTOSAR development tools. Design-to-test workflow with AutoSAR.io, PARA, PACON IDE.',
    url: '/products/adaptive',
  },
  alternates: { canonical: '/products/adaptive' },
};
```

#### `/products/autosario` (AutoSAR.io) -- `layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'AutoSAR.io - AUTOSAR ARXML 설계 도구',
  // [수정] 한국어 75자 이내
  description: 'AUTOSAR Classic/Adaptive ARXML 설계 도구. Manifest 편집, 소스코드 생성, 웹 기반 플랫폼.',
  // [수정] ASPICE 키워드 추가
  keywords: ['AutoSAR.io', 'ARXML editor', 'ASPICE SWE.2', 'AUTOSAR design tool', 'ARXML authoring', 'Adaptive Platform design'],
  openGraph: {
    title: 'AutoSAR.io - ARXML Design Tool | PopcornSAR',
    description: 'AUTOSAR Classic & Adaptive ARXML design tool. Web-based, R20-11 support.',
    url: '/products/autosario',
  },
  alternates: { canonical: '/products/autosario' },
};
```

#### `/products/para` (PARA) -- `layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'PARA - AUTOSAR Adaptive Functional Clusters',
  // [수정] 한국어 80자 이내
  description: 'AUTOSAR Adaptive Functional Cluster API/C++ Generator. ISO 26262 안전 메커니즘 포함, R20-11 지원.',
  // [수정] ISO 26262 키워드 우선 배치
  keywords: ['PARA', 'ISO 26262', 'AUTOSAR Functional Clusters', 'Adaptive Platform API', 'ARA API', 'ara::com', 'ara::exec'],
  openGraph: {
    title: 'PARA - AUTOSAR Adaptive Platform Software | PopcornSAR',
    description: 'AUTOSAR Adaptive Functional Clusters with ISO 26262 safety mechanisms. API, C++ Generator, Manifest Generator.',
    url: '/products/para',
  },
  alternates: { canonical: '/products/para' },
};
```

#### `/products/pacon` (PACON IDE) -- `layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'PACON IDE - VSCode 기반 AUTOSAR 통합 개발 환경',
  // [수정] 한국어 80자 이내
  description: 'Docker 가상 ECU 환경 Adaptive Application 개발. ARA API 자동완성, Jenkins CI/CD 통합.',
  // [수정] ISO 26262 tool qualification 키워드 추가
  keywords: ['PACON IDE', 'AUTOSAR IDE', 'ISO 26262 tool qualification', 'VSCode AUTOSAR', 'virtual ECU', 'Docker AUTOSAR', 'AUTOSAR CI/CD'],
  openGraph: {
    title: 'PACON IDE - AUTOSAR Development Environment | PopcornSAR',
    description: 'VSCode-based AUTOSAR IDE. Docker virtual ECU, ARA API autocomplete, CI/CD integration.',
    url: '/products/pacon',
  },
  alternates: { canonical: '/products/pacon' },
};
```

#### `/products/ai` (PARVIS) -- 핵심 제품 -- `layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'PARVIS - AI 테스트케이스 자동 생성 & ASPICE V-Model 자동화',
  // [수정] 한국어 75자 이내, ASPICE/ISO26262 우선, 핵심 수치 포함
  description: 'ASPICE 테스트케이스 AI 자동 생성(86.4% 커버리지). ISO 26262 검증, MISRA-C 94% 준수, V-Model 전과정 자동화.',
  keywords: [
    // [수정] ASPICE/ISO26262 최우선 배치
    'ASPICE test case generation', 'ASPICE artifact automation', 'ISO 26262 test automation',
    'ASPICE 테스트케이스 자동 생성', 'ASPICE 산출물 자동화',
    // 테스트케이스 자동 생성 관련
    'AI test case generation for AUTOSAR', 'automated test generation automotive',
    '테스트케이스 자동 생성', 'テストケース自動生成', '测试用例自动生成',
    // V-Model / MISRA
    'PARVIS', 'V-Model automation', 'MISRA-C automation',
  ],
  openGraph: {
    title: 'PARVIS - AI Test Case Generation & ASPICE Automation | PopcornSAR',
    description: 'AI-powered test case generation (86.4% coverage). ASPICE V-Model automation, ISO 26262 verification, MISRA-C compliance. 3-4x productivity gain.',
    url: '/products/ai',
  },
  alternates: { canonical: '/products/ai' },
};
```

#### `/products/parvisadk` (PARVIS ADK) -- TDD 테스트케이스 자동 생성 포함 -- `layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'PARVIS ADK - SDV 개발 자동화 & TDD 테스트케이스 자동 생성',
  // [수정] 한국어 80자 이내
  description: 'CAN DBC/ARXML 기반 SDV End-to-End 자동화. TDD 테스트케이스 AI 생성, ASPICE/V-Model 자동 준수.',
  keywords: [
    // [수정] ASPICE 키워드 우선
    'ASPICE V-Model automation', 'ASPICE SDV compliance',
    'TDD test automation', 'TDD 테스트케이스 자동 생성',
    'PARVIS ADK', 'SDV development', 'Software Defined Vehicle',
    'CAN DBC parser', 'ARXML parser', 'SOME/IP',
  ],
  openGraph: {
    title: 'PARVIS ADK - SDV & TDD Test Automation | PopcornSAR',
    description: 'AI-powered SDV End-to-End automation. TDD test case generation, ASPICE V-Model compliance. 70-80% faster development.',
    url: '/products/parvisadk',
  },
  alternates: { canonical: '/products/parvisadk' },
};
```

#### `/products/aiagent` (AUTOSAR AI Agent) -- `layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'AUTOSAR AI Agent - AI 기반 AUTOSAR 개발 지원 도구',
  // [수정] 한국어 75자 이내
  description: 'AI 자연어로 AUTOSAR 개발. ARXML 자동 생성, API/SWS 검색, 개발 시간 70%+ 절감.',
  keywords: ['AUTOSAR AI Agent', 'ARXML generator AI', 'AUTOSAR chatbot', 'SWS search', 'AUTOSAR API search'],
  openGraph: {
    title: 'AUTOSAR AI Agent - AI Development Assistant | PopcornSAR',
    description: 'AI-powered AUTOSAR development. Auto-generate ARXML, search APIs/SWS docs. 70%+ time savings.',
    url: '/products/aiagent',
  },
  alternates: { canonical: '/products/aiagent' },
};
```

### 솔루션(Solution) 상세 -- 5개

#### `/solution/cloudnative` (Cloud Native) -- `layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Cloud Native AUTOSAR - 클라우드 기반 AA 개발 솔루션',
  // [수정] 한국어 75자 이내
  description: 'AWS 기반 AUTOSAR Adaptive Application 개발. ARM64 Docker 가상 ECU, CI/CD 파이프라인.',
  keywords: ['Cloud Native AUTOSAR', 'AWS AUTOSAR', 'cloud automotive development', 'ARM64 virtual ECU'],
  openGraph: {
    title: 'Cloud Native AUTOSAR Solution | PopcornSAR',
    description: 'AWS-based cloud native AUTOSAR development. ARM64 virtual ECU, CI/CD integration.',
    url: '/solution/cloudnative',
  },
  alternates: { canonical: '/solution/cloudnative' },
};
```

#### `/solution/digital` (Digital Twin) -- `layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Digital Twin - 가상 시뮬레이션 AA 검증 솔루션',
  // [수정] 한국어 70자 이내
  description: '가상 시뮬레이션 AUTOSAR AA 기능 검증. 실제 ECU 없이 개발 초기부터 테스트 가능.',
  keywords: ['AUTOSAR Digital Twin', 'virtual simulation AUTOSAR', 'automotive digital twin', 'ECU simulation'],
  openGraph: {
    title: 'Digital Twin Solution | PopcornSAR',
    description: 'Virtual simulation-based AUTOSAR AA verification. Test early without physical ECU.',
    url: '/solution/digital',
  },
  alternates: { canonical: '/solution/digital' },
};
```

#### `/solution/ai` (AI for Adaptive Platforms) -- `layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'AI for Adaptive Platforms - AI 연동 AA 개발 솔루션',
  // [수정] 한국어 70자 이내
  description: 'AI/ML 워크로드를 AUTOSAR Adaptive Platform에 통합. 지능형 차량 기능 구현 솔루션.',
  keywords: ['AI Adaptive AUTOSAR', 'AI automotive platform', 'ML AUTOSAR integration', 'SOA automotive'],
  openGraph: {
    title: 'AI for Adaptive Platforms | PopcornSAR',
    description: 'Integrate AI/ML workloads with AUTOSAR Adaptive Platform for intelligent vehicle features.',
    url: '/solution/ai',
  },
  alternates: { canonical: '/solution/ai' },
};
```

#### `/solution/matlab` (MATLAB & Simulink) -- `layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'MATLAB & Simulink 연동 - AUTOSAR 호환 개발 솔루션',
  // [수정] 한국어 70자 이내
  description: 'MATLAB/Simulink와 AUTOSAR 호환 개발 솔루션. 기존 모델을 Adaptive 환경에 통합.',
  keywords: ['MATLAB AUTOSAR', 'Simulink AUTOSAR', 'model-based development AUTOSAR', 'MATLAB Adaptive AUTOSAR'],
  openGraph: {
    title: 'MATLAB & Simulink AUTOSAR Integration | PopcornSAR',
    description: 'MATLAB & Simulink integration with AUTOSAR Adaptive Platform.',
    url: '/solution/matlab',
  },
  alternates: { canonical: '/solution/matlab' },
};
```

#### `/solution/aiagent` (PARVIS Agent) -- `layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'PARVIS Agent - AI 기반 AUTOSAR 자동 마이그레이션',
  // [수정] 한국어 75자 이내
  description: 'AI 에이전트로 AUTOSAR 자동 마이그레이션. Classic에서 Adaptive 전환, 버전 업그레이드 자동 수행.',
  keywords: ['PARVIS Agent', 'AUTOSAR migration', 'Classic to Adaptive migration', 'AUTOSAR version upgrade'],
  openGraph: {
    title: 'PARVIS Agent - AI Migration Solution | PopcornSAR',
    description: 'AI agent-based AUTOSAR automatic migration. Classic to Adaptive, version upgrade.',
    url: '/solution/aiagent',
  },
  alternates: { canonical: '/solution/aiagent' },
};
```

### 서비스(Service) 상세 -- 5개

#### `/service/consulting` (컨설팅 서비스) -- `layout.tsx`

```typescript
export const metadata: Metadata = {
  title: '컨설팅 서비스 - ASPICE/AUTOSAR 프로젝트 전문 컨설팅',
  // [수정] 한국어 75자 이내, ASPICE 키워드 추가
  description: 'ASPICE 인증 컨설팅, AUTOSAR 아키텍처 설계, 프로세스 수립. 맞춤형 프로젝트 컨설팅.',
  // [수정] ASPICE 키워드 우선
  keywords: ['ASPICE consulting', 'ASPICE 컨설팅', 'AUTOSAR consulting', 'automotive software consulting'],
  openGraph: {
    title: 'ASPICE & AUTOSAR Consulting | PopcornSAR',
    description: 'ASPICE certification consulting, AUTOSAR architecture design, process establishment.',
    url: '/service/consulting',
  },
  alternates: { canonical: '/service/consulting' },
};
```

#### `/service/autosar` (AUTOSAR 구현) -- `layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'AUTOSAR 구현 서비스 - ECU 프로젝트 AUTOSAR 적용 지원',
  // [수정] 한국어 75자 이내
  description: 'ECU 프로젝트 AUTOSAR Classic/Adaptive 구현 지원. 양산 프로젝트 경험 기반 실전 서비스.',
  keywords: ['AUTOSAR implementation', 'AUTOSAR 구현', 'ECU AUTOSAR integration', 'AUTOSAR AP', 'AUTOSAR CP'],
  openGraph: {
    title: 'AUTOSAR Implementation Service | PopcornSAR',
    description: 'ECU project AUTOSAR Classic & Adaptive implementation. Production project experience.',
    url: '/service/autosar',
  },
  alternates: { canonical: '/service/autosar' },
};
```

#### `/service/education` (AUTOSAR 교육) -- `layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'AUTOSAR 교육 - ECU 양산 프로젝트를 위한 전문 교육',
  // [수정] 한국어 75자 이내, ASPICE 키워드 추가
  description: 'ASPICE/AUTOSAR Classic & Adaptive 전문 교육. ECU 양산 실무 중심, 입문~고급 커리큘럼.',
  // [수정] ASPICE 교육 키워드 추가
  keywords: ['ASPICE training', 'AUTOSAR training', 'AUTOSAR 교육', 'Adaptive AUTOSAR training', 'SWE.x training'],
  openGraph: {
    title: 'ASPICE & AUTOSAR Training | PopcornSAR',
    description: 'ASPICE and AUTOSAR Classic & Adaptive professional training. Beginner to advanced curriculum.',
    url: '/service/education',
  },
  alternates: { canonical: '/service/education' },
};
```

#### `/service/tool` (맞춤 개발) -- `layout.tsx`

```typescript
export const metadata: Metadata = {
  title: '맞춤 개발 서비스 - AUTOSAR 프로젝트 맞춤형 도구 개발',
  // [수정] 한국어 70자 이내
  description: '프로젝트 맞춤형 AUTOSAR 개발 도구 제작. 자동화 스크립트, 플러그인, 전용 도구.',
  keywords: ['AUTOSAR custom development', 'AUTOSAR 맞춤 개발', 'automotive tool development'],
  openGraph: {
    title: 'Custom Development Service | PopcornSAR',
    description: 'Custom AUTOSAR development tools. Automation scripts, plugins, project-specific tools.',
    url: '/service/tool',
  },
  alternates: { canonical: '/service/tool' },
};
```

#### `/service/ai` (AI Agent Core 교육) -- `layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'AI Agent Core 교육 - SDV AI 에이전트 설계 교육',
  // [수정] 한국어 75자 이내
  description: 'SDV 특화 AI Agent 설계 교육. AI 에이전트 아키텍처, LLM 활용 실무 중심 과정.',
  keywords: ['AI Agent training', 'SDV AI development', 'automotive AI training', 'LLM automotive'],
  openGraph: {
    title: 'AI Agent Core Training | PopcornSAR',
    description: 'SDV-specialized AI Agent design training. Architecture, LLM integration, hands-on curriculum.',
    url: '/service/ai',
  },
  alternates: { canonical: '/service/ai' },
};
```

### [추가] 에러/로딩 페이지 메타데이터

> [피드백] `not-found.tsx`와 `error.tsx`에도 기본 메타데이터 설정이 권장됩니다. 단, 이 파일들은 `"use client"`일 수 있으므로 해당 라우트의 layout.tsx에서 설정하거나 `generateMetadata()`를 사용합니다.

- `not-found.tsx`: title에 `{ absolute: '페이지를 찾을 수 없습니다 | PopcornSAR' }` 사용 (absolute 적합한 케이스)
- `error.tsx`: title에 `{ absolute: '오류 발생 | PopcornSAR' }` 사용

---

### sitemap.ts에 상세 페이지 추가

작업 5의 `sitemap.ts`에 아래 URL들을 포함해야 합니다 (작업 5 섹션 참조).

### 제품 상세 페이지용 JSON-LD 적용

> [수정] JSON-LD 컴포넌트는 layout.tsx에 배치합니다 (page.tsx는 클라이언트 컴포넌트이므로 서버 사이드 렌더링 보장 불가).
> [수정] `SoftwareApplication` -> `Product` 타입으로 변경, `price: '0'` 제거 (작업 6 참조).

각 제품 상세 **layout.tsx**에 `ProductJsonLd` 컴포넌트를 적용:

```tsx
// products/autosario/layout.tsx 내 children 감싸기
<ProductJsonLd name="AutoSAR.io" description="AUTOSAR Classic & Adaptive Platform ARXML design and code generation tool" url="/products/autosario" />

// products/para/layout.tsx
<ProductJsonLd name="PARA" description="AUTOSAR Adaptive Platform Functional Clusters - API, C++ Generator, Manifest Generator" url="/products/para" />

// products/pacon/layout.tsx
<ProductJsonLd name="PACON IDE" description="VSCode-based AUTOSAR Adaptive Application IDE with Docker virtual ECU and CI/CD" url="/products/pacon" />

// products/ai/layout.tsx -- 핵심 제품
<ProductJsonLd name="PARVIS" description="AI-powered ASPICE test case generation (86.4% coverage) and V-Model automation. Requirements analysis, MISRA-C verification, ASPICE artifact generation." url="/products/ai" />

// products/parvisadk/layout.tsx
<ProductJsonLd name="PARVIS ADK" description="AI-powered SDV End-to-End development automation. TDD test case generation, ASPICE V-Model compliance." url="/products/parvisadk" />

// products/aiagent/layout.tsx
<ProductJsonLd name="AUTOSAR AI Agent" description="AI NLP-based AUTOSAR development - auto-generate ARXML, search APIs and SWS docs" url="/products/aiagent" />
```

---

## 작업 4: robots.ts 생성

`app/robots.ts` 파일을 새로 생성:

```typescript
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
    ],
    sitemap: 'https://web.popcornsar.com/sitemap.xml',
  };
}
```

> [피드백] `robots.ts`는 Next.js가 자동으로 `/robots.txt`로 서빙합니다. `public/robots.txt`를 별도로 만들 필요 없습니다.

---

## 작업 5: sitemap.ts 생성

`app/sitemap.ts` 파일을 새로 생성:

> [수정] `/about`, `/contact`, `/support/qna` 추가. `lastModified` 대신 실제 최종 수정일 사용 권장 (빌드 시점 `new Date()`는 항상 오늘 날짜).

```typescript
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://web.popcornsar.com';

  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/company`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    // [추가] about 페이지
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/solution`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/service`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/support`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    // [추가] contact 페이지
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/company/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/company/notice`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    // [추가] Q&A 페이지
    {
      url: `${baseUrl}/support/qna`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    // 제품 상세
    { url: `${baseUrl}/products/adaptive`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/products/autosario`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/products/para`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/products/pacon`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/products/ai`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/products/parvisadk`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/products/aiagent`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    // 솔루션 상세
    { url: `${baseUrl}/solution/cloudnative`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/solution/digital`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/solution/ai`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/solution/matlab`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/solution/aiagent`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    // 서비스 상세
    { url: `${baseUrl}/service/consulting`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/service/autosar`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/service/education`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/service/tool`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/service/ai`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
  ];

  return routes;
}
```

> [피드백] `sitemap.ts`는 Next.js가 자동으로 `/sitemap.xml`로 서빙합니다. 총 28개+ URL이 포함됩니다.

---

## 작업 6: JSON-LD 구조화 데이터 컴포넌트

> [수정] `SoftwareApplication` -> `Product` 타입으로 변경. `price: '0'` 제거.
> [수정] JSON-LD 컴포넌트는 layout.tsx에서 사용 (서버 사이드 렌더링 보장).

`components/JsonLd.tsx` (또는 적절한 위치)를 새로 생성:

```tsx
// 전역 Organization JSON-LD (루트 레이아웃에서 사용)
export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PopcornSAR',
    url: 'https://web.popcornsar.com',
    logo: 'https://web.popcornsar.com/images/logo.png',
    // [수정] ASPICE/ISO26262 키워드 강조
    description: 'ASPICE V-Model automation and AUTOSAR development specialist. AI-powered test case generation, ISO 26262 verification, and automotive software engineering services.',
    // [수정] 설립연도 -- 확인 필요 (en.json에 "Since 2008" 기재, 원본 가이드는 2015)
    // TODO: 실제 설립연도 확인 후 수정
    foundingDate: '2015',
    sameAs: [
      // 공식 SNS 계정이 있으면 여기에 추가
      // 'https://www.linkedin.com/company/popcornsar',
      // 'https://github.com/niceoasi',
    ],
    address: [
      {
        '@type': 'PostalAddress',
        addressLocality: 'Seoul',
        addressCountry: 'KR',
        name: 'Korea Headquarters',
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Tokyo',
        addressCountry: 'JP',
        name: 'Japan Office',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'contact@popcornsar.com',
      availableLanguage: ['Korean', 'English', 'Japanese', 'Chinese'],
    },
    // [수정] ASPICE/ISO26262 knowsAbout 추가
    knowsAbout: [
      'ASPICE', 'ISO 26262', 'V-Model',
      'AUTOSAR', 'Adaptive AUTOSAR', 'Classic AUTOSAR',
      'Automotive Software', 'ECU Development', 'SDV',
      'AI for Automotive', 'Test Case Generation',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// [수정] 제품 페이지용 Product JSON-LD (SoftwareApplication에서 변경)
export function ProductJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const data = {
    '@context': 'https://schema.org',
    // [수정] SoftwareApplication -> Product (B2B 엔터프라이즈 소프트웨어에 적합)
    '@type': 'Product',
    name,
    description,
    url,
    // [수정] price: '0' 제거 (B2B 소프트웨어에 무료 가격 표시는 오해 유발)
    brand: {
      '@type': 'Organization',
      name: 'PopcornSAR',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'PopcornSAR',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// 서비스 페이지용 JSON-LD
export function ServiceJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    // [수정] ASPICE 키워드 추가
    name: 'PopcornSAR ASPICE & AUTOSAR Engineering Services',
    description: 'ASPICE consulting, AUTOSAR implementation, training, and custom development services',
    url: 'https://web.popcornsar.com/service',
    provider: {
      '@type': 'Organization',
      name: 'PopcornSAR',
    },
    areaServed: ['KR', 'JP', 'Global'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Engineering Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'ASPICE & AUTOSAR Consulting',
            description: 'ASPICE certification consulting and AUTOSAR project consulting',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AUTOSAR Implementation',
            description: 'ECU project AUTOSAR Classic & Adaptive implementation support',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AUTOSAR Training',
            description: 'ASPICE and AUTOSAR professional training for ECU production projects',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Development',
            description: 'Custom AUTOSAR development tools and automation scripts',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Agent Core Training',
            description: 'SDV-specialized AI Agent architecture design training',
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// 웹사이트 검색 JSON-LD (구글 사이트링크 검색창용)
export function WebSiteJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'PopcornSAR',
    url: 'https://web.popcornsar.com',
    inLanguage: ['ko', 'en', 'ja', 'zh'],
    // [추가] potentialAction for sitelinks search box
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://web.popcornsar.com/support/qna?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// [추가] FAQ 페이지용 JSON-LD (support/qna에 사용)
export function FAQJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
```

> [피드백] **SoftwareApplication -> Product 변경 이유**: Google Rich Results에서 `SoftwareApplication`은 소비자용 앱(앱스토어, 평점, 다운로드)에 최적화되어 있어 B2B 엔터프라이즈 소프트웨어에는 Rich Result가 표시되지 않습니다. `Product` 스키마가 B2B에 더 적합합니다.

> [피드백] **price: '0' 제거 이유**: Google이 무료 소프트웨어로 해석합니다. B2B 영업 기반 가격 책정 모델과 모순됩니다. `offers` 블록 전체를 제거하거나, `priceSpecification` 없이 사용합니다.

> [피드백] **설립연도 불일치**: JSON-LD의 `foundingDate: '2015'`와 `en.json` 번역 파일의 "Since 2008"이 불일치합니다. 실제 설립연도 확인 후 통일해야 합니다.

---

## 작업 7: JSON-LD 컴포넌트 적용

### 루트 레이아웃 (`app/layout.tsx`)

`<body>` 태그 안 맨 위에 추가:

```tsx
import { OrganizationJsonLd, WebSiteJsonLd } from '@/components/JsonLd';

// ... 기존 레이아웃 코드 ...
<body>
  <OrganizationJsonLd />
  <WebSiteJsonLd />
  {/* 기존 children */}
</body>
```

### [수정] 제품 페이지 (`app/products/layout.tsx`)

> [수정] page.tsx -> layout.tsx로 변경. 서버 사이드 렌더링 보장.

```tsx
import { ProductJsonLd } from '@/components/JsonLd';

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProductJsonLd
        name="PopcornSAR AUTOSAR Tool Kit"
        description="ASPICE automation AI tools and AUTOSAR development platform. PARVIS, AutoSAR.io, PARA, PACON IDE."
        url="/products"
      />
      {children}
    </>
  );
}
```

### [수정] 서비스 페이지 (`app/service/layout.tsx`)

```tsx
import { ServiceJsonLd } from '@/components/JsonLd';

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd />
      {children}
    </>
  );
}
```

### [추가] Q&A 페이지 (`app/support/qna/layout.tsx`)

```tsx
import { FAQJsonLd } from '@/components/JsonLd';

// FAQ 데이터를 서버에서 가져오거나 정적으로 정의
const faqs = [
  // 실제 FAQ 내용으로 교체
  { question: 'AUTOSAR Adaptive Platform이란?', answer: '...' },
  { question: 'PARVIS로 테스트케이스를 자동 생성하는 방법은?', answer: '...' },
];

export default function QnALayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FAQJsonLd faqs={faqs} />
      {children}
    </>
  );
}
```

---

## 작업 8: OG 이미지 확인

`public/images/og-image.jpg` 파일이 실제로 존재하는지 확인.

> [추가] 코드 분석 결과, 이 파일이 현재 **존재하지 않습니다**. 반드시 생성해야 합니다.

- 권장 크기: 1200 x 630px
- 내용: PopcornSAR 로고 + "ASPICE & AUTOSAR Solutions Provider" + 다크 배경
- 파일이 없으면 생성 필요 (또는 기존 히어로 이미지 활용)

> [피드백] 향후 각 제품별 전용 OG 이미지(1200x630)를 만들면 소셜 공유 시 클릭률이 크게 향상됩니다. `/images/og-parvis.jpg`, `/images/og-pacon.jpg` 등.

---

## 작업 9: 다국어 SEO (hreflang 보완)

현재 URL 구조가 언어별로 분리되어 있지 않고 클라이언트 사이드 언어 전환을 사용하고 있으므로:

### [수정] 현재 구조: hreflang 제거, canonical만 설정

> [피드백] 원본에서는 모든 언어가 같은 URL을 가리키는 hreflang을 설정했으나, 이는 검색엔진에 모순 신호를 보냅니다. 4개 언어가 모두 동일 URL을 가리키면, Google은 `<html lang="ko">`를 기준으로 한국어만 인덱싱합니다. 따라서:

- hreflang 태그를 제거하고 canonical URL만 설정 (작업 2에서 적용 완료)
- 영문/일문/중문 콘텐츠는 클라이언트 사이드 렌더링이므로 검색엔진에 노출되지 않음
- 이는 현재 아키텍처의 한계이며, 향후 URL 기반 i18n으로 해결 가능

### 향후 URL 기반 다국어 구조로 전환 (장기 로드맵)

`/en/`, `/ko/`, `/ja/`, `/zh/` prefix로 URL을 분리하면 검색엔진이 각 언어 페이지를 개별 인덱싱. Next.js internationalized routing으로 구현.

> [추가] **장기 로드맵: URL 기반 i18n 전환**
>
> 현재 클라이언트 사이드 언어 전환은 SEO 관점에서 다국어 콘텐츠가 완전히 보이지 않는 구조입니다. 마케팅 전략 에이전트의 분석에 따르면:
>
> - 모든 page.tsx가 `"use client"`이므로, Google 크롤러는 초기 HTML만 봅니다
> - 초기 HTML에는 기본 언어(한국어)만 포함되어 있어 영/일/중 키워드 타게팅이 무효
> - 일본어/중국어 키워드 최적화는 URL 기반 i18n 전환 후에만 실효성이 있음
>
> **전환 단계**:
> 1단계: 한국어 SEO 완성 (현재 가이드 범위)
> 2단계: 핵심 페이지 SSR 전환 (메인, 제품, 회사소개)
> 3단계: Next.js i18n routing 도입 (`/ko/`, `/en/`, `/ja/`, `/zh/`)
> 4단계: hreflang 올바른 설정 + 언어별 sitemap

---

## 작업 10: 검색엔진 등록 (수동 작업 필요)

SEO 코드 적용 후 반드시 수행:

> [추가] **CSP 헤더 업데이트 주의사항**: 현재 `next.config.mjs`에 `connect-src 'self'` CSP 헤더가 설정되어 있습니다. Google Analytics, Search Console, Naver Analytics 등을 도입할 경우, 해당 서비스 도메인을 CSP `connect-src`와 `script-src`에 추가해야 합니다. 그렇지 않으면 분석 스크립트가 차단됩니다.

### Google Search Console

1. https://search.google.com/search-console 접속
2. 속성 추가 -> `https://web.popcornsar.com`
3. 소유권 확인 (HTML 태그 방식 권장)
4. 확인 코드를 `layout.tsx` metadata의 `verification.google`에 입력
5. sitemap 제출: `https://web.popcornsar.com/sitemap.xml`

### Naver Search Advisor

1. https://searchadvisor.naver.com 접속
2. 사이트 등록 -> `https://web.popcornsar.com`
3. 소유권 확인
4. 확인 코드를 `layout.tsx` metadata의 `verification.other`에 입력
5. sitemap 제출

### Bing Webmaster Tools

1. https://www.bing.com/webmasters 접속
2. Google Search Console 연동 가능

---

## 경쟁사 분석 기반 키워드 전략

### 주요 경쟁사 상세 분석

#### 1. Vector Informatik (vector.com)

- **포지셔닝**: "20년 이상 AUTOSAR 도구 표준" -- 가장 오래되고 가장 많이 사용되는 AUTOSAR 도구
- **제품 라인**: MICROSAR (Classic/Adaptive 임베디드 SW), DaVinci (설정/개발 도구 제품군)
- **최근 동향**: DaVinci 제품군 리브랜딩, DevOps 및 CI/CD 강조
- **강점**: ASPICE Level 3 인증, ISO 26262 ASIL D 지원, 방대한 고객 기반
- **약점**: 레거시 도구 기반, AI 기능 없음, 도구가 무겁고 복잡
- **SEO 키워드**: MICROSAR, DaVinci Configurator, AUTOSAR ECU development, AUTOSAR Classic BSW
- [추가] **도메인 권한**: DR 70+ (매우 높음)

#### 2. ETAS (etas.com) -- Bosch 자회사

- **포지셔닝**: "Empowering Tomorrow's Automotive Software" -- Bosch 신뢰도 활용
- **제품 라인**: RTA-VRTE (Adaptive 미들웨어), RTA-CAR (Classic), ISOLAR-VRTE (설정 도구)
- **최근 동향**: RTA-VRTE ISO 26262 ASIL-B TUV 인증 획득, AWS 클라우드 마켓플레이스 Starter Kit 제공
- **강점**: Bosch 브랜드, 안전 인증, 완성차 양산 실적
- **약점**: AI 솔루션 없음, 도구 자체가 오래됨, 클라우드 네이티브 아님
- **SEO 키워드**: RTA-VRTE, AUTOSAR Adaptive middleware, ISOLAR, AUTOSAR safety certification
- [추가] **도메인 권한**: DR 55+

#### 3. Elektrobit (elektrobit.com)

- **포지셔닝**: "Automotive Software Developer" -- Classic + Adaptive 양쪽 모두 전문
- **제품 라인**: EB tresos (Classic), EB corbos (Adaptive, Hypervisor, Studio, Linux for Safety)
- **최근 동향**: Linux for Safety Applications (ASIL B 세계 최초), Android-AUTOSAR 통합
- **강점**: 한국 시장 진출, 반도체 파트너십, 교육 프로그램
- **약점**: AI 기능 없음, Cloud Native 부재, Digital Twin 없음
- **SEO 키워드**: EB tresos, EB corbos, AUTOSAR Adaptive hypervisor, automotive Linux safety
- [추가] **도메인 권한**: DR 60+

#### [추가] 4. dSPACE (dspace.com)

> [피드백] 마케팅 전략 에이전트가 누락된 주요 경쟁사로 식별.

- **포지셔닝**: AUTOSAR 시뮬레이션/테스트 전문
- **제품 라인**: HIL 시뮬레이터, SystemDesk, TargetLink
- **강점**: 시뮬레이션 분야 시장 지배, 대학/연구소 파트너십
- **약점**: AI 테스트케이스 생성 없음, 개발 도구보다 검증 도구 중심
- **SEO 키워드**: AUTOSAR simulation, HIL testing, SystemDesk

#### [추가] 5. Mentor/Siemens EDA

- **포지셔닝**: Volcano 제품군 (AUTOSAR Adaptive)
- **강점**: Siemens 브랜드, Capital/Volcano 통합 에코시스템
- **약점**: AI 기능 없음

### PopcornSAR 포지셔닝 전략

> For OEM과 Tier1 자동차 소프트웨어 개발팀, PopcornSAR is the ASPICE V-Model 자동화 플랫폼 that AI 기반 테스트케이스 자동 생성과 ISO 26262 검증으로 개발 생산성을 혁신적으로 높여주는, because AI Agent, Cloud Native, Digital Twin 등 차세대 기술을 AUTOSAR에 최초로 결합했기 때문입니다.

> [수정] 포지셔닝 문구에서 ASPICE/ISO26262를 AUTOSAR보다 우선 배치.

### PopcornSAR만의 차별화 키워드 (경쟁사 공백 영역)

| 키워드 | 설명 | Vector | ETAS | EB | dSPACE | PopcornSAR |
|--------|------|--------|------|-----|--------|------------|
| [수정] ASPICE AI Automation | ASPICE 프로세스 AI 자동화 | - | - | - | - | PARVIS |
| [수정] ISO 26262 AI Verification | ISO 26262 AI 검증 | - | - | - | - | PARVIS |
| AI-Powered AUTOSAR | AI로 AUTOSAR 개발 자동화 | - | - | - | - | PARVIS |
| AUTOSAR AI Agent | 자율 개발 에이전트 | - | - | - | - | AI Agent |
| Cloud Native AUTOSAR | 클라우드 기반 AUTOSAR | - | 일부 | - | - | Solution |
| AUTOSAR Digital Twin | 가상 시뮬레이션 검증 | - | - | - | 일부 | Solution |
| VSCode AUTOSAR IDE | 현대적 개발 환경 | - | - | - | - | PACON IDE |
| V-Model Automation | V-Model 전과정 AI 자동화 | - | - | - | - | PARVIS |
| AUTOSAR SDV Development | SDV 개발 키트 | - | - | - | - | PARVIS ADK |
| ASPICE Test Case Generation | ASPICE 테스트케이스 자동 생성 | - | - | - | - | PARVIS + ADK |
| TDD Automation for Automotive | TDD 자동차 테스트 자동화 | - | - | - | - | PARVIS ADK |
| ASPICE Artifact Automation | ASPICE 산출물 자동 생성 | - | - | - | - | PARVIS |

> [피드백] **블루오션 키워드 수정**: 원본의 "AI Test Case Generation"은 일반 소프트웨어 테스트 시장에서 레드오션입니다 (Testim, mabl, Copilot 등 경쟁자 존재, 시장규모 $3.82B). 반면 "ASPICE test case auto-generation", "ISO 26262 test automation for AUTOSAR" 등 자동차 도메인 한정어가 붙은 키워드가 진정한 블루오션입니다. 모든 테스트 관련 키워드에 자동차 도메인 컨텍스트를 추가합니다.

> [추가] **추가 기회 키워드** (마케팅 에이전트 제안):
> - `AUTOSAR AP` / `AUTOSAR CP` -- 개발자들이 자주 사용하는 약어
> - `SWE.x` / `SYS.x` -- ASPICE 작업 산출물 식별자
> - `ara::com` / `ara::exec` -- AUTOSAR API 네임스페이스 (개발자 검색 키워드)
> - `SOA automotive` -- 서비스 지향 아키텍처 자동차 분야 트렌드
> - `SOME/IP` -- AUTOSAR 핵심 통신 프로토콜, 검색량 높음
> - `Vehicle Computer` / `HPC ECU` -- 존/센트럴 아키텍처 신규 용어

### [수정] 언어별 타겟 키워드

> [수정] ASPICE/ISO26262 키워드를 모든 언어에서 최우선 배치. AUTOSAR는 유지하되 2순위로 조정.

핵심 = ASPICE/ISO26262 중심 키워드 (계약 수주 실적 기반 우선순위)

#### 영어 (EN)

- **핵심 Brand**: PARVIS, PARVIS ADK, PARVIS-Verify, PARVIS-Spec, PARVIS-Coder, AutoSAR.io, PARA, PACON IDE
- **[수정] 1순위 (ASPICE/ISO26262)**: ASPICE test case generation, ASPICE artifact automation, ISO 26262 test automation, ASPICE V-Model automation, ASIL verification automation
- **2순위 (AI + 자동차 한정)**: AI test case generation for AUTOSAR, automated test generation automotive, TDD automation automotive
- **3순위 (AUTOSAR 포지셔닝)**: AUTOSAR development tools, Adaptive AUTOSAR solutions, AI-powered AUTOSAR, AUTOSAR consulting
- **Long-tail**: ASPICE test case auto-generation tool, ISO 26262 ASIL verification automation, AUTOSAR MISRA-C compliance automation, ASPICE SWE.6 artifact generation AI, V-Model test verification for AUTOSAR, cloud native AUTOSAR development, VSCode AUTOSAR development environment

#### 한국어 (KR)

- **핵심 Brand**: PARVIS, PARVIS ADK, 파비스, AutoSAR.io, PARA, PACON IDE, 팝콘사
- **[수정] 1순위 (ASPICE/ISO26262)**: ASPICE 테스트케이스 자동 생성, ASPICE 산출물 자동화, ISO 26262 테스트 자동화, ASPICE 인증 컨설팅, V-Model 자동화
- **2순위 (AI + 자동차)**: AI 테스트케이스 자동 생성, 테스트 자동화, TDD 자동화
- **3순위 (AUTOSAR)**: AUTOSAR 개발 도구, AUTOSAR 솔루션, AUTOSAR 교육, AUTOSAR 전문 기업
- **Long-tail**: ASPICE SWE.x 산출물 자동 생성 도구, ISO 26262 ASIL 검증 자동화, AUTOSAR MISRA-C 자동 검증, V-Model 전과정 AI 자동화, ECU 소프트웨어 개발 플랫폼

#### 일본어 (JP)

- **핵심 Brand**: PARVIS, PARVIS ADK, AutoSAR.io, PARA, PACON IDE, PopcornSAR
- **[수정] 1순위**: ASPICEテストケース自動生成, ASPICE成果物自動化, ISO 26262テスト自動化
- **2순위**: AIテストケース自動生成, 自動テスト生成ツール, TDD自動化
- **3순위**: AUTOSAR 開発ツール, AUTOSAR ソリューション, 車載ソフトウェア開発
- **Long-tail**: ASPICE SWE.x成果物自動生成, ISO 26262 ASIL検証自動化, クラウドネイティブAUTOSAR

#### 중국어 (CN)

- **핵심 Brand**: PARVIS, PARVIS ADK, AutoSAR.io, PARA, PACON IDE, PopcornSAR
- **[수정] 1순위**: ASPICE测试用例自动生成, ASPICE产出物自动化, ISO 26262测试自动化
- **2순위**: AI测试用例自动生成, 自动测试生成工具, TDD自动化
- **3순위**: AUTOSAR 开发工具, AUTOSAR 解决方案, 汽车软件开发
- **Long-tail**: ASPICE SWE.x产出物自动生成, ISO 26262 ASIL验证自动化, 云原生AUTOSAR平台

> [피드백] 일본어/중국어 키워드는 인간 번역 수준이며 업계 적절한 용어를 사용하고 있습니다. 단, 현재 URL 기반 언어 분리가 없으므로 이 키워드들의 SEO 실효성은 제한적입니다 (장기 로드맵의 i18n 전환 후 활성화).

---

## [추가] 콘텐츠 SEO 전략

> [피드백] 마케팅 전략 에이전트의 핵심 제안: B2B SaaS에서 오가닉 트래픽의 60-70%는 블로그/교육 콘텐츠에서 발생합니다. 제품 페이지만으로는 도메인 권한 구축이 어렵습니다. PopcornSAR의 도메인 권한은 Vector(DR70+), EB(DR60+)에 비해 매우 낮으므로, 롱테일 키워드 기반 콘텐츠 마케팅이 유일한 현실적 전략입니다.

### 콘텐츠 필러 (권장)

1. **ASPICE 가이드**: "ASPICE compliance guide", "ASPICE SWE.x 산출물 작성법" 등 교육 콘텐츠
2. **AUTOSAR 튜토리얼**: "AUTOSAR Adaptive Platform 시작하기", "ara::com 사용법" 등 기술 문서
3. **ISO 26262 가이드**: "ISO 26262 ASIL 레벨 이해", "기능 안전 테스트 전략"
4. **AI 자동차 테스트**: "AI in automotive software testing" 트렌드 분석
5. **케이스 스터디**: "86.4% 테스트 커버리지 달성 사례", "94% MISRA-C 준수 사례" (익명화 가능)

### 기술 문서 SEO 활용

AUTOSAR 개발자들은 기술 문서를 적극적으로 검색합니다. API 문서, 통합 가이드, ARXML 스키마 레퍼런스 등을 공개하면 높은 구매 의향의 오가닉 트래픽을 확보할 수 있습니다.

### 비디오 SEO

AutoSAR.io 페이지에 YouTube 데모 영상이 있다면, Schema.org `VideoObject` 마크업을 추가하여 비디오 검색 결과에 노출시킬 수 있습니다.

---

## 적용 후 체크리스트

빌드 후 아래 사항을 확인:

- [ ] `https://web.popcornsar.com/robots.txt` 접속 가능
- [ ] `https://web.popcornsar.com/sitemap.xml` 접속 가능, 28개+ URL 포함
- [ ] 각 페이지 `<title>` 태그가 고유한 값
- [ ] 각 페이지 `<meta name="description">`이 고유한 값
- [ ] [수정] 모든 한국어 description이 70-80자 이내
- [ ] `og:image`가 `https://web.popcornsar.com/images/og-image.jpg` (localhost 아님!)
- [ ] `og:url`이 각 페이지의 실제 URL
- [ ] `<link rel="canonical">`이 각 페이지에 존재
- [ ] `<script type="application/ld+json">`이 존재 (Organization, WebSite)
- [ ] [추가] JSON-LD가 초기 HTML에 포함됨 (layout.tsx 배치 확인)
- [ ] [추가] `public/images/og-image.jpg` 파일 존재 확인
- [ ] [추가] hreflang 태그가 제거됨 (동일 URL 4개 언어 설정 없음)
- [ ] [추가] 하위 페이지 canonical URL이 상대 경로 사용
- [ ] Google Search Console에 사이트 등록 및 sitemap 제출
- [ ] Naver Search Advisor에 사이트 등록 및 sitemap 제출
- [ ] [추가] CSP 헤더에 Analytics/Search Console 도메인 추가 확인

### 검증 도구

- Google Rich Results Test: https://search.google.com/test/rich-results
- Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
- Twitter Card Validator: https://cards-dev.twitter.com/validator
- Schema Markup Validator: https://validator.schema.org/

---

## 요약: 우선순위

| 순위 | 작업 | 영향도 | 난이도 |
|------|------|--------|--------|
| 0 | [추가] absolute title 마이그레이션 (27개 layout.tsx) | 중 | 하 |
| 1 | `metadataBase` 설정 (localhost 버그 수정) | 치명적 | 하 |
| 2 | 페이지별 메타데이터 (title, description, OG) -- layout.tsx | 상 | 하 |
| 3 | `robots.ts` 생성 | 상 | 하 |
| 4 | `sitemap.ts` 생성 | 상 | 하 |
| 5 | JSON-LD 구조화 데이터 -- layout.tsx 배치 | 중 | 중 |
| 6 | OG 이미지 생성 (`public/images/og-image.jpg`) | 중 | 중 |
| 7 | Google Search Console / Naver 등록 | 상 | 하 (수동) |
| 8 | [추가] CSP 헤더 업데이트 (Analytics 도메인 허용) | 중 | 하 |
| 9 | [추가] 콘텐츠 SEO 전략 실행 (블로그/기술문서) | 상 | 고 (장기) |
| 10 | [추가] URL 기반 i18n 전환 | 상 | 고 (장기) |

---

## [추가] 변경사항 추적 요약

### `[수정]` 마커 목록

1. 모든 metadata 코드 예시: `page.tsx` -> `layout.tsx`로 위치 변경
2. 루트 keywords: 30+개 -> 핵심 8-10개로 축소, ASPICE/ISO26262 최우선
3. 페이지별 keywords: ASPICE/ISO26262 키워드 우선 배치
4. 모든 한국어 description: 70-80자 이내로 축소
5. OG description: 영문 기준 150-160자 유지
6. hreflang: 동일 URL 4개 언어 -> canonical만 설정으로 변경
7. 하위 페이지 canonical/OG URL: 절대 경로 -> 상대 경로
8. ProductJsonLd: `SoftwareApplication` -> `Product`, `price:'0'` 제거
9. JSON-LD 배치: page.tsx -> layout.tsx (SSR 보장)
10. 포지셔닝 문구: ASPICE/ISO26262 우선 배치
11. 경쟁사 키워드 표: ASPICE/ISO26262 키워드 행 추가
12. 언어별 키워드: ASPICE/ISO26262가 1순위, AUTOSAR가 3순위로 변경

### `[추가]` 마커 목록

1. 작업 0: absolute title 마이그레이션 절차 (27개 파일)
2. 현재 상태 요약: 4개 추가 문제점 (og-image 미존재, use client, absolute 패턴, 중복 페이지)
3. 누락 페이지 메타데이터: `/about`, `/contact`, `/support/qna`
4. 에러/로딩 페이지 메타데이터 가이드
5. FAQJsonLd 컴포넌트 (support/qna용)
6. WebSiteJsonLd에 SearchAction 추가
7. 경쟁사: dSPACE, Mentor/Siemens 추가
8. 경쟁사별 도메인 권한(DR) 수치
9. 추가 기회 키워드 (AUTOSAR AP/CP, SWE.x, ara::com, SOME/IP 등)
10. 콘텐츠 SEO 전략 섹션 (블로그/기술문서/케이스스터디)
11. 장기 로드맵: URL 기반 i18n 전환 상세
12. CSP 헤더 업데이트 주의사항
13. 비디오 SEO 가이드
14. 변경사항 추적 요약 섹션

### `[피드백]` 마커 목록

각 `[피드백]` 블록은 변경 이유를 설명하며, 어느 에이전트의 분석 결과인지 명시합니다:
- 코드 분석 에이전트: `"use client"` 제약, metadata 배치, 파일 존재 여부
- SEO 기술 에이전트: hreflang, canonical, JSON-LD 타입, metadataBase 활용
- 마케팅 전략 에이전트: description 길이, 키워드 전략, 콘텐츠 SEO, 경쟁사 분석
