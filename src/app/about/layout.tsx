import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "PopcornSAR company overview. ASPICE, AUTOSAR specialists in Seoul and Tokyo.",
  openGraph: {
    title: "About | PopcornSAR",
    description:
      "PopcornSAR: ASPICE & AUTOSAR specialists with offices in Seoul and Tokyo.",
    url: "/about",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
