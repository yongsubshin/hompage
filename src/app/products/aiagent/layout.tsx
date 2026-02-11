import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AUTOSAR AI Agent",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
