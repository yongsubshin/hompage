import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "AutoSAR.io | PopcornSAR",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
