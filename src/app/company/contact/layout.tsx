import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "문의하기",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
