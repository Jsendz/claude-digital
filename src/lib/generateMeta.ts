import type { Metadata } from "next";
import { routing, type Locale } from "@/i18n/routing";
import { pageMetadata, type MetaPageKey } from "./metadata";

const BASE_URL = "https://lumiqstudios.com";
const SITE_NAME = "Lumiq Studios";

// Path for each page, relative to the locale root. English is served unprefixed
// (see middleware.ts), so canonical/hreflang URLs never include "/en".
const PAGE_PATHS: Record<MetaPageKey, string> = {
  home: "",
  services: "/web-design",
  work: "/work/solenne",
  contact: "",
  score: "/lumiq",
};

const OG_IMAGES: Record<MetaPageKey, string> = {
  home: "/og/og-home.jpg",
  services: "/og/og-services.jpg",
  work: "/og/og-work.jpg",
  contact: "/og/og-contact.jpg",
  score: "/og/og-score.jpg",
};

function localeUrl(locale: Locale, path: string): string {
  return locale === routing.defaultLocale ? `${BASE_URL}${path}` : `${BASE_URL}/${locale}${path}`;
}

export function generateMeta(locale: Locale, page: MetaPageKey): Metadata {
  const content = pageMetadata[page][locale];
  const path = PAGE_PATHS[page];
  const url = localeUrl(locale, path);
  const ogImage = `${BASE_URL}${OG_IMAGES[page]}`;

  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: url,
      languages: {
        "x-default": localeUrl(routing.defaultLocale, path),
        ...Object.fromEntries(routing.locales.map((l) => [l, localeUrl(l, path)])),
      },
    },
    openGraph: {
      title: content.ogTitle,
      description: content.ogDescription,
      url,
      siteName: SITE_NAME,
      images: [{ url: ogImage }],
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: content.twitterTitle,
      description: content.twitterDescription,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
