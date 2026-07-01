import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import SolenneCaseStudy from "@/components/SolenneCaseStudy";
import CTA from "@/components/CTA";
import { generateMeta } from "@/lib/generateMeta";
import type { Locale } from "@/i18n/routing";

const BASE_URL = "https://jhdigitalservices.com";
const locales = ["en", "es", "fr", "ca"] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateMeta(locale as Locale, "work");
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
    name: "Solenne Studio — Brand Identity Case Study",
    url: canonicalUrl,
    description:
      "Brand identity, digital presence, and editorial direction for Solenne, a new architecture studio from Barcelona.",
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
        <SolenneCaseStudy locale={locale} />
        <CTA locale={locale} />
      </main>
    </>
  );
}
