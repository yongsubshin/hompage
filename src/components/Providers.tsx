"use client";

import { ReactNode } from "react";
import { PageTransition } from "@/components/animations";
import { ChatbotProvider } from "@/components/chatbot";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ChatbotProvider>
      <PageTransition>{children}</PageTransition>
    </ChatbotProvider>
  );
}
