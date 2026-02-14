"use client";

import { ReactNode } from "react";
import { LanguageProvider } from "@/lib/i18n";
import { PageTransition } from "@/components/animations";
import { ChatbotProvider } from "@/components/chatbot";
import { DynamicMetadata } from "@/components/DynamicMetadata";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <LanguageProvider>
      <DynamicMetadata />
      <ChatbotProvider>
        <PageTransition>{children}</PageTransition>
      </ChatbotProvider>
    </LanguageProvider>
  );
}
