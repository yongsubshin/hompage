import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Native AUTOSAR - 클라우드 기반 AA 개발 솔루션",
  description:
    "AWS 기반 AUTOSAR Adaptive Application 개발. ARM64 Docker 가상 ECU, CI/CD 파이프라인.",
  keywords: [
    "Cloud Native AUTOSAR",
    "AWS AUTOSAR",
    "cloud automotive development",
    "ARM64 virtual ECU",
  ],
  openGraph: {
    title: "Cloud Native AUTOSAR Solution | PopcornSAR",
    description:
      "AWS-based cloud native AUTOSAR development. ARM64 virtual ECU, CI/CD integration.",
    url: "/solution/cloudnative",
  },
  alternates: { canonical: "/solution/cloudnative" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
