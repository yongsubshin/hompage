import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "AI for Adaptive Platforms | PopcornSAR",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
