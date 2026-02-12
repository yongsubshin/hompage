import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "서비스 | PopcornSAR",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
