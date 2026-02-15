import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/company/contact",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
