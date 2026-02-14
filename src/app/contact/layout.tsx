import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact PopcornSAR for AUTOSAR solutions and ASPICE consulting inquiries.",
  openGraph: {
    title: "Contact | PopcornSAR",
    description: "Contact PopcornSAR. Seoul HQ and Tokyo office.",
    url: "/contact",
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
    canonical: "/contact",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
