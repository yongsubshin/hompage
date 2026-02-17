import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "컨설팅 서비스 - ASPICE/AUTOSAR 프로젝트 전문 컨설팅",
  description:
    "ASPICE 인증 컨설팅, AUTOSAR 아키텍처 설계, 프로세스 수립. 맞춤형 프로젝트 컨설팅.",
  keywords: [
    "ASPICE consulting",
    "ASPICE 컨설팅",
    "AUTOSAR consulting",
    "automotive software consulting",
  ],
  openGraph: {
    title: "ASPICE & AUTOSAR Consulting | PopcornSAR",
    description:
      "ASPICE certification consulting, AUTOSAR architecture design, process establishment.",
    url: "/service/consulting",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PopcornSAR - ASPICE & AUTOSAR Solutions Provider",
      },
    ],
  },
  alternates: { canonical: "/service/consulting" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
