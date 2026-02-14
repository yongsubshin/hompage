import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Q&A",
  description:
    "AUTOSAR 개발 및 PopcornSAR 제품 관련 자주 묻는 질문과 답변.",
  openGraph: {
    title: "Q&A | PopcornSAR",
    description:
      "Frequently asked questions about AUTOSAR development and PopcornSAR products.",
    url: "/support/qna",
  },
  alternates: {
    canonical: "/support/qna",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
