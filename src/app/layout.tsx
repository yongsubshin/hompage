import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import { Providers } from "@/components/Providers";
import { ChatbotButton } from "@/components/chatbot";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/JsonLd";

const SITE_URL = "https://web.popcornsar.com";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "PopcornSAR | ASPICE V-Model 자동화 & AI 테스트케이스 생성",
    template: "%s | PopcornSAR",
  },
  description:
    "ASPICE V-Model 자동화 전문 기업 PopcornSAR. AI 테스트케이스 자동 생성, ISO 26262 검증, AUTOSAR 개발 도구 제공.",
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
    locale: "ko_KR",
    alternateLocale: ["en_US", "ja_JP", "zh_CN"],
    url: SITE_URL,
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
    canonical: "/",
    languages: {
      "ko": "https://web.popcornsar.com",
      "en": "https://web.popcornsar.com",
      "ja": "https://web.popcornsar.com",
      "zh": "https://web.popcornsar.com",
      "x-default": "https://web.popcornsar.com",
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${pretendard.variable} antialiased min-h-screen flex flex-col`}
      >
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ChatbotButton />
        </Providers>
      </body>
    </html>
  );
}
