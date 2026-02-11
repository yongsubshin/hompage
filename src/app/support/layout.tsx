import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "고객지원",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
