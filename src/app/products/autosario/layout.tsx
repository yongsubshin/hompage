import type { Metadata } from "next";
import { ProductJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "AutoSAR.io - AUTOSAR ARXML 설계 도구",
  description:
    "AUTOSAR Classic/Adaptive ARXML 설계 도구. Manifest 편집, 소스코드 생성, 웹 기반 플랫폼.",
  keywords: [
    "AutoSAR.io",
    "ARXML editor",
    "ASPICE SWE.2",
    "AUTOSAR design tool",
    "ARXML authoring",
    "Adaptive Platform design",
  ],
  openGraph: {
    title: "AutoSAR.io - ARXML Design Tool | PopcornSAR",
    description:
      "AUTOSAR Classic & Adaptive ARXML design tool. Web-based, R20-11 support.",
    url: "/products/autosario",
  },
  alternates: { canonical: "/products/autosario" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProductJsonLd
        name="AutoSAR.io"
        description="AUTOSAR Classic & Adaptive Platform ARXML design and code generation tool"
        url="/products/autosario"
      />
      {children}
    </>
  );
}
