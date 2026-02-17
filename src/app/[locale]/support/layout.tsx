import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "고객지원",
  description:
    "PopcornSAR 제품 다운로드 및 기술 지원. AutoSAR.io 평가판, 개발 플랫폼 소개 자료.",
  openGraph: {
    title: "고객지원 | PopcornSAR",
    description:
      "PopcornSAR product downloads and technical support. AutoSAR.io trial available.",
    url: "/support",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PopcornSAR - ASPICE & AUTOSAR Solutions Provider",
      },
    ],
  },
  alternates: {
    canonical: "/support",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
