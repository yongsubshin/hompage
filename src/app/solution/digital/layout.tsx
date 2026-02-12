import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Digital Twin | PopcornSAR",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
