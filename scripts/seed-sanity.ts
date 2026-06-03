/**
 * Seed Sanity with existing content from the JSON translation files.
 *
 * Usage:
 *   npx ts-node --project tsconfig.json scripts/seed-sanity.ts
 *
 * Requires SANITY_API_TOKEN with Editor permissions (or higher) set in .env.local
 * You can generate a token at: https://sanity.io → Manage → API → Tokens
 */

import { createClient } from "@sanity/client";
import * as dotenv from "dotenv";
import * as path from "path";

dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

// ─── Load translation files ───────────────────────────────────────────────────
// eslint-disable-next-line @typescript-eslint/no-require-imports
const en = require("../messages/en.json");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const es = require("../messages/es.json");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const fr = require("../messages/fr.json");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const ca = require("../messages/ca.json");

/** Build a localizedString object from all 4 locales */
function ls(key: string, ns: Record<string, Record<string, string>>) {
  return { en: ns.en?.[key] ?? "", es: ns.es?.[key] ?? "", fr: ns.fr?.[key] ?? "", ca: ns.ca?.[key] ?? "" };
}

/** Build a localizedString from 4 separate values */
function lsv(enVal: string, esVal: string, frVal: string, caVal: string) {
  return { en: enVal, es: esVal, fr: frVal, ca: caVal };
}

async function upsert(doc: Record<string, unknown>) {
  const id = doc._id as string;
  console.log(`  → Upserting: ${id}`);
  await client.createOrReplace(doc as Parameters<typeof client.createOrReplace>[0]);
}

async function main() {
  console.log("\n🌱 Seeding Sanity with content from messages/*.json\n");

  // ── Header ──────────────────────────────────────────────────────────────────
  await upsert({
    _id: "headerSection",
    _type: "headerSection",
    menu: lsv(en.Header.menu, es.Header.menu, fr.Header.menu, ca.Header.menu),
    close: lsv(en.Header.close, es.Header.close, fr.Header.close, ca.Header.close),
    nav: {
      home: lsv(en.Header.nav.home, es.Header.nav.home, fr.Header.nav.home, ca.Header.nav.home),
      services: lsv(en.Header.nav.services, es.Header.nav.services, fr.Header.nav.services, ca.Header.nav.services),
      benefits: lsv(en.Header.nav.benefits, es.Header.nav.benefits, fr.Header.nav.benefits, ca.Header.nav.benefits),
      work: lsv(en.Header.nav.work, es.Header.nav.work, fr.Header.nav.work, ca.Header.nav.work),
      pricing: lsv(en.Header.nav.pricing, es.Header.nav.pricing, fr.Header.nav.pricing, ca.Header.nav.pricing),
      reviews: lsv(en.Header.nav.reviews, es.Header.nav.reviews, fr.Header.nav.reviews, ca.Header.nav.reviews),
      faqs: lsv(en.Header.nav.faqs, es.Header.nav.faqs, fr.Header.nav.faqs, ca.Header.nav.faqs),
      contact: lsv(en.Header.nav.contact, es.Header.nav.contact, fr.Header.nav.contact, ca.Header.nav.contact),
    },
  });

  // ── Hero ────────────────────────────────────────────────────────────────────
  await upsert({
    _id: "heroSection",
    _type: "heroSection",
    badge: lsv(en.Hero.badge, es.Hero.badge, fr.Hero.badge, ca.Hero.badge),
    heading1: lsv(en.Hero.heading1, es.Hero.heading1, fr.Hero.heading1, ca.Hero.heading1),
    heading2: lsv(en.Hero.heading2, es.Hero.heading2, fr.Hero.heading2, ca.Hero.heading2),
    headingAccent: lsv(en.Hero.headingAccent, es.Hero.headingAccent, fr.Hero.headingAccent, ca.Hero.headingAccent),
    paragraph: lsv(en.Hero.paragraph, es.Hero.paragraph, fr.Hero.paragraph, ca.Hero.paragraph),
    cta1: lsv(en.Hero.cta1, es.Hero.cta1, fr.Hero.cta1, ca.Hero.cta1),
    cta2: lsv(en.Hero.cta2, es.Hero.cta2, fr.Hero.cta2, ca.Hero.cta2),
    trustCount: lsv(en.Hero.trustCount, es.Hero.trustCount, fr.Hero.trustCount, ca.Hero.trustCount),
    trustSub: lsv(en.Hero.trustSub, es.Hero.trustSub, fr.Hero.trustSub, ca.Hero.trustSub),
    images: [], // Upload your own images via Sanity Studio
  });

  // ── Services ────────────────────────────────────────────────────────────────
  await upsert({
    _id: "servicesSection",
    _type: "servicesSection",
    badge: lsv(en.Services.badge, es.Services.badge, fr.Services.badge, ca.Services.badge),
    heading: lsv(en.Services.heading, es.Services.heading, fr.Services.heading, ca.Services.heading),
    description: lsv(en.Services.description, es.Services.description, fr.Services.description, ca.Services.description),
    serviceLabel: lsv(en.Services.serviceLabel, es.Services.serviceLabel, fr.Services.serviceLabel, ca.Services.serviceLabel),
    items: en.Services.items.map((_: unknown, i: number) => ({
      _key: `service-${i}`,
      title: lsv(en.Services.items[i].title, es.Services.items[i].title, fr.Services.items[i].title, ca.Services.items[i].title),
      description: lsv(en.Services.items[i].description, es.Services.items[i].description, fr.Services.items[i].description, ca.Services.items[i].description),
      tags: en.Services.items[i].tags.map((tag: string, j: number) => ({
        _key: `tag-${i}-${j}`,
        en: tag,
        es: es.Services.items[i]?.tags[j] ?? tag,
        fr: fr.Services.items[i]?.tags[j] ?? tag,
        ca: ca.Services.items[i]?.tags[j] ?? tag,
      })),
    })),
  });

  // ── Benefits ────────────────────────────────────────────────────────────────
  const benefitIcons = ["$", "⚡", "∞", "↗", "✦", "📊"];
  await upsert({
    _id: "benefitsSection",
    _type: "benefitsSection",
    badge: lsv(en.Benefits.badge, es.Benefits.badge, fr.Benefits.badge, ca.Benefits.badge),
    heading: lsv(en.Benefits.heading, es.Benefits.heading, fr.Benefits.heading, ca.Benefits.heading),
    description: lsv(en.Benefits.description, es.Benefits.description, fr.Benefits.description, ca.Benefits.description),
    items: en.Benefits.items.map((_: unknown, i: number) => ({
      _key: `benefit-${i}`,
      icon: benefitIcons[i] ?? "✦",
      title: lsv(en.Benefits.items[i].title, es.Benefits.items[i].title, fr.Benefits.items[i].title, ca.Benefits.items[i].title),
      description: lsv(en.Benefits.items[i].description, es.Benefits.items[i].description, fr.Benefits.items[i].description, ca.Benefits.items[i].description),
    })),
  });

  // ── Work ────────────────────────────────────────────────────────────────────
  await upsert({
    _id: "workSection",
    _type: "workSection",
    badge: lsv(en.Work.badge, es.Work.badge, fr.Work.badge, ca.Work.badge),
    heading: lsv(en.Work.heading, es.Work.heading, fr.Work.heading, ca.Work.heading),
    description: lsv(en.Work.description, es.Work.description, fr.Work.description, ca.Work.description),
    projects: en.Work.projects.map((_: unknown, i: number) => ({
      _key: `project-${i}`,
      label: lsv(en.Work.projects[i].label, es.Work.projects[i].label, fr.Work.projects[i].label, ca.Work.projects[i].label),
      // image: upload via Sanity Studio
    })),
  });

  // ── Pricing ─────────────────────────────────────────────────────────────────
  await upsert({
    _id: "pricingSection",
    _type: "pricingSection",
    badge: lsv(en.Pricing.badge, es.Pricing.badge, fr.Pricing.badge, ca.Pricing.badge),
    heading: lsv(en.Pricing.heading, es.Pricing.heading, fr.Pricing.heading, ca.Pricing.heading),
    cta: lsv(en.Pricing.cta, es.Pricing.cta, fr.Pricing.cta, ca.Pricing.cta),
    steps: en.Pricing.steps.map((_: unknown, i: number) => ({
      _key: `step-${i}`,
      title: lsv(en.Pricing.steps[i].title, es.Pricing.steps[i].title, fr.Pricing.steps[i].title, ca.Pricing.steps[i].title),
      description: lsv(en.Pricing.steps[i].description, es.Pricing.steps[i].description, fr.Pricing.steps[i].description, ca.Pricing.steps[i].description),
    })),
    plans: [
      {
        _key: "plan-0",
        name: lsv(en.Pricing.plans[0].name, es.Pricing.plans[0].name, fr.Pricing.plans[0].name, ca.Pricing.plans[0].name),
        description: lsv(en.Pricing.plans[0].description, es.Pricing.plans[0].description, fr.Pricing.plans[0].description, ca.Pricing.plans[0].description),
        price: "$5K", period: "/mo", dark: false,
        devAddon: lsv(en.Pricing.plans[0].devAddon, es.Pricing.plans[0].devAddon, fr.Pricing.plans[0].devAddon, ca.Pricing.plans[0].devAddon),
        features: { en: en.Pricing.plans[0].features, es: es.Pricing.plans[0].features, fr: fr.Pricing.plans[0].features, ca: ca.Pricing.plans[0].features },
      },
      {
        _key: "plan-1",
        name: lsv(en.Pricing.plans[1].name, es.Pricing.plans[1].name, fr.Pricing.plans[1].name, ca.Pricing.plans[1].name),
        description: lsv(en.Pricing.plans[1].description, es.Pricing.plans[1].description, fr.Pricing.plans[1].description, ca.Pricing.plans[1].description),
        price: "$10K", period: "+", dark: true,
        devAddon: lsv(en.Pricing.plans[1].devAddon, es.Pricing.plans[1].devAddon, fr.Pricing.plans[1].devAddon, ca.Pricing.plans[1].devAddon),
        features: { en: en.Pricing.plans[1].features, es: es.Pricing.plans[1].features, fr: fr.Pricing.plans[1].features, ca: ca.Pricing.plans[1].features },
      },
    ],
  });

  // ── Reviews ─────────────────────────────────────────────────────────────────
  await upsert({
    _id: "reviewsSection",
    _type: "reviewsSection",
    badge: lsv(en.Reviews.badge, es.Reviews.badge, fr.Reviews.badge, ca.Reviews.badge),
    heading: lsv(en.Reviews.heading, es.Reviews.heading, fr.Reviews.heading, ca.Reviews.heading),
    trustCount: lsv(en.Reviews.trustCount, es.Reviews.trustCount, fr.Reviews.trustCount, ca.Reviews.trustCount),
    trustSub: lsv(en.Reviews.trustSub, es.Reviews.trustSub, fr.Reviews.trustSub, ca.Reviews.trustSub),
    contactUs: lsv(en.Reviews.contactUs, es.Reviews.contactUs, fr.Reviews.contactUs, ca.Reviews.contactUs),
    workedWith: lsv(en.Reviews.workedWith, es.Reviews.workedWith, fr.Reviews.workedWith, ca.Reviews.workedWith),
    testimonials: en.Reviews.testimonials.map((t: { name: string; role: string; quote: string }, i: number) => ({
      _key: `testimonial-${i}`,
      name: t.name,
      role: t.role,
      quote: lsv(en.Reviews.testimonials[i].quote, es.Reviews.testimonials[i].quote, fr.Reviews.testimonials[i].quote, ca.Reviews.testimonials[i].quote),
    })),
  });

  // ── FAQ ─────────────────────────────────────────────────────────────────────
  await upsert({
    _id: "faqSection",
    _type: "faqSection",
    badge: lsv(en.FAQ.badge, es.FAQ.badge, fr.FAQ.badge, ca.FAQ.badge),
    heading: lsv(en.FAQ.heading, es.FAQ.heading, fr.FAQ.heading, ca.FAQ.heading),
    items: en.FAQ.items.map((_: unknown, i: number) => ({
      _key: `faq-${i}`,
      question: lsv(en.FAQ.items[i].question, es.FAQ.items[i].question, fr.FAQ.items[i].question, ca.FAQ.items[i].question),
      answer: lsv(en.FAQ.items[i].answer, es.FAQ.items[i].answer, fr.FAQ.items[i].answer, ca.FAQ.items[i].answer),
    })),
  });

  // ── Contact ─────────────────────────────────────────────────────────────────
  const contactFields = [
    "badge", "heading", "description", "chatToSales", "callUs",
    "formName", "formNamePlaceholder", "formEmail", "formEmailPlaceholder",
    "formWebsite", "formWebsitePlaceholder", "formMessage", "formMessagePlaceholder",
    "formSubmit", "formSending", "formSuccessTitle", "formSuccessDesc",
    "formSuccessReset", "formError",
  ] as const;
  const contactDoc: Record<string, unknown> = { _id: "contactSection", _type: "contactSection" };
  for (const field of contactFields) {
    contactDoc[field] = lsv(en.Contact[field], es.Contact[field], fr.Contact[field], ca.Contact[field]);
  }
  await upsert(contactDoc);

  // ── Footer ──────────────────────────────────────────────────────────────────
  await upsert({
    _id: "footerSection",
    _type: "footerSection",
    newsletterTitle: lsv(en.Footer.newsletterTitle, es.Footer.newsletterTitle, fr.Footer.newsletterTitle, ca.Footer.newsletterTitle),
    newsletterDesc: lsv(en.Footer.newsletterDesc, es.Footer.newsletterDesc, fr.Footer.newsletterDesc, ca.Footer.newsletterDesc),
    newsletterPlaceholder: lsv(en.Footer.newsletterPlaceholder, es.Footer.newsletterPlaceholder, fr.Footer.newsletterPlaceholder, ca.Footer.newsletterPlaceholder),
    navLabel: lsv(en.Footer.navLabel, es.Footer.navLabel, fr.Footer.navLabel, ca.Footer.navLabel),
    resourcesLabel: lsv(en.Footer.resourcesLabel, es.Footer.resourcesLabel, fr.Footer.resourcesLabel, ca.Footer.resourcesLabel),
    socialsLabel: lsv(en.Footer.socialsLabel, es.Footer.socialsLabel, fr.Footer.socialsLabel, ca.Footer.socialsLabel),
    nav: {
      services: lsv(en.Footer.nav.services, es.Footer.nav.services, fr.Footer.nav.services, ca.Footer.nav.services),
      benefits: lsv(en.Footer.nav.benefits, es.Footer.nav.benefits, fr.Footer.nav.benefits, ca.Footer.nav.benefits),
      work: lsv(en.Footer.nav.work, es.Footer.nav.work, fr.Footer.nav.work, ca.Footer.nav.work),
      pricing: lsv(en.Footer.nav.pricing, es.Footer.nav.pricing, fr.Footer.nav.pricing, ca.Footer.nav.pricing),
      reviews: lsv(en.Footer.nav.reviews, es.Footer.nav.reviews, fr.Footer.nav.reviews, ca.Footer.nav.reviews),
      faqs: lsv(en.Footer.nav.faqs, es.Footer.nav.faqs, fr.Footer.nav.faqs, ca.Footer.nav.faqs),
    },
    resources: {
      privacy: lsv(en.Footer.resources.privacy, es.Footer.resources.privacy, fr.Footer.resources.privacy, ca.Footer.resources.privacy),
      terms: lsv(en.Footer.resources.terms, es.Footer.resources.terms, fr.Footer.resources.terms, ca.Footer.resources.terms),
    },
    socials: {
      twitter: lsv(en.Footer.socials.twitter, es.Footer.socials.twitter, fr.Footer.socials.twitter, ca.Footer.socials.twitter),
      linkedin: lsv(en.Footer.socials.linkedin, es.Footer.socials.linkedin, fr.Footer.socials.linkedin, ca.Footer.socials.linkedin),
      youtube: lsv(en.Footer.socials.youtube, es.Footer.socials.youtube, fr.Footer.socials.youtube, ca.Footer.socials.youtube),
    },
    copyright: lsv(en.Footer.copyright, es.Footer.copyright, fr.Footer.copyright, ca.Footer.copyright),
    builtWith: lsv(en.Footer.builtWith, es.Footer.builtWith, fr.Footer.builtWith, ca.Footer.builtWith),
  });

  // ── Site Settings / Meta ─────────────────────────────────────────────────────
  await upsert({
    _id: "siteSettings",
    _type: "siteSettings",
    metaHome: {
      title: lsv(en.Meta.home.title, es.Meta.home.title, fr.Meta.home.title, ca.Meta.home.title),
      description: lsv(en.Meta.home.description, es.Meta.home.description, fr.Meta.home.description, ca.Meta.home.description),
      keywords: lsv(en.Meta.home.keywords, es.Meta.home.keywords, fr.Meta.home.keywords, ca.Meta.home.keywords),
    },
    metaWebDesign: {
      title: lsv(en.Meta.webDesign.title, es.Meta.webDesign.title, fr.Meta.webDesign.title, ca.Meta.webDesign.title),
      description: lsv(en.Meta.webDesign.description, es.Meta.webDesign.description, fr.Meta.webDesign.description, ca.Meta.webDesign.description),
      keywords: lsv(en.Meta.webDesign.keywords, es.Meta.webDesign.keywords, fr.Meta.webDesign.keywords, ca.Meta.webDesign.keywords),
    },
  });

  // ── Web Design Page ──────────────────────────────────────────────────────────
  const wd = en.WebDesign;
  const wdEs = es.WebDesign;
  const wdFr = fr.WebDesign;
  const wdCa = ca.WebDesign;
  await upsert({
    _id: "webDesignPage",
    _type: "webDesignPage",
    hero: {
      badge: lsv(wd.hero.badge, wdEs.hero.badge, wdFr.hero.badge, wdCa.hero.badge),
      heading1: lsv(wd.hero.heading1, wdEs.hero.heading1, wdFr.hero.heading1, wdCa.hero.heading1),
      headingAccent: lsv(wd.hero.headingAccent, wdEs.hero.headingAccent, wdFr.hero.headingAccent, wdCa.hero.headingAccent),
      paragraph: lsv(wd.hero.paragraph, wdEs.hero.paragraph, wdFr.hero.paragraph, wdCa.hero.paragraph),
      cta1: lsv(wd.hero.cta1, wdEs.hero.cta1, wdFr.hero.cta1, wdCa.hero.cta1),
      cta2: lsv(wd.hero.cta2, wdEs.hero.cta2, wdFr.hero.cta2, wdCa.hero.cta2),
      noPressure: lsv(wd.hero.noPressure, wdEs.hero.noPressure, wdFr.hero.noPressure, wdCa.hero.noPressure),
      trustCount: lsv(wd.hero.trustCount, wdEs.hero.trustCount, wdFr.hero.trustCount, wdCa.hero.trustCount),
      trustSub: lsv(wd.hero.trustSub, wdEs.hero.trustSub, wdFr.hero.trustSub, wdCa.hero.trustSub),
    },
    problem: {
      badge: lsv(wd.problem.badge, wdEs.problem.badge, wdFr.problem.badge, wdCa.problem.badge),
      heading: lsv(wd.problem.heading, wdEs.problem.heading, wdFr.problem.heading, wdCa.problem.heading),
      items: wd.problem.items.map((_: unknown, i: number) => ({
        _key: `problem-${i}`,
        title: lsv(wd.problem.items[i].title, wdEs.problem.items[i].title, wdFr.problem.items[i].title, wdCa.problem.items[i].title),
        body: lsv(wd.problem.items[i].body, wdEs.problem.items[i].body, wdFr.problem.items[i].body, wdCa.problem.items[i].body),
      })),
    },
    solution: {
      badge: lsv(wd.solution.badge, wdEs.solution.badge, wdFr.solution.badge, wdCa.solution.badge),
      heading: lsv(wd.solution.heading, wdEs.solution.heading, wdFr.solution.heading, wdCa.solution.heading),
      p1: lsv(wd.solution.p1, wdEs.solution.p1, wdFr.solution.p1, wdCa.solution.p1),
      p2: lsv(wd.solution.p2, wdEs.solution.p2, wdFr.solution.p2, wdCa.solution.p2),
      pillars: wd.solution.pillars.map((_: unknown, i: number) => ({
        _key: `pillar-${i}`,
        title: lsv(wd.solution.pillars[i].title, wdEs.solution.pillars[i].title, wdFr.solution.pillars[i].title, wdCa.solution.pillars[i].title),
        body: lsv(wd.solution.pillars[i].body, wdEs.solution.pillars[i].body, wdFr.solution.pillars[i].body, wdCa.solution.pillars[i].body),
      })),
    },
    deliverables: {
      badge: lsv(wd.deliverables.badge, wdEs.deliverables.badge, wdFr.deliverables.badge, wdCa.deliverables.badge),
      heading: lsv(wd.deliverables.heading, wdEs.deliverables.heading, wdFr.deliverables.heading, wdCa.deliverables.heading),
      subtext: lsv(wd.deliverables.subtext, wdEs.deliverables.subtext, wdFr.deliverables.subtext, wdCa.deliverables.subtext),
      items: { en: wd.deliverables.items, es: wdEs.deliverables.items, fr: wdFr.deliverables.items, ca: wdCa.deliverables.items },
    },
    outcomes: {
      badge: lsv(wd.outcomes.badge, wdEs.outcomes.badge, wdFr.outcomes.badge, wdCa.outcomes.badge),
      heading: lsv(wd.outcomes.heading, wdEs.outcomes.heading, wdFr.outcomes.heading, wdCa.outcomes.heading),
      items: wd.outcomes.items.map((_: unknown, i: number) => ({
        _key: `outcome-${i}`,
        title: lsv(wd.outcomes.items[i].title, wdEs.outcomes.items[i].title, wdFr.outcomes.items[i].title, wdCa.outcomes.items[i].title),
        body: lsv(wd.outcomes.items[i].body, wdEs.outcomes.items[i].body, wdFr.outcomes.items[i].body, wdCa.outcomes.items[i].body),
      })),
      ctaTitle: lsv(wd.outcomes.ctaTitle, wdEs.outcomes.ctaTitle, wdFr.outcomes.ctaTitle, wdCa.outcomes.ctaTitle),
      ctaDesc: lsv(wd.outcomes.ctaDesc, wdEs.outcomes.ctaDesc, wdFr.outcomes.ctaDesc, wdCa.outcomes.ctaDesc),
      ctaButton: lsv(wd.outcomes.ctaButton, wdEs.outcomes.ctaButton, wdFr.outcomes.ctaButton, wdCa.outcomes.ctaButton),
      ctaNoCommitment: lsv(wd.outcomes.ctaNoCommitment, wdEs.outcomes.ctaNoCommitment, wdFr.outcomes.ctaNoCommitment, wdCa.outcomes.ctaNoCommitment),
    },
    proof: {
      badge: lsv(wd.proof.badge, wdEs.proof.badge, wdFr.proof.badge, wdCa.proof.badge),
      heading: lsv(wd.proof.heading, wdEs.proof.heading, wdFr.proof.heading, wdCa.proof.heading),
      trustCount: lsv(wd.proof.trustCount, wdEs.proof.trustCount, wdFr.proof.trustCount, wdCa.proof.trustCount),
      trustSub: lsv(wd.proof.trustSub, wdEs.proof.trustSub, wdFr.proof.trustSub, wdCa.proof.trustSub),
      ctaButton: lsv(wd.proof.ctaButton, wdEs.proof.ctaButton, wdFr.proof.ctaButton, wdCa.proof.ctaButton),
      testimonials: wd.proof.testimonials.map((t: { name: string; role: string; quote: string }, i: number) => ({
        _key: `proof-testimonial-${i}`,
        name: t.name, role: t.role,
        quote: lsv(wd.proof.testimonials[i].quote, wdEs.proof.testimonials[i].quote, wdFr.proof.testimonials[i].quote, wdCa.proof.testimonials[i].quote),
      })),
      caseStudyTitle: lsv(wd.proof.caseStudyTitle, wdEs.proof.caseStudyTitle, wdFr.proof.caseStudyTitle, wdCa.proof.caseStudyTitle),
      caseStudyDesc: lsv(wd.proof.caseStudyDesc, wdEs.proof.caseStudyDesc, wdFr.proof.caseStudyDesc, wdCa.proof.caseStudyDesc),
    },
    process: {
      badge: lsv(wd.process.badge, wdEs.process.badge, wdFr.process.badge, wdCa.process.badge),
      heading: lsv(wd.process.heading, wdEs.process.heading, wdFr.process.heading, wdCa.process.heading),
      subtext: lsv(wd.process.subtext, wdEs.process.subtext, wdFr.process.subtext, wdCa.process.subtext),
      steps: wd.process.steps.map((_: unknown, i: number) => ({
        _key: `step-${i}`,
        title: lsv(wd.process.steps[i].title, wdEs.process.steps[i].title, wdFr.process.steps[i].title, wdCa.process.steps[i].title),
        body: lsv(wd.process.steps[i].body, wdEs.process.steps[i].body, wdFr.process.steps[i].body, wdCa.process.steps[i].body),
      })),
    },
    faq: {
      badge: lsv(wd.faq.badge, wdEs.faq.badge, wdFr.faq.badge, wdCa.faq.badge),
      heading: lsv(wd.faq.heading, wdEs.faq.heading, wdFr.faq.heading, wdCa.faq.heading),
      items: wd.faq.items.map((_: unknown, i: number) => ({
        _key: `wdfaq-${i}`,
        q: lsv(wd.faq.items[i].q, wdEs.faq.items[i].q, wdFr.faq.items[i].q, wdCa.faq.items[i].q),
        a: lsv(wd.faq.items[i].a, wdEs.faq.items[i].a, wdFr.faq.items[i].a, wdCa.faq.items[i].a),
      })),
    },
    form: {
      badge: lsv(wd.form.badge, wdEs.form.badge, wdFr.form.badge, wdCa.form.badge),
      heading: lsv(wd.form.heading, wdEs.form.heading, wdFr.form.heading, wdCa.form.heading),
      description: lsv(wd.form.description, wdEs.form.description, wdFr.form.description, wdCa.form.description),
      checklist: { en: wd.form.checklist, es: wdEs.form.checklist, fr: wdFr.form.checklist, ca: wdCa.form.checklist },
      contactLabel: lsv(wd.form.contactLabel, wdEs.form.contactLabel, wdFr.form.contactLabel, wdCa.form.contactLabel),
      nameLbl: lsv(wd.form.nameLbl, wdEs.form.nameLbl, wdFr.form.nameLbl, wdCa.form.nameLbl),
      emailLbl: lsv(wd.form.emailLbl, wdEs.form.emailLbl, wdFr.form.emailLbl, wdCa.form.emailLbl),
      companyLbl: lsv(wd.form.companyLbl, wdEs.form.companyLbl, wdFr.form.companyLbl, wdCa.form.companyLbl),
      websiteLbl: lsv(wd.form.websiteLbl, wdEs.form.websiteLbl, wdFr.form.websiteLbl, wdCa.form.websiteLbl),
      serviceLbl: lsv(wd.form.serviceLbl, wdEs.form.serviceLbl, wdFr.form.serviceLbl, wdCa.form.serviceLbl),
      goalLbl: lsv(wd.form.goalLbl, wdEs.form.goalLbl, wdFr.form.goalLbl, wdCa.form.goalLbl),
      namePlaceholder: lsv(wd.form.namePlaceholder, wdEs.form.namePlaceholder, wdFr.form.namePlaceholder, wdCa.form.namePlaceholder),
      emailPlaceholder: lsv(wd.form.emailPlaceholder, wdEs.form.emailPlaceholder, wdFr.form.emailPlaceholder, wdCa.form.emailPlaceholder),
      companyPlaceholder: lsv(wd.form.companyPlaceholder, wdEs.form.companyPlaceholder, wdFr.form.companyPlaceholder, wdCa.form.companyPlaceholder),
      websitePlaceholder: lsv(wd.form.websitePlaceholder, wdEs.form.websitePlaceholder, wdFr.form.websitePlaceholder, wdCa.form.websitePlaceholder),
      goalPlaceholder: lsv(wd.form.goalPlaceholder, wdEs.form.goalPlaceholder, wdFr.form.goalPlaceholder, wdCa.form.goalPlaceholder),
      serviceOptions: {
        defaultOpt: lsv(wd.form.serviceDefault, wdEs.form.serviceDefault, wdFr.form.serviceDefault, wdCa.form.serviceDefault),
        newWebsite: lsv(wd.form.serviceNew, wdEs.form.serviceNew, wdFr.form.serviceNew, wdCa.form.serviceNew),
        redesign: lsv(wd.form.serviceRedesign, wdEs.form.serviceRedesign, wdFr.form.serviceRedesign, wdCa.form.serviceRedesign),
        landing: lsv(wd.form.serviceLanding, wdEs.form.serviceLanding, wdFr.form.serviceLanding, wdCa.form.serviceLanding),
        ecommerce: lsv(wd.form.serviceEcommerce, wdEs.form.serviceEcommerce, wdFr.form.serviceEcommerce, wdCa.form.serviceEcommerce),
        notSure: lsv(wd.form.serviceNotSure, wdEs.form.serviceNotSure, wdFr.form.serviceNotSure, wdCa.form.serviceNotSure),
      },
      submitButton: lsv(wd.form.submitButton, wdEs.form.submitButton, wdFr.form.submitButton, wdCa.form.submitButton),
      submitting: lsv(wd.form.submitting, wdEs.form.submitting, wdFr.form.submitting, wdCa.form.submitting),
      noCommitment: lsv(wd.form.noCommitment, wdEs.form.noCommitment, wdFr.form.noCommitment, wdCa.form.noCommitment),
      successTitle: lsv(wd.form.successTitle, wdEs.form.successTitle, wdFr.form.successTitle, wdCa.form.successTitle),
      successDesc: lsv(wd.form.successDesc, wdEs.form.successDesc, wdFr.form.successDesc, wdCa.form.successDesc),
      successReset: lsv(wd.form.successReset, wdEs.form.successReset, wdFr.form.successReset, wdCa.form.successReset),
    },
  });

  console.log("\n✅ Seed complete! All content has been uploaded to Sanity.");
  console.log("   → Open your Studio at /studio to review and publish the drafts.\n");
}

main().catch((err) => {
  console.error("❌ Seed failed:", err);
  process.exit(1);
});
