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

  const url = `${BASE_URL}/${locale}`;

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    alternates: {
      canonical: url,
      languages: Object.fromEntries([
        ...locales.map((l) => [l, `${BASE_URL}/${l}`]),
        ["x-default", `${BASE_URL}/en`],
      ]),
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

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "JH Digital — Branding, Web Design & Marketing",
    url: `${BASE_URL}/${locale}`,
    inLanguage: locale,
    isPartOf: { "@type": "WebSite", url: BASE_URL, name: "JH Digital" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
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
