import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "AUTOSAR AI Agent | PopcornSAR",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
