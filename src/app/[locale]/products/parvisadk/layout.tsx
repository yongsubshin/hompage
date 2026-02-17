import type { Metadata } from "next";
import { ProductJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "PARVIS ADK - SDV 개발 자동화 & TDD 테스트케이스 자동 생성",
  description:
    "CAN DBC/ARXML 기반 SDV End-to-End 자동화. TDD 테스트케이스 AI 생성, ASPICE/V-Model 자동 준수.",
  keywords: [
    "ASPICE V-Model automation",
    "ASPICE SDV compliance",
    "TDD test automation",
    "TDD 테스트케이스 자동 생성",
    "PARVIS ADK",
    "SDV development",
    "Software Defined Vehicle",
    "CAN DBC parser",
    "ARXML parser",
    "SOME/IP",
  ],
  openGraph: {
    title: "PARVIS ADK - SDV & TDD Test Automation | PopcornSAR",
    description:
      "AI-powered SDV End-to-End automation. TDD test case generation, ASPICE V-Model compliance. 70-80% faster development.",
    url: "/products/parvisadk",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PopcornSAR - ASPICE & AUTOSAR Solutions Provider",
      },
    ],
  },
  alternates: { canonical: "/products/parvisadk" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProductJsonLd
        name="PARVIS ADK"
        description="AI-powered SDV End-to-End development automation. TDD test case generation, ASPICE V-Model compliance."
        url="/products/parvisadk"
      />
      {children}
    </>
  );
}
