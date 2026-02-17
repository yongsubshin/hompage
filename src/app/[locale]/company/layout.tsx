import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "회사소개",
  description:
    "ASPICE/AUTOSAR Adaptive Platform 선두 기업. 50+ 글로벌 고객사, 100+ 프로젝트 경험.",
  openGraph: {
    title: "회사소개 | PopcornSAR",
    description:
      "ASPICE & AUTOSAR Adaptive Platform leader. 50+ global clients, 100+ projects.",
    url: "/company",
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
    canonical: "/company",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
