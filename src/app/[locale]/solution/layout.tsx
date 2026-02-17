import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "솔루션",
  description:
    "Cloud Native, Digital Twin, AI 기반 AUTOSAR 솔루션. MATLAB 연동, PARVIS Agent 제공.",
  openGraph: {
    title: "솔루션 | PopcornSAR",
    description:
      "Cloud Native, Digital Twin, AI-based AUTOSAR solutions with MATLAB integration.",
    url: "/solution",
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
    canonical: "/solution",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
