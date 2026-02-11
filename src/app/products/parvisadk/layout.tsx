import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PARVIS ADK",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
