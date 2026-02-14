import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PARVIS Agent - AI 기반 AUTOSAR 자동 마이그레이션",
  description:
    "AI 에이전트로 AUTOSAR 자동 마이그레이션. Classic에서 Adaptive 전환, 버전 업그레이드 자동 수행.",
  keywords: [
    "PARVIS Agent",
    "AUTOSAR migration",
    "Classic to Adaptive migration",
    "AUTOSAR version upgrade",
  ],
  openGraph: {
    title: "PARVIS Agent - AI Migration Solution | PopcornSAR",
    description:
      "AI agent-based AUTOSAR automatic migration. Classic to Adaptive, version upgrade.",
    url: "/solution/aiagent",
  },
  alternates: { canonical: "/solution/aiagent" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
