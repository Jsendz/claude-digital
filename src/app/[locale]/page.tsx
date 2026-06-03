import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import VisibilityScoreSection from "@/components/VisibilityScoreSection";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Work from "@/components/Work";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import { getFAQContent, getMetaContent } from "@/sanity/lib/queries";

const BASE_URL = "https://jhdigitalservices.com";
const locales = ["en", "es", "fr", "ca"] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta = await getMetaContent("home", locale);

  const title = meta?.title ?? "JH Digital — Branding, Web Design & Marketing";
  const description = meta?.description ?? "We help businesses stand out, build trust, and generate leads.";
  const keywords = meta?.keywords ?? "";
  const url = locale === "en" ? BASE_URL : `${BASE_URL}/${locale}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
      languages: {
        "x-default": BASE_URL,
        ...Object.fromEntries(locales.map((l) => [l, l === "en" ? BASE_URL : `${BASE_URL}/${l}`])),
      },
    },
    openGraph: { title, description, url, locale, alternateLocale: locales.filter((l) => l !== locale) },
    twitter: { title, description },
  };
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const [faqContent, meta] = await Promise.all([
    getFAQContent(locale),
    getMetaContent("home", locale),
  ]);

  const canonicalUrl = locale === "en" ? BASE_URL : `${BASE_URL}/${locale}`;

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: meta?.title ?? "JH Digital — Branding, Web Design & Marketing",
    url: canonicalUrl,
    inLanguage: locale,
    isPartOf: { "@type": "WebSite", url: BASE_URL, name: "JH Digital" },
  };

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: (faqContent?.items ?? []).map((item: { question: string; answer: string }) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }} />
      <main>
        <Hero locale={locale} />
        <ProblemSection />
        <VisibilityScoreSection />
        <Services locale={locale} />
        <Benefits locale={locale} />
        <Work locale={locale} />
        <FAQ content={faqContent} />
        <CTA locale={locale} />
        <Contact locale={locale} />
      </main>
    </>
  );
}
