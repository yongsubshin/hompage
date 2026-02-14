import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "맞춤 개발 서비스 - AUTOSAR 프로젝트 맞춤형 도구 개발",
  description:
    "프로젝트 맞춤형 AUTOSAR 개발 도구 제작. 자동화 스크립트, 플러그인, 전용 도구.",
  keywords: [
    "AUTOSAR custom development",
    "AUTOSAR 맞춤 개발",
    "automotive tool development",
  ],
  openGraph: {
    title: "Custom Development Service | PopcornSAR",
    description:
      "Custom AUTOSAR development tools. Automation scripts, plugins, project-specific tools.",
    url: "/service/tool",
  },
  alternates: { canonical: "/service/tool" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
