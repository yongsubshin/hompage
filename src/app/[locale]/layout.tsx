import type { Metadata } from "next";
import localFont from "next/font/local";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Header, Footer } from "@/components/layout";
import { Providers } from "@/components/Providers";
import { ChatbotButton } from "@/components/chatbot";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/JsonLd";

const SITE_URL = "https://autosar.io";

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "100 900",
  display: "swap",
});

const localeToOg: Record<string, string> = {
  ko: "ko_KR",
  en: "en_US",
  ja: "ja_JP",
  zh: "zh_CN",
};

function getLocalePath(locale: string) {
  return locale === routing.defaultLocale ? "" : `/${locale}`;
}

export function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Metadata {
  const prefix = getLocalePath(locale);
  const canonicalUrl = `${SITE_URL}${prefix}`;
  const ogLocale = localeToOg[locale] || "ko_KR";
  const alternateOgLocales = Object.entries(localeToOg)
    .filter(([l]) => l !== locale)
    .map(([, og]) => og);

  return {
    title: {
      default: "PopcornSAR | ASPICE V-Model Automation & AI Test Case Generation",
      template: "%s | PopcornSAR",
    },
    description:
      "ASPICE V-Model automation specialist PopcornSAR. AI test case generation, ISO 26262 verification, AUTOSAR development tools.",
    keywords: [
      "ASPICE",
      "ISO 26262",
      "V-Model",
      "MISRA-C",
      "PopcornSAR",
      "PARVIS",
      "test case generation",
      "AI test automation",
      "AUTOSAR",
      "Adaptive AUTOSAR",
      "automotive software",
    ],
    authors: [{ name: "PopcornSAR", url: SITE_URL }],
    creator: "PopcornSAR",
    publisher: "PopcornSAR",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: ogLocale,
      alternateLocale: alternateOgLocales,
      url: canonicalUrl,
      siteName: "PopcornSAR",
      title: "PopcornSAR | ASPICE & AI-Powered Automotive Development",
      description:
        "ASPICE V-Model automation specialist. AI-powered test case generation (86.4% coverage), ISO 26262 verification, and AUTOSAR development tools for next-gen mobility.",
      images: [
        {
          url: "/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "PopcornSAR - ASPICE & AUTOSAR Solutions Provider",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "PopcornSAR | ASPICE & AI-Powered Automotive Development",
      description:
        "ASPICE V-Model automation specialist. AI-powered test case generation, ISO 26262 verification, AUTOSAR development tools.",
      images: ["/images/og-image.jpg"],
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "ko": SITE_URL,
        "en": `${SITE_URL}/en`,
        "ja": `${SITE_URL}/ja`,
        "zh": `${SITE_URL}/zh`,
        "x-default": SITE_URL,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${pretendard.variable} antialiased min-h-screen flex flex-col`}
      >
        <NextIntlClientProvider messages={messages}>
          <OrganizationJsonLd />
          <WebSiteJsonLd />
          <Providers>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <ChatbotButton />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
