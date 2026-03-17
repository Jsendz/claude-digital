import type { MetadataRoute } from "next";

const BASE_URL = "https://jhdigitalservices.com";
const locales = ["en", "es", "fr", "ca"] as const;

const pages = [
  { path: "", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/web-design", priority: 0.9, changeFrequency: "monthly" as const },
];

// English gets a 0.05 boost in priority since it's the default locale
const localePriority: Record<string, number> = { en: 0.05, es: 0, fr: 0, ca: 0 };

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    for (const locale of locales) {
      entries.push({
        url: locale === "en" ? `${BASE_URL}${page.path}` : `${BASE_URL}/${locale}${page.path}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: Math.min(1.0, page.priority + localePriority[locale]),
      });
    }
  }

  return entries;
}
