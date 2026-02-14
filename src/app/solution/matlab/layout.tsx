import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MATLAB & Simulink 연동 - AUTOSAR 호환 개발 솔루션",
  description:
    "MATLAB/Simulink와 AUTOSAR 호환 개발 솔루션. 기존 모델을 Adaptive 환경에 통합.",
  keywords: [
    "MATLAB AUTOSAR",
    "Simulink AUTOSAR",
    "model-based development AUTOSAR",
    "MATLAB Adaptive AUTOSAR",
  ],
  openGraph: {
    title: "MATLAB & Simulink AUTOSAR Integration | PopcornSAR",
    description:
      "MATLAB & Simulink integration with AUTOSAR Adaptive Platform.",
    url: "/solution/matlab",
  },
  alternates: { canonical: "/solution/matlab" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
