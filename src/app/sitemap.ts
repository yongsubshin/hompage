import { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/insights";

const SITE_URL = "https://autosar.io";
const locales = ["ko", "en", "ja", "zh"];
const defaultLocale = "ko";

const pages: { path: string; changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"]; priority: number }[] = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/company", changeFrequency: "monthly", priority: 0.8 },
  { path: "/company/contact", changeFrequency: "monthly", priority: 0.7 },
  { path: "/company/notice", changeFrequency: "weekly", priority: 0.6 },
  { path: "/products", changeFrequency: "weekly", priority: 0.9 },
  { path: "/products/adaptive", changeFrequency: "monthly", priority: 0.8 },
  { path: "/products/autosario", changeFrequency: "monthly", priority: 0.8 },
  { path: "/products/para", changeFrequency: "monthly", priority: 0.8 },
  { path: "/products/pacon", changeFrequency: "monthly", priority: 0.8 },
  { path: "/products/ai", changeFrequency: "monthly", priority: 0.9 },
  { path: "/products/parvisadk", changeFrequency: "monthly", priority: 0.9 },
  { path: "/products/aiagent", changeFrequency: "monthly", priority: 0.9 },
  { path: "/solution", changeFrequency: "monthly", priority: 0.8 },
  { path: "/solution/cloudnative", changeFrequency: "monthly", priority: 0.7 },
  { path: "/solution/digital", changeFrequency: "monthly", priority: 0.7 },
  { path: "/solution/ai", changeFrequency: "monthly", priority: 0.7 },
  { path: "/solution/matlab", changeFrequency: "monthly", priority: 0.7 },
  { path: "/solution/aiagent", changeFrequency: "monthly", priority: 0.7 },
  { path: "/service", changeFrequency: "monthly", priority: 0.8 },
  { path: "/service/consulting", changeFrequency: "monthly", priority: 0.7 },
  { path: "/service/autosar", changeFrequency: "monthly", priority: 0.7 },
  { path: "/service/education", changeFrequency: "monthly", priority: 0.7 },
  { path: "/service/tool", changeFrequency: "monthly", priority: 0.7 },
  { path: "/service/ai", changeFrequency: "monthly", priority: 0.7 },
  { path: "/support", changeFrequency: "monthly", priority: 0.7 },
  { path: "/support/qna", changeFrequency: "monthly", priority: 0.6 },
  { path: "/insights", changeFrequency: "weekly", priority: 0.9 },
];

function getLocaleUrl(path: string, locale: string): string {
  const prefix = locale === defaultLocale ? "" : `/${locale}`;
  const pagePath = path === "/" ? "" : path;
  return `${SITE_URL}${prefix}${pagePath}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Static pages
  for (const page of pages) {
    for (const locale of locales) {
      const alternates: Record<string, string> = {};
      for (const altLocale of locales) {
        alternates[altLocale] = getLocaleUrl(page.path, altLocale);
      }
      alternates["x-default"] = getLocaleUrl(page.path, defaultLocale);

      entries.push({
        url: getLocaleUrl(page.path, locale),
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: alternates,
        },
      });
    }
  }

  // Dynamic insight post pages
  const slugs = getAllSlugs();
  for (const slug of slugs) {
    const insightPath = `/insights/${slug}`;
    for (const locale of locales) {
      const alternates: Record<string, string> = {};
      for (const altLocale of locales) {
        alternates[altLocale] = getLocaleUrl(insightPath, altLocale);
      }
      alternates["x-default"] = getLocaleUrl(insightPath, defaultLocale);

      entries.push({
        url: getLocaleUrl(insightPath, locale),
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: {
          languages: alternates,
        },
      });
    }
  }

  return entries;
}
