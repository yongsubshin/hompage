"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-bold text-accent-blue mb-4">404</h1>
        <h2 className="text-2xl font-bold text-white mb-3">{t("title")}</h2>
        <p className="text-text-secondary mb-8">
          {t("description")}
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent-blue text-white font-medium rounded-lg hover:bg-accent-blue/90 transition-colors"
        >
          {t("backHome")}
        </Link>
      </div>
    </div>
  );
}
