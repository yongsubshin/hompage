import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact PopcornSAR for AUTOSAR solutions and ASPICE consulting inquiries.",
  openGraph: {
    title: "Contact | PopcornSAR",
    description: "Contact PopcornSAR. Seoul HQ and Tokyo office.",
    url: "/contact",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
