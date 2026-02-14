import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AUTOSAR 구현 서비스 - ECU 프로젝트 AUTOSAR 적용 지원",
  description:
    "ECU 프로젝트 AUTOSAR Classic/Adaptive 구현 지원. 양산 프로젝트 경험 기반 실전 서비스.",
  keywords: [
    "AUTOSAR implementation",
    "AUTOSAR 구현",
    "ECU AUTOSAR integration",
    "AUTOSAR AP",
    "AUTOSAR CP",
  ],
  openGraph: {
    title: "AUTOSAR Implementation Service | PopcornSAR",
    description:
      "ECU project AUTOSAR Classic & Adaptive implementation. Production project experience.",
    url: "/service/autosar",
  },
  alternates: { canonical: "/service/autosar" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
