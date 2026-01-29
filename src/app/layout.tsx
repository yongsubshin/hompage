import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import { Providers } from "@/components/Providers";
import { ChatbotButton } from "@/components/chatbot";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "PopcornSAR | Next-Generation AUTOSAR Solutions",
    template: "%s | PopcornSAR",
  },
  description:
    "Leading automotive software solutions provider specializing in AUTOSAR-based development for the next generation of mobility.",
  keywords: [
    "AUTOSAR",
    "automotive software",
    "ECU development",
    "vehicle software",
    "mobility solutions",
    "PopcornSAR",
  ],
  authors: [{ name: "PopcornSAR" }],
  creator: "PopcornSAR",
  publisher: "PopcornSAR",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    alternateLocale: ["en_US", "ja_JP", "zh_CN"],
    url: "https://popcornsar.com",
    siteName: "PopcornSAR",
    title: "PopcornSAR | Next-Generation AUTOSAR Solutions",
    description:
      "Leading automotive software solutions provider specializing in AUTOSAR-based development.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PopcornSAR - AUTOSAR Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PopcornSAR | Next-Generation AUTOSAR Solutions",
    description:
      "Leading automotive software solutions provider specializing in AUTOSAR-based development.",
    images: ["/images/og-image.jpg"],
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
