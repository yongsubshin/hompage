import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Agent Core 교육 - SDV AI 에이전트 설계 교육",
  description:
    "SDV 특화 AI Agent 설계 교육. AI 에이전트 아키텍처, LLM 활용 실무 중심 과정.",
  keywords: [
    "AI Agent training",
    "SDV AI development",
    "automotive AI training",
    "LLM automotive",
  ],
  openGraph: {
    title: "AI Agent Core Training | PopcornSAR",
    description:
      "SDV-specialized AI Agent design training. Architecture, LLM integration, hands-on curriculum.",
    url: "/service/ai",
  },
  alternates: { canonical: "/service/ai" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
