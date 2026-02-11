import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PACON IDE",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
