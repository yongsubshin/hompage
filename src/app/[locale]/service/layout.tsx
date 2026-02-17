import type { Metadata } from "next";
import { ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "서비스",
  description:
    "ASPICE 컨설팅, AUTOSAR 구현 지원, 교육, AI Agent Core 교육 등 전문 엔지니어링 서비스.",
  openGraph: {
    title: "서비스 | PopcornSAR",
    description:
      "ASPICE consulting, AUTOSAR implementation, training, and AI Agent Core education services.",
    url: "/service",
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
    canonical: "/service",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd />
      {children}
    </>
  );
}
