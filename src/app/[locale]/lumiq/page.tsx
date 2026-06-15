import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import LumiqLandingPage from "@/components/LumiqLandingPage";
import { generateMeta } from "@/lib/generateMeta";
import type { Locale } from "@/i18n/routing";

const BASE_URL = "https://jhdigitalservices.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateMeta(locale as Locale, "score");
}

export default async function LumiqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const canonicalUrl = locale === "en" ? `${BASE_URL}/lumiq` : `${BASE_URL}/${locale}/lumiq`;

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Lumiq — Website Visibility Score",
    url: canonicalUrl,
    inLanguage: locale,
    description:
      "Free website visibility diagnostic for small businesses. 20 questions. Score out of 100. Grade A–F. Actionable recommendations.",
    isPartOf: { "@type": "WebSite", url: BASE_URL, name: "JH Digital" },
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Lumiq Visibility Score",
    description: "A 60-second website diagnostic that scores your small business website out of 100 and provides a personalised improvement report.",
    offers: [
      {
        "@type": "Offer",
        name: "Score (Free)",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Score + Plan",
        price: "149",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Done-for-you",
        price: "1490",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <main>
        <LumiqLandingPage />
      </main>
    </>
  );
}
