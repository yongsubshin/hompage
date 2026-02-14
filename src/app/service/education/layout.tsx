import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AUTOSAR 교육 - ECU 양산 프로젝트를 위한 전문 교육",
  description:
    "ASPICE/AUTOSAR Classic & Adaptive 전문 교육. ECU 양산 실무 중심, 입문~고급 커리큘럼.",
  keywords: [
    "ASPICE training",
    "AUTOSAR training",
    "AUTOSAR 교육",
    "Adaptive AUTOSAR training",
    "SWE.x training",
  ],
  openGraph: {
    title: "ASPICE & AUTOSAR Training | PopcornSAR",
    description:
      "ASPICE and AUTOSAR Classic & Adaptive professional training. Beginner to advanced curriculum.",
    url: "/service/education",
  },
  alternates: { canonical: "/service/education" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
