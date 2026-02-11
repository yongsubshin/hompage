import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Development",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
