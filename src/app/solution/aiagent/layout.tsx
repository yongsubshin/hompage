import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PARVIS Agent",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
