import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AutoSAR.io",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
