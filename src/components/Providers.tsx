"use client";

import { ReactNode } from "react";
import { LanguageProvider } from "@/lib/i18n";
import { PageTransition } from "@/components/animations";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <LanguageProvider>
      <PageTransition>{children}</PageTransition>
    </LanguageProvider>
  );
}
