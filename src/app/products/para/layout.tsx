import type { Metadata } from "next";
import { ProductJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "PARA - AUTOSAR Adaptive Functional Clusters",
  description:
    "AUTOSAR Adaptive Functional Cluster API/C++ Generator. ISO 26262 안전 메커니즘 포함, R20-11 지원.",
  keywords: [
    "PARA",
    "ISO 26262",
    "AUTOSAR Functional Clusters",
    "Adaptive Platform API",
    "ARA API",
    "ara::com",
    "ara::exec",
  ],
  openGraph: {
    title: "PARA - AUTOSAR Adaptive Platform Software | PopcornSAR",
    description:
      "AUTOSAR Adaptive Functional Clusters with ISO 26262 safety mechanisms. API, C++ Generator, Manifest Generator.",
    url: "/products/para",
  },
  alternates: { canonical: "/products/para" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProductJsonLd
        name="PARA"
        description="AUTOSAR Adaptive Platform Functional Clusters - API, C++ Generator, Manifest Generator"
        url="/products/para"
      />
      {children}
    </>
  );
}
