import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consulting Service",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
