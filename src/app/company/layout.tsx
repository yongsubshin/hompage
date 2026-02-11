import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "회사소개",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
