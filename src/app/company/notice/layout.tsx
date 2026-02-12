import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "공지사항 | PopcornSAR",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
