import { getAllInsights } from "@/lib/insights";
import { getTranslations } from "next-intl/server";
import { InsightsPageClient } from "./InsightsPageClient";

export default async function InsightsPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const posts = getAllInsights(locale);
  const t = await getTranslations({ locale, namespace: "insights" });

  const translations = {
    heroTitle: t("heroTitle"),
    heroDescription: t("heroDescription"),
    readMore: t("readMore"),
    tags: t("tags"),
    publishedAt: t("publishedAt"),
    noPosts: t("noPosts"),
  };

  return <InsightsPageClient posts={posts} translations={translations} />;
}
