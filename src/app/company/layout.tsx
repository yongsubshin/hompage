import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "회사소개 | PopcornSAR",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
