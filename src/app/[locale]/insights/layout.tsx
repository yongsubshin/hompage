import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

const PAGE_PATH = "/insights";
const META_KEY = "insights";

const SITE_URL = "https://autosar.io";
const ogLocaleMap: Record<string, string> = {
  ko: "ko_KR", en: "en_US", ja: "ja_JP", zh: "zh_CN",
};

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "metadata" });
  const prefix = locale === "ko" ? "" : `/${locale}`;

  return {
    title: t(`${META_KEY}.title`),
    description: t(`${META_KEY}.description`),
    openGraph: {
      title: t(`${META_KEY}.title`),
      description: t(`${META_KEY}.description`),
      url: `${SITE_URL}${prefix}${PAGE_PATH}`,
      siteName: "PopcornSAR",
      locale: ogLocaleMap[locale] || "ko_KR",
      type: "website",
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
      canonical: locale === "ko"
        ? `${SITE_URL}${PAGE_PATH}`
        : `${SITE_URL}/${locale}${PAGE_PATH}`,
      languages: {
        ko: `${SITE_URL}${PAGE_PATH}`,
        en: `${SITE_URL}/en${PAGE_PATH}`,
        ja: `${SITE_URL}/ja${PAGE_PATH}`,
        zh: `${SITE_URL}/zh${PAGE_PATH}`,
        "x-default": `${SITE_URL}${PAGE_PATH}`,
      },
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
