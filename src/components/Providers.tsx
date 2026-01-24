"use client";

import { ReactNode } from "react";
import { LanguageProvider } from "@/lib/i18n";
import { PageTransition } from "@/components/animations";
import { ChatbotProvider } from "@/components/chatbot";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <LanguageProvider>
      <ChatbotProvider>
        <PageTransition>{children}</PageTransition>
      </ChatbotProvider>
    </LanguageProvider>
  );
}
