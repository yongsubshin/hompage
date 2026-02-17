import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "문의하기 | PopcornSAR",
  description:
    "PopcornSAR 문의. 한국 본사(서울), 일본 법인(도쿄). AUTOSAR 제품/솔루션 상담.",
  openGraph: {
    title: "문의하기 | PopcornSAR",
    description:
      "Contact PopcornSAR. Seoul HQ and Tokyo office. AUTOSAR product and solution inquiries.",
    url: "/company/contact",
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
    canonical: "/company/contact",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
