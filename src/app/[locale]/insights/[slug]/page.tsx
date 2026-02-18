import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { ArrowLeft, Calendar, User, ArrowRight } from "lucide-react";

import {
  getInsightBySlug,
  getRelatedInsights,
} from "@/lib/insights";
import { ArticleJsonLd } from "@/components/JsonLd";

const SITE_URL = "https://autosar.io";
const ogLocaleMap: Record<string, string> = {
  ko: "ko_KR",
  en: "en_US",
  ja: "ja_JP",
  zh: "zh_CN",
};

// ---------------------------------------------------------------------------
// generateMetadata
// ---------------------------------------------------------------------------
export async function generateMetadata({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const post = getInsightBySlug(slug, locale);

  if (!post) {
    return {};
  }

  const prefix = locale === "ko" ? "" : `/${locale}`;
  const pagePath = `/insights/${slug}`;

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_URL}${prefix}${pagePath}`,
      siteName: "PopcornSAR",
      locale: ogLocaleMap[locale] || "ko_KR",
      type: "article",
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: "PopcornSAR - ASPICE & AUTOSAR Solutions Provider",
        },
      ],
    },
    alternates: {
      canonical:
        locale === "ko"
          ? `${SITE_URL}${pagePath}`
          : `${SITE_URL}/${locale}${pagePath}`,
      languages: {
        ko: `${SITE_URL}${pagePath}`,
        en: `${SITE_URL}/en${pagePath}`,
        ja: `${SITE_URL}/ja${pagePath}`,
        zh: `${SITE_URL}/zh${pagePath}`,
        "x-default": `${SITE_URL}${pagePath}`,
      },
    },
  };
}

// ---------------------------------------------------------------------------
// Page Component (Server Component)
// ---------------------------------------------------------------------------
export default async function InsightDetailPage({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}) {
  const post = getInsightBySlug(slug, locale);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedInsights(slug, locale);
  const t = await getTranslations({ locale, namespace: "insights" });

  const prefix = locale === "ko" ? "" : `/${locale}`;
  const articleUrl = `${SITE_URL}${prefix}/insights/${slug}`;

  return (
    <div className="pt-20 bg-background min-h-screen">
      {/* Article JSON-LD */}
      <ArticleJsonLd
        headline={post.title}
        description={post.description}
        datePublished={post.publishedAt}
        url={articleUrl}
        locale={locale}
      />

      {/* ----------------------------------------------------------------- */}
      {/* Article Header                                                     */}
      {/* ----------------------------------------------------------------- */}
      <section className="relative py-16 md:py-24">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-accent-cyan/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-accent-blue/15 rounded-full blur-[150px]" />
        </div>

        <div className="section-padding container-custom relative z-10 max-w-4xl mx-auto">
          {/* Back link */}
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--accent-blue)] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t("backToList")}</span>
          </Link>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Date + Author */}
          <div className="flex flex-wrap items-center gap-4 text-[var(--text-secondary)] mb-6">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.publishedAt}
            </span>
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-[var(--accent-blue)]/10 text-[var(--accent-blue)] rounded-full px-3 py-1 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Article Body                                                       */}
      {/* ----------------------------------------------------------------- */}
      <section className="pb-16 md:pb-24">
        <div className="container-custom max-w-4xl mx-auto">
          <div
            className="prose prose-invert prose-lg max-w-none
              [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-12 [&>h2]:mb-4 [&>h2]:text-[var(--text-primary)]
              [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:text-[var(--text-primary)]
              [&>p]:text-[var(--text-secondary)] [&>p]:leading-relaxed [&>p]:mb-4
              [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul>li]:text-[var(--text-secondary)] [&>ul>li]:mb-2
              [&_strong]:text-[var(--text-primary)] [&_strong]:font-semibold
              [&_a]:text-[var(--accent-blue)] [&_a]:underline [&_a]:hover:text-[var(--accent-cyan)]"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* CTA Section                                                        */}
      {/* ----------------------------------------------------------------- */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 via-background to-accent-blue/10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-blue/20 rounded-full blur-[120px]" />

        <div className="container-custom relative z-10 max-w-3xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/products/ai"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-cyan text-background font-semibold rounded-xl hover:bg-accent-cyan/90 transition-all hover:shadow-lg hover:shadow-accent-cyan/25"
            >
              <span>{t("ctaProduct")}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/company/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-surface border border-border text-white font-semibold rounded-xl hover:bg-surface-elevated hover:border-accent-cyan/30 transition-all"
            >
              {t("ctaContact")}
            </Link>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Related Posts                                                       */}
      {/* ----------------------------------------------------------------- */}
      {relatedPosts.length > 0 && (
        <section className="py-16 md:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary/50 to-background" />

          <div className="container-custom relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
              {t("relatedPosts")}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/insights/${related.slug}`}
                  className="group relative bg-[#0a0a0f] border border-white/[0.08] rounded-2xl p-6 transition-all duration-300 hover:border-accent-cyan/30 hover:shadow-lg hover:shadow-accent-cyan/5"
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-cyan/5 to-accent-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {related.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="bg-[var(--accent-blue)]/10 text-[var(--accent-blue)] rounded-full px-2 py-0.5 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-white group-hover:text-accent-cyan transition-colors mb-2 line-clamp-2">
                      {related.title}
                    </h3>

                    {/* Description */}
                    <p className="text-text-secondary text-sm line-clamp-2 mb-4">
                      {related.description}
                    </p>

                    {/* Date */}
                    <span className="text-sm text-text-tertiary flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {related.publishedAt}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
