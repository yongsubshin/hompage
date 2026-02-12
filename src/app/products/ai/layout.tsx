import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "PARVIS | PopcornSAR",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
