import type { MetadataRoute } from "next";

const BASE_URL = "https://jhdigitalservices.com";
const locales = ["en", "es", "fr", "ca"] as const;

const pages = [
  { path: "", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/web-design", priority: 0.9, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}${page.path}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
      });
    }
  }

  return entries;
}
