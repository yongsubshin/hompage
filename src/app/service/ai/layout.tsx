import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Agent Core Training",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
