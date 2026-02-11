import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MATLAB & Simulink",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
