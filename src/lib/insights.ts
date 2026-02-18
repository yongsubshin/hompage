import fs from "fs";
import path from "path";

// Type definitions

export interface InsightMeta {
  title: string;
  description: string;
  content: string;
}

export interface InsightPost {
  slug: string;
  publishedAt: string;
  author: string;
  tags: string[];
  ko: InsightMeta;
  en: InsightMeta;
  ja: InsightMeta;
  zh: InsightMeta;
}

export interface LocalizedInsight {
  slug: string;
  publishedAt: string;
  author: string;
  tags: string[];
  title: string;
  description: string;
  content: string;
}

// Supported locale type
type SupportedLocale = "ko" | "en" | "ja" | "zh";

// Content directory path
const CONTENT_DIR = path.join(process.cwd(), "src", "content", "insights");

/**
 * Read and parse all insight JSON files from the content directory.
 */
function loadAllPosts(): InsightPost[] {
  if (!fs.existsSync(CONTENT_DIR)) {
    return [];
  }

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".json"));
  const posts: InsightPost[] = [];

  for (const file of files) {
    const filePath = path.join(CONTENT_DIR, file);
    const raw = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(raw) as InsightPost;
    posts.push(data);
  }

  return posts;
}

/**
 * Resolve the locale key, falling back to "en" if the provided locale
 * is not one of the supported locales.
 */
function resolveLocale(locale: string): SupportedLocale {
  const supported: SupportedLocale[] = ["ko", "en", "ja", "zh"];
  return supported.includes(locale as SupportedLocale)
    ? (locale as SupportedLocale)
    : "en";
}

/**
 * Convert an InsightPost to a LocalizedInsight by extracting
 * the locale-specific title, description, and content.
 */
function localize(post: InsightPost, locale: string): LocalizedInsight {
  const key = resolveLocale(locale);
  const meta = post[key];

  return {
    slug: post.slug,
    publishedAt: post.publishedAt,
    author: post.author,
    tags: post.tags,
    title: meta.title,
    description: meta.description,
    content: meta.content,
  };
}

/**
 * Get all insight posts sorted by publishedAt descending,
 * with locale-specific fields resolved.
 */
export function getAllInsights(locale: string): LocalizedInsight[] {
  const posts = loadAllPosts();

  return posts
    .map((post) => localize(post, locale))
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

/**
 * Get a single insight post by slug with locale-specific fields resolved.
 * Returns null if the slug is not found.
 */
export function getInsightBySlug(
  slug: string,
  locale: string
): LocalizedInsight | null {
  const posts = loadAllPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return null;
  }

  return localize(post, locale);
}

/**
 * Get related insight posts by matching tags (excluding the current post).
 * Posts are ranked by the number of shared tags, then sorted by publishedAt descending.
 */
export function getRelatedInsights(
  slug: string,
  locale: string,
  limit: number = 3
): LocalizedInsight[] {
  const posts = loadAllPosts();
  const currentPost = posts.find((p) => p.slug === slug);

  if (!currentPost) {
    return [];
  }

  const currentTags = new Set(currentPost.tags);

  const scored = posts
    .filter((p) => p.slug !== slug)
    .map((p) => {
      const sharedTags = p.tags.filter((tag) => currentTags.has(tag)).length;
      return { post: p, sharedTags };
    })
    .filter((item) => item.sharedTags > 0)
    .sort((a, b) => {
      if (b.sharedTags !== a.sharedTags) {
        return b.sharedTags - a.sharedTags;
      }
      return (
        new Date(b.post.publishedAt).getTime() -
        new Date(a.post.publishedAt).getTime()
      );
    });

  return scored.slice(0, limit).map((item) => localize(item.post, locale));
}

/**
 * Get all slugs for static params generation (e.g., generateStaticParams).
 */
export function getAllSlugs(): string[] {
  const posts = loadAllPosts();
  return posts.map((p) => p.slug);
}
