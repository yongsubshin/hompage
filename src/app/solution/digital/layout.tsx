import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Twin - 가상 시뮬레이션 AA 검증 솔루션",
  description:
    "가상 시뮬레이션 AUTOSAR AA 기능 검증. 실제 ECU 없이 개발 초기부터 테스트 가능.",
  keywords: [
    "AUTOSAR Digital Twin",
    "virtual simulation AUTOSAR",
    "automotive digital twin",
    "ECU simulation",
  ],
  openGraph: {
    title: "Digital Twin Solution | PopcornSAR",
    description:
      "Virtual simulation-based AUTOSAR AA verification. Test early without physical ECU.",
    url: "/solution/digital",
  },
  alternates: { canonical: "/solution/digital" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
