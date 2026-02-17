import type { Metadata } from "next";
import { ProductJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "PACON IDE - VSCode 기반 AUTOSAR 통합 개발 환경",
  description:
    "Docker 가상 ECU 환경 Adaptive Application 개발. ARA API 자동완성, Jenkins CI/CD 통합.",
  keywords: [
    "PACON IDE",
    "AUTOSAR IDE",
    "ISO 26262 tool qualification",
    "VSCode AUTOSAR",
    "virtual ECU",
    "Docker AUTOSAR",
    "AUTOSAR CI/CD",
  ],
  openGraph: {
    title: "PACON IDE - AUTOSAR Development Environment | PopcornSAR",
    description:
      "VSCode-based AUTOSAR IDE. Docker virtual ECU, ARA API autocomplete, CI/CD integration.",
    url: "/products/pacon",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PopcornSAR - ASPICE & AUTOSAR Solutions Provider",
      },
    ],
  },
  alternates: { canonical: "/products/pacon" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProductJsonLd
        name="PACON IDE"
        description="VSCode-based AUTOSAR Adaptive Application IDE with Docker virtual ECU and CI/CD"
        url="/products/pacon"
      />
      {children}
    </>
  );
}
