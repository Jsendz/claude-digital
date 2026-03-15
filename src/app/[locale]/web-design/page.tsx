import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WebDesignServicePage from "@/components/WebDesignServicePage";

const BASE_URL = "https://jhdigitalservices.com";
const locales = ["en", "es", "fr", "ca"] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta.webDesign" });

  const url = `${BASE_URL}/${locale}/web-design`;

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        locales.map((l) => [l, `${BASE_URL}/${l}/web-design`])
      ),
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

export default async function WebDesignPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "Meta.webDesign" });

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design & Development",
    provider: {
      "@type": "Organization",
      name: "JH Digital",
      url: BASE_URL,
    },
    description: t("description"),
    url: `${BASE_URL}/${locale}/web-design`,
    areaServed: "Worldwide",
    serviceType: "Web Design",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />
      <main>
        <WebDesignServicePage />
      </main>
      <Footer />
    </>
  );
}
