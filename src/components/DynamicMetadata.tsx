"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/i18n";
import { pageMetadata } from "@/lib/i18n/pageMetadata";

function getExpectedTitle(pathname: string, title: string): string {
  return pathname === "/" ? title : `${title} | PopcornSAR`;
}

function updateMetaTags(meta: { title: string; description: string }) {
  const selectors = [
    { query: 'meta[name="description"]', attr: "content", value: meta.description },
    { query: 'meta[property="og:title"]', attr: "content", value: meta.title },
    { query: 'meta[property="og:description"]', attr: "content", value: meta.description },
    { query: 'meta[name="twitter:title"]', attr: "content", value: meta.title },
    { query: 'meta[name="twitter:description"]', attr: "content", value: meta.description },
  ];

  for (const { query, attr, value } of selectors) {
    const el = document.querySelector(query);
    if (el) el.setAttribute(attr, value);
  }
}

export function DynamicMetadata() {
  const pathname = usePathname();
  const { language } = useLanguage();
  const observerRef = useRef<MutationObserver | null>(null);

  useEffect(() => {
    const meta = pageMetadata[language]?.[pathname];
    if (!meta) return;

    const expectedTitle = getExpectedTitle(pathname, meta.title);

    const applyTitle = () => {
      if (document.title !== expectedTitle) {
        document.title = expectedTitle;
      }
    };

    applyTitle();
    updateMetaTags(meta);

    // MutationObserver: Next.js SSR overwrites document.title on navigation.
    // Watch <title> changes and re-apply the translated title.
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const titleEl = document.querySelector("title");
    if (titleEl) {
      observerRef.current = new MutationObserver(() => {
        applyTitle();
      });

      observerRef.current.observe(titleEl, {
        childList: true,
        characterData: true,
        subtree: true,
      });
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [pathname, language]);

  return null;
}
