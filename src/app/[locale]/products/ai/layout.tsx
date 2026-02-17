import type { Metadata } from "next";
import { ProductJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "PARVIS - AI 테스트케이스 자동 생성 & ASPICE V-Model 자동화",
  description:
    "ASPICE 테스트케이스 AI 자동 생성(86.4% 커버리지). ISO 26262 검증, MISRA-C 94% 준수, V-Model 전과정 자동화.",
  keywords: [
    "ASPICE test case generation",
    "ASPICE artifact automation",
    "ISO 26262 test automation",
    "ASPICE 테스트케이스 자동 생성",
    "ASPICE 산출물 자동화",
    "AI test case generation for AUTOSAR",
    "automated test generation automotive",
    "테스트케이스 자동 생성",
    "PARVIS",
    "V-Model automation",
    "MISRA-C automation",
  ],
  openGraph: {
    title: "PARVIS - AI Test Case Generation & ASPICE Automation | PopcornSAR",
    description:
      "AI-powered test case generation (86.4% coverage). ASPICE V-Model automation, ISO 26262 verification, MISRA-C compliance. 3-4x productivity gain.",
    url: "/products/ai",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PopcornSAR - ASPICE & AUTOSAR Solutions Provider",
      },
    ],
  },
  alternates: { canonical: "/products/ai" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProductJsonLd
        name="PARVIS"
        description="AI-powered ASPICE test case generation (86.4% coverage) and V-Model automation. Requirements analysis, MISRA-C verification, ASPICE artifact generation."
        url="/products/ai"
      />
      {children}
    </>
  );
}
