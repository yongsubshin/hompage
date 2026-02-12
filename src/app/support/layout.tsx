import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "고객지원 | PopcornSAR",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
