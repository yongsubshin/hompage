import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI for Adaptive Platforms - AI 연동 AA 개발 솔루션",
  description:
    "AI/ML 워크로드를 AUTOSAR Adaptive Platform에 통합. 지능형 차량 기능 구현 솔루션.",
  keywords: [
    "AI Adaptive AUTOSAR",
    "AI automotive platform",
    "ML AUTOSAR integration",
    "SOA automotive",
  ],
  openGraph: {
    title: "AI for Adaptive Platforms | PopcornSAR",
    description:
      "Integrate AI/ML workloads with AUTOSAR Adaptive Platform for intelligent vehicle features.",
    url: "/solution/ai",
  },
  alternates: { canonical: "/solution/ai" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
