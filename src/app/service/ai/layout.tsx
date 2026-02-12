import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "AI Agent Core Training | PopcornSAR",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
