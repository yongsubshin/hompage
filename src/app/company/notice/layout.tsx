import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "공지사항",
  description:
    "PopcornSAR 최신 소식, 제품 업데이트, 이벤트, 파트너십 공지사항.",
  openGraph: {
    title: "공지사항 | PopcornSAR",
    description:
      "PopcornSAR latest news, product updates, events, and partnership announcements.",
    url: "/company/notice",
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
    canonical: "/company/notice",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
