export const locales = ["ko", "en", "ja", "zh"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ko";

export const localeNames: Record<Locale, string> = {
  ko: "KOR",
  en: "ENG",
  ja: "JPN",
  zh: "CHN",
};

export const localeFullNames: Record<Locale, string> = {
  ko: "Korean",
  en: "English",
  ja: "Japanese",
  zh: "Chinese",
};
