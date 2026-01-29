'use client';

import { createContext, useContext, useState, useCallback, useEffect, ReactNode, useMemo } from 'react';
import { useLanguage } from '@/lib/i18n';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatbotContextType {
  isOpen: boolean;
  messages: Message[];
  openChat: () => void;
  closeChat: () => void;
  toggleChat: () => void;
  resetChat: () => void;
  addMessage: (message: Message) => void;
  updateLastMessage: (content: string) => void;
}

const ChatbotContext = createContext<ChatbotContextType | null>(null);

export function ChatbotProvider({ children }: { children: ReactNode }) {
  const { t, language } = useLanguage();

  const initialMessage: Message = useMemo(() => ({
    role: 'assistant',
    content: t.chatbot.initialMessage,
  }), [t.chatbot.initialMessage]);

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([initialMessage]);

  // Reset messages when language changes
  useEffect(() => {
    setMessages([{ role: 'assistant', content: t.chatbot.initialMessage }]);
  }, [language, t.chatbot.initialMessage]);

  const openChat = useCallback(() => setIsOpen(true), []);
  const closeChat = useCallback(() => setIsOpen(false), []);
  const toggleChat = useCallback(() => setIsOpen((prev) => !prev), []);

  const resetChat = useCallback(() => {
    setMessages([{ role: 'assistant', content: t.chatbot.initialMessage }]);
    setIsOpen(false);
  }, [t.chatbot.initialMessage]);

  const addMessage = useCallback((message: Message) => {
    setMessages((prev) => [...prev, message]);
  }, []);

  const updateLastMessage = useCallback((content: string) => {
    setMessages((prev) => {
      const newMessages = [...prev];
      if (newMessages.length > 0) {
        newMessages[newMessages.length - 1] = {
          ...newMessages[newMessages.length - 1],
          content,
        };
      }
      return newMessages;
    });
  }, []);

  return (
    <ChatbotContext.Provider
      value={{
        isOpen,
        messages,
        openChat,
        closeChat,
        toggleChat,
        resetChat,
        addMessage,
        updateLastMessage,
      }}
    >
      {children}
    </ChatbotContext.Provider>
  );
}

export function useChatbot() {
  const context = useContext(ChatbotContext);
  if (!context) {
    throw new Error('useChatbot must be used within a ChatbotProvider');
  }
  return context;
}
