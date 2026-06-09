import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import SolenneCaseStudy from "@/components/SolenneCaseStudy";
import CTA from "@/components/CTA";

const BASE_URL = "https://jhdigitalservices.com";
const locales = ["en", "es", "fr", "ca"] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const url =
    locale === "en"
      ? `${BASE_URL}/work/solenne`
      : `${BASE_URL}/${locale}/work/solenne`;

  return {
    title: "Solenne candles — Case Study",
    description:
      "Brand identity, packaging, and web for Solenne, a new candle house out of Madrid. A focused ten-week sprint that shipped six SKUs, a Webflow site, and an editorial campaign.",
    keywords: "brand identity, packaging design, candle brand, Solenne, case study",
    alternates: {
      canonical: url,
      languages: {
        "x-default": `${BASE_URL}/work/solenne`,
        ...Object.fromEntries(
          locales.map((l) => [
            l,
            l === "en"
              ? `${BASE_URL}/work/solenne`
              : `${BASE_URL}/${l}/work/solenne`,
          ])
        ),
      },
    },
    openGraph: {
      title: "Solenne candles — Case Study",
      description:
        "Brand identity, packaging, and web for Solenne, a new candle house out of Madrid.",
      url,
      locale,
    },
    twitter: {
      title: "Solenne candles — Case Study",
      description:
        "Brand identity, packaging, and web for Solenne, a new candle house out of Madrid.",
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function SolennePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const canonicalUrl =
    locale === "en"
      ? `${BASE_URL}/work/solenne`
      : `${BASE_URL}/${locale}/work/solenne`;

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Solenne candles — Brand Identity Case Study",
    url: canonicalUrl,
    description:
      "Brand identity, packaging, and web for Solenne, a new candle house out of Madrid.",
    creator: { "@type": "Organization", name: "JH Digital", url: BASE_URL },
    inLanguage: locale,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />
      <main>
        <SolenneCaseStudy />
        <CTA locale={locale} />
      </main>
    </>
  );
}
