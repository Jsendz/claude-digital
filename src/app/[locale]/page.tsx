import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Work from "@/components/Work";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const BASE_URL = "https://jhdigitalservices.com";
const locales = ["en", "es", "fr", "ca"] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta.home" });

  const url = locale === "en" ? BASE_URL : `${BASE_URL}/${locale}`;

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    alternates: {
      canonical: url,
      languages: {
        "x-default": BASE_URL,
        ...Object.fromEntries(
          locales.map((l) => [l, l === "en" ? BASE_URL : `${BASE_URL}/${l}`])
        ),
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url,
      locale,
      alternateLocale: locales.filter((l) => l !== locale),
    },
    twitter: {
      title: t("title"),
      description: t("description"),
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "Meta.home" });
  const tFaq = await getTranslations({ locale, namespace: "FAQ" });

  const canonicalUrl = locale === "en" ? BASE_URL : `${BASE_URL}/${locale}`;

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: t("title"),
    url: canonicalUrl,
    inLanguage: locale,
    isPartOf: { "@type": "WebSite", url: BASE_URL, name: "JH Digital" },
  };

  const faqItems = [0, 1, 2, 3, 4, 5].map((i) => ({
    "@type": "Question",
    name: tFaq(`items.${i}.question`),
    acceptedAnswer: {
      "@type": "Answer",
      text: tFaq(`items.${i}.answer`),
    },
  }));

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      <Header />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <Work />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
