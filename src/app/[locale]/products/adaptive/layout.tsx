import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AUTOSAR Tool Kit - Adaptive AUTOSAR 통합 개발 도구",
  description:
    "AutoSAR.io, PARA, PACON IDE 통합 Adaptive AUTOSAR 개발 도구. ARXML 설계부터 빌드/테스트까지.",
  openGraph: {
    title: "AUTOSAR Tool Kit | PopcornSAR",
    description:
      "Integrated Adaptive AUTOSAR development tools. Design-to-test workflow with AutoSAR.io, PARA, PACON IDE.",
    url: "/products/adaptive",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PopcornSAR - ASPICE & AUTOSAR Solutions Provider",
      },
    ],
  },
  alternates: { canonical: "/products/adaptive" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
