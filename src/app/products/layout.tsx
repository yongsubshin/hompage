import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "제품",
  description:
    "ASPICE 자동화 AI 도구 PARVIS와 AUTOSAR 개발 플랫폼. AutoSAR.io, PARA, PACON IDE 제공.",
  openGraph: {
    title: "제품 | PopcornSAR",
    description:
      "ASPICE automation AI tools and AUTOSAR development platform. PARVIS, AutoSAR.io, PARA, PACON IDE.",
    url: "/products",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PopcornSAR - ASPICE & AUTOSAR Solutions Provider",
      },
    ],
  },
  alternates: {
    canonical: "/products",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
