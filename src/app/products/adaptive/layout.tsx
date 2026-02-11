import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AUTOSAR Tool Kit",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
