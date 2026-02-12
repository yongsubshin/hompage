import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "MATLAB & Simulink | PopcornSAR",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
