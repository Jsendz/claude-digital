import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import WebDesignServicePage from "@/components/WebDesignServicePage";
import { getWebDesignContent, resolveWebDesignContent, getMetaContent } from "@/sanity/lib/queries";
import { generateMeta } from "@/lib/generateMeta";
import type { Locale } from "@/i18n/routing";

const BASE_URL = "https://jhdigitalservices.com";

// ─── Fallback content (used when Sanity is not yet configured) ────────────────
import enMessages from "../../../../messages/en.json";

function getFallbackContent(locale: string) {
  // Use English messages as base fallback — Sanity will replace this once configured
  const wd = enMessages.WebDesign;
  return {
    hero: { badge: wd.hero.badge, heading1: wd.hero.heading1, headingAccent: wd.hero.headingAccent, paragraph: wd.hero.paragraph, cta1: wd.hero.cta1, cta2: wd.hero.cta2, noPressure: wd.hero.noPressure, trustCount: wd.hero.trustCount, trustSub: wd.hero.trustSub },
    problem: { badge: wd.problem.badge, heading: wd.problem.heading, items: wd.problem.items.map((i) => ({ title: i.title, body: i.body })) },
    solution: { badge: wd.solution.badge, heading: wd.solution.heading, p1: wd.solution.p1, p2: wd.solution.p2, pillars: wd.solution.pillars.map((p) => ({ title: p.title, body: p.body })) },
    deliverables: { badge: wd.deliverables.badge, heading: wd.deliverables.heading, subtext: wd.deliverables.subtext, items: wd.deliverables.items },
    outcomes: { badge: wd.outcomes.badge, heading: wd.outcomes.heading, items: wd.outcomes.items.map((i) => ({ title: i.title, body: i.body })), ctaTitle: wd.outcomes.ctaTitle, ctaDesc: wd.outcomes.ctaDesc, ctaButton: wd.outcomes.ctaButton, ctaNoCommitment: wd.outcomes.ctaNoCommitment },
    proof: { badge: wd.proof.badge, heading: wd.proof.heading, trustCount: wd.proof.trustCount, trustSub: wd.proof.trustSub, ctaButton: wd.proof.ctaButton, testimonials: wd.proof.testimonials.map((t) => ({ name: t.name, role: t.role, quote: t.quote })), caseStudyTitle: wd.proof.caseStudyTitle, caseStudyDesc: wd.proof.caseStudyDesc },
    process: { badge: wd.process.badge, heading: wd.process.heading, subtext: wd.process.subtext, steps: wd.process.steps.map((s) => ({ title: s.title, body: s.body })) },
    faq: { badge: wd.faq.badge, heading: wd.faq.heading, items: wd.faq.items.map((i) => ({ q: i.q, a: i.a })) },
    form: {
      badge: wd.form.badge, heading: wd.form.heading, description: wd.form.description, checklist: wd.form.checklist, contactLabel: wd.form.contactLabel,
      nameLbl: wd.form.nameLbl, emailLbl: wd.form.emailLbl, companyLbl: wd.form.companyLbl, websiteLbl: wd.form.websiteLbl, serviceLbl: wd.form.serviceLbl, goalLbl: wd.form.goalLbl,
      namePlaceholder: wd.form.namePlaceholder, emailPlaceholder: wd.form.emailPlaceholder, companyPlaceholder: wd.form.companyPlaceholder, websitePlaceholder: wd.form.websitePlaceholder, goalPlaceholder: wd.form.goalPlaceholder,
      serviceOptions: { defaultOpt: wd.form.serviceDefault, newWebsite: wd.form.serviceNew, redesign: wd.form.serviceRedesign, landing: wd.form.serviceLanding, ecommerce: wd.form.serviceEcommerce, notSure: wd.form.serviceNotSure },
      submitButton: wd.form.submitButton, submitting: wd.form.submitting, noCommitment: wd.form.noCommitment, successTitle: wd.form.successTitle, successDesc: wd.form.successDesc, successReset: wd.form.successReset,
    },
  };
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return generateMeta(locale as Locale, "services");
}

export default async function WebDesignPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const [rawContent, meta] = await Promise.all([
    getWebDesignContent(locale),
    getMetaContent("webDesign", locale),
  ]);

  const content = rawContent ? resolveWebDesignContent(rawContent, locale) : getFallbackContent(locale);
  const canonicalUrl = locale === "en" ? `${BASE_URL}/web-design` : `${BASE_URL}/${locale}/web-design`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design & Development",
    provider: { "@type": "Organization", name: "JH Digital", url: BASE_URL },
    description: meta?.description ?? "",
    url: canonicalUrl,
    areaServed: "Worldwide",
    serviceType: "Web Design",
  };

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }} />
      <main>
        <WebDesignServicePage content={content} />
      </main>
    </>
  );
}
