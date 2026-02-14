import type { Metadata } from "next";
import { ProductJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "AUTOSAR AI Agent - AI 기반 AUTOSAR 개발 지원 도구",
  description:
    "AI 자연어로 AUTOSAR 개발. ARXML 자동 생성, API/SWS 검색, 개발 시간 70%+ 절감.",
  keywords: [
    "AUTOSAR AI Agent",
    "ARXML generator AI",
    "AUTOSAR chatbot",
    "SWS search",
    "AUTOSAR API search",
  ],
  openGraph: {
    title: "AUTOSAR AI Agent - AI Development Assistant | PopcornSAR",
    description:
      "AI-powered AUTOSAR development. Auto-generate ARXML, search APIs/SWS docs. 70%+ time savings.",
    url: "/products/aiagent",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PopcornSAR - ASPICE & AUTOSAR Solutions Provider",
      },
    ],
  },
  alternates: { canonical: "/products/aiagent" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProductJsonLd
        name="AUTOSAR AI Agent"
        description="AI NLP-based AUTOSAR development - auto-generate ARXML, search APIs and SWS docs"
        url="/products/aiagent"
      />
      {children}
    </>
  );
}
