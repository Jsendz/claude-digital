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
import { getMetaContent } from "@/sanity/lib/queries";
import { generateMeta } from "@/lib/generateMeta";
import type { Locale } from "@/i18n/routing";

const BASE_URL = "https://lumiqstudios.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateMeta(locale as Locale, "home");
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const meta = await getMetaContent("home", locale);

  const canonicalUrl = locale === "en" ? BASE_URL : `${BASE_URL}/${locale}`;

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: meta?.title ?? "Lumiq Studios — Branding, Web Design & Marketing",
    url: canonicalUrl,
    inLanguage: locale,
    isPartOf: { "@type": "WebSite", url: BASE_URL, name: "Lumiq Studios" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <main>
        <Hero />
        <ProblemSection />
        <VisibilityScoreSection />
        <Services />
        <Benefits locale={locale} />
        <Work locale={locale} />
        <FAQ />
        <CTA locale={locale} />
        <Contact locale={locale} />
      </main>
    </>
  );
}
