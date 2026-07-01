import { groq } from "next-sanity";
import { sanityFetch } from "./client";
import { urlFor } from "./image";
import {
  lv, lva, LS,
  HeroContent, ServicesContent, BenefitsContent, WorkContent,
  PricingContent, ReviewsContent, FAQContent, ContactContent,
  HeaderContent, FooterContent, MetaContent,
} from "./types";

// ─── Hero ─────────────────────────────────────────────────────────────────────

const heroQuery = groq`*[_type == "heroSection" && _id == "heroSection"][0]{
  badge, heading1, heading2, headingAccent, paragraph,
  cta1, cta2, trustCount, trustSub,
  "images": images[]{ "image": image, alt, showBadge }
}`;

export async function getHeroContent(locale: string): Promise<HeroContent | null> {
  const d = await sanityFetch<Record<string, unknown>>(heroQuery);
  if (!d) return null;
  return {
    badge: lv(d.badge as LS, locale),
    heading1: lv(d.heading1 as LS, locale),
    heading2: lv(d.heading2 as LS, locale),
    headingAccent: lv(d.headingAccent as LS, locale),
    paragraph: lv(d.paragraph as LS, locale),
    cta1: lv(d.cta1 as LS, locale),
    cta2: lv(d.cta2 as LS, locale),
    trustCount: lv(d.trustCount as LS, locale),
    trustSub: lv(d.trustSub as LS, locale),
    images: ((d.images as Array<Record<string, unknown>>) ?? []).map((img) => ({
      imageUrl: img.image ? urlFor(img.image).width(600).auto("format").url() : null,
      alt: (img.alt as string) ?? "",
      showBadge: (img.showBadge as boolean) ?? false,
    })),
  };
}

// ─── Services ─────────────────────────────────────────────────────────────────

const servicesQuery = groq`*[_type == "servicesSection" && _id == "servicesSection"][0]{
  badge, heading, description, serviceLabel,
  "items": items[]{ title, description, "tags": tags[], "image": image }
}`;

export async function getServicesContent(locale: string): Promise<ServicesContent | null> {
  const d = await sanityFetch<Record<string, unknown>>(servicesQuery);
  if (!d) return null;
  return {
    badge: lv(d.badge as LS, locale),
    heading: lv(d.heading as LS, locale),
    description: lv(d.description as LS, locale),
    serviceLabel: lv(d.serviceLabel as LS, locale),
    items: ((d.items as Array<Record<string, unknown>>) ?? []).map((item) => ({
      title: lv(item.title as LS, locale),
      description: lv(item.description as LS, locale),
      tags: ((item.tags as Array<LS>) ?? []).map((tag) => lv(tag, locale)),
      imageUrl: item.image ? urlFor(item.image).width(500).auto("format").url() : null,
    })),
  };
}

// ─── Benefits ─────────────────────────────────────────────────────────────────

const benefitsQuery = groq`*[_type == "benefitsSection" && _id == "benefitsSection"][0]{
  badge, heading, description, "items": items[]{ icon, title, description }
}`;

export async function getBenefitsContent(locale: string): Promise<BenefitsContent | null> {
  const d = await sanityFetch<Record<string, unknown>>(benefitsQuery);
  if (!d) return null;
  return {
    badge: lv(d.badge as LS, locale),
    heading: lv(d.heading as LS, locale),
    description: lv(d.description as LS, locale),
    items: ((d.items as Array<Record<string, unknown>>) ?? []).map((item) => ({
      icon: (item.icon as string) ?? "",
      title: lv(item.title as LS, locale),
      description: lv(item.description as LS, locale),
    })),
  };
}

// ─── Work ─────────────────────────────────────────────────────────────────────

const workQuery = groq`*[_type == "workSection" && _id == "workSection"][0]{
  badge, heading, description, "projects": projects[]{ label, "image": image }
}`;

export async function getWorkContent(locale: string): Promise<WorkContent | null> {
  const d = await sanityFetch<Record<string, unknown>>(workQuery);
  if (!d) return null;
  return {
    badge: lv(d.badge as LS, locale),
    heading: lv(d.heading as LS, locale),
    description: lv(d.description as LS, locale),
    projects: ((d.projects as Array<Record<string, unknown>>) ?? []).map((p) => ({
      label: lv(p.label as LS, locale),
      imageUrl: p.image ? urlFor(p.image).width(800).auto("format").url() : null,
    })),
  };
}

// ─── Pricing ──────────────────────────────────────────────────────────────────

const pricingQuery = groq`*[_type == "pricingSection" && _id == "pricingSection"][0]{
  badge, heading, cta,
  "steps": steps[]{ title, description },
  "plans": plans[]{ name, description, price, period, devAddon, dark, features }
}`;

export async function getPricingContent(locale: string): Promise<PricingContent | null> {
  const d = await sanityFetch<Record<string, unknown>>(pricingQuery);
  if (!d) return null;
  return {
    badge: lv(d.badge as LS, locale),
    heading: lv(d.heading as LS, locale),
    cta: lv(d.cta as LS, locale),
    steps: ((d.steps as Array<Record<string, unknown>>) ?? []).map((s) => ({
      title: lv(s.title as LS, locale),
      description: lv(s.description as LS, locale),
    })),
    plans: ((d.plans as Array<Record<string, unknown>>) ?? []).map((p) => ({
      name: lv(p.name as LS, locale),
      description: lv(p.description as LS, locale),
      price: (p.price as string) ?? "",
      period: (p.period as string) ?? "",
      devAddon: lv(p.devAddon as LS, locale),
      dark: (p.dark as boolean) ?? false,
      features: lva(p.features as Record<string, string[]>, locale),
    })),
  };
}

// ─── Reviews ──────────────────────────────────────────────────────────────────

const reviewsQuery = groq`*[_type == "reviewsSection" && _id == "reviewsSection"][0]{
  badge, heading, trustCount, trustSub, contactUs, workedWith,
  "testimonials": testimonials[]{ name, role, quote }
}`;

export async function getReviewsContent(locale: string): Promise<ReviewsContent | null> {
  const d = await sanityFetch<Record<string, unknown>>(reviewsQuery);
  if (!d) return null;
  return {
    badge: lv(d.badge as LS, locale),
    heading: lv(d.heading as LS, locale),
    trustCount: lv(d.trustCount as LS, locale),
    trustSub: lv(d.trustSub as LS, locale),
    contactUs: lv(d.contactUs as LS, locale),
    workedWith: lv(d.workedWith as LS, locale),
    testimonials: ((d.testimonials as Array<Record<string, unknown>>) ?? []).map((t) => ({
      name: (t.name as string) ?? "",
      role: (t.role as string) ?? "",
      quote: lv(t.quote as LS, locale),
    })),
  };
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

const faqQuery = groq`*[_type == "faqSection" && _id == "faqSection"][0]{
  badge, heading, "items": items[]{ question, answer }
}`;

export async function getFAQContent(locale: string): Promise<FAQContent | null> {
  const d = await sanityFetch<Record<string, unknown>>(faqQuery);
  if (!d) return null;
  return {
    badge: lv(d.badge as LS, locale),
    heading: lv(d.heading as LS, locale),
    items: ((d.items as Array<Record<string, unknown>>) ?? []).map((item) => ({
      question: lv(item.question as LS, locale),
      answer: lv(item.answer as LS, locale),
    })),
  };
}

// ─── Contact ──────────────────────────────────────────────────────────────────

const contactQuery = groq`*[_type == "contactSection" && _id == "contactSection"][0]`;

export async function getContactContent(locale: string): Promise<ContactContent | null> {
  const d = await sanityFetch<Record<string, LS>>(contactQuery);
  if (!d) return null;
  return {
    badge: lv(d.badge, locale),
    heading: lv(d.heading, locale),
    description: lv(d.description, locale),
    chatToSales: lv(d.chatToSales, locale),
    callUs: lv(d.callUs, locale),
    formName: lv(d.formName, locale),
    formNamePlaceholder: lv(d.formNamePlaceholder, locale),
    formEmail: lv(d.formEmail, locale),
    formEmailPlaceholder: lv(d.formEmailPlaceholder, locale),
    formWebsite: lv(d.formWebsite, locale),
    formWebsitePlaceholder: lv(d.formWebsitePlaceholder, locale),
    formMessage: lv(d.formMessage, locale),
    formMessagePlaceholder: lv(d.formMessagePlaceholder, locale),
    formSubmit: lv(d.formSubmit, locale),
    formSending: lv(d.formSending, locale),
    formSuccessTitle: lv(d.formSuccessTitle, locale),
    formSuccessDesc: lv(d.formSuccessDesc, locale),
    formSuccessReset: lv(d.formSuccessReset, locale),
    formError: lv(d.formError, locale),
  };
}

// ─── Header ───────────────────────────────────────────────────────────────────

const headerQuery = groq`*[_type == "headerSection" && _id == "headerSection"][0]{
  menu, close, "nav": nav{ home, services, benefits, work, pricing, reviews, faqs, contact },
  "logo": logo
}`;

export async function getHeaderContent(locale: string): Promise<HeaderContent | null> {
  const d = await sanityFetch<Record<string, unknown>>(headerQuery);
  if (!d) return null;
  const nav = (d.nav as Record<string, LS>) ?? {};
  return {
    menu: lv(d.menu as LS, locale),
    close: lv(d.close as LS, locale),
    nav: {
      home: lv(nav.home, locale),
      services: lv(nav.services, locale),
      benefits: lv(nav.benefits, locale),
      work: lv(nav.work, locale),
      pricing: lv(nav.pricing, locale),
      reviews: lv(nav.reviews, locale),
      faqs: lv(nav.faqs, locale),
      contact: lv(nav.contact, locale),
    },
    logoUrl: d.logo ? urlFor(d.logo).width(240).auto("format").url() : null,
  };
}

// ─── Footer ───────────────────────────────────────────────────────────────────

const footerQuery = groq`*[_type == "footerSection" && _id == "footerSection"][0]{
  newsletterTitle, newsletterDesc, newsletterPlaceholder,
  navLabel, resourcesLabel, socialsLabel,
  "nav": nav{ services, benefits, work, pricing, reviews, faqs },
  "resources": resources{ privacy, terms },
  "socials": socials{ twitter, linkedin, youtube },
  copyright, builtWith
}`;

export async function getFooterContent(locale: string): Promise<FooterContent | null> {
  const d = await sanityFetch<Record<string, unknown>>(footerQuery);
  if (!d) return null;
  const nav = (d.nav as Record<string, LS>) ?? {};
  const resources = (d.resources as Record<string, LS>) ?? {};
  const socials = (d.socials as Record<string, LS>) ?? {};
  return {
    newsletterTitle: lv(d.newsletterTitle as LS, locale),
    newsletterDesc: lv(d.newsletterDesc as LS, locale),
    newsletterPlaceholder: lv(d.newsletterPlaceholder as LS, locale),
    navLabel: lv(d.navLabel as LS, locale),
    resourcesLabel: lv(d.resourcesLabel as LS, locale),
    socialsLabel: lv(d.socialsLabel as LS, locale),
    nav: {
      services: lv(nav.services, locale),
      benefits: lv(nav.benefits, locale),
      work: lv(nav.work, locale),
      pricing: lv(nav.pricing, locale),
      reviews: lv(nav.reviews, locale),
      faqs: lv(nav.faqs, locale),
    },
    resources: {
      privacy: lv(resources.privacy, locale),
      terms: lv(resources.terms, locale),
    },
    socials: {
      twitter: lv(socials.twitter, locale),
      linkedin: lv(socials.linkedin, locale),
      youtube: lv(socials.youtube, locale),
    },
    copyright: lv(d.copyright as LS, locale),
    builtWith: lv(d.builtWith as LS, locale),
  };
}

// ─── Site Settings / Meta ─────────────────────────────────────────────────────

const siteSettingsQuery = groq`*[_type == "siteSettings" && _id == "siteSettings"][0]{
  "metaHome": metaHome{ title, description, keywords },
  "metaWebDesign": metaWebDesign{ title, description, keywords }
}`;

export async function getMetaContent(page: "home" | "webDesign", locale: string): Promise<MetaContent | null> {
  const d = await sanityFetch<Record<string, Record<string, LS>>>(siteSettingsQuery);
  if (!d) return null;
  const section = page === "home" ? d.metaHome : d.metaWebDesign;
  if (!section) return null;
  return {
    title: lv(section.title, locale),
    description: lv(section.description, locale),
    keywords: lv(section.keywords, locale),
  };
}

// ─── Web Design Page ──────────────────────────────────────────────────────────

const webDesignQuery = groq`*[_type == "webDesignPage" && _id == "webDesignPage"][0]`;

export async function getWebDesignContent(locale: string): Promise<Record<string, unknown> | null> {
  const d = await sanityFetch<Record<string, unknown>>(webDesignQuery);
  return d;
}

/** Resolve all localized strings in the web design page content for a given locale. */
export function resolveWebDesignContent(d: Record<string, unknown>, locale: string) {
  const section = <T extends Record<string, unknown>>(obj: T | undefined): T =>
    (obj ?? {}) as T;

  const hero = section(d.hero as Record<string, unknown>);
  const problem = section(d.problem as Record<string, unknown>);
  const sol = section(d.solution as Record<string, unknown>);
  const del = section(d.deliverables as Record<string, unknown>);
  const out = section(d.outcomes as Record<string, unknown>);
  const proof = section(d.proof as Record<string, unknown>);
  const proc = section(d.process as Record<string, unknown>);
  const faq = section(d.faq as Record<string, unknown>);
  const form = section(d.form as Record<string, unknown>);

  return {
    hero: {
      badge: lv(hero.badge as LS, locale),
      heading1: lv(hero.heading1 as LS, locale),
      headingAccent: lv(hero.headingAccent as LS, locale),
      paragraph: lv(hero.paragraph as LS, locale),
      cta1: lv(hero.cta1 as LS, locale),
      cta2: lv(hero.cta2 as LS, locale),
      noPressure: lv(hero.noPressure as LS, locale),
      trustCount: lv(hero.trustCount as LS, locale),
      trustSub: lv(hero.trustSub as LS, locale),
    },
    problem: {
      badge: lv(problem.badge as LS, locale),
      heading: lv(problem.heading as LS, locale),
      items: ((problem.items as Array<Record<string, unknown>>) ?? []).map((item) => ({
        title: lv(item.title as LS, locale),
        body: lv(item.body as LS, locale),
      })),
    },
    solution: {
      badge: lv(sol.badge as LS, locale),
      heading: lv(sol.heading as LS, locale),
      paragraph: lv(sol.paragraph as LS, locale),
      inputPlaceholder: lv(sol.inputPlaceholder as LS, locale),
      ctaButton: lv(sol.ctaButton as LS, locale),
      trust: ((sol.trust as string[]) ?? []),
      mockLabel: lv(sol.mockLabel as LS, locale),
    },
    deliverables: {
      badge: lv(del.badge as LS, locale),
      heading: lv(del.heading as LS, locale),
      subtext: lv(del.subtext as LS, locale),
      items: lva(del.items as Record<string, string[]>, locale),
    },
    outcomes: {
      badge: lv(out.badge as LS, locale),
      heading: lv(out.heading as LS, locale),
      items: ((out.items as Array<Record<string, unknown>>) ?? []).map((item) => ({
        title: lv(item.title as LS, locale),
        body: lv(item.body as LS, locale),
      })),
      ctaTitle: lv(out.ctaTitle as LS, locale),
      ctaDesc: lv(out.ctaDesc as LS, locale),
      ctaButton: lv(out.ctaButton as LS, locale),
      ctaNoCommitment: lv(out.ctaNoCommitment as LS, locale),
    },
    proof: {
      badge: lv(proof.badge as LS, locale),
      heading: lv(proof.heading as LS, locale),
      trustCount: lv(proof.trustCount as LS, locale),
      trustSub: lv(proof.trustSub as LS, locale),
      ctaButton: lv(proof.ctaButton as LS, locale),
      testimonials: ((proof.testimonials as Array<Record<string, unknown>>) ?? []).map((t) => ({
        name: (t.name as string) ?? "",
        role: (t.role as string) ?? "",
        quote: lv(t.quote as LS, locale),
      })),
      caseStudyTitle: lv(proof.caseStudyTitle as LS, locale),
      caseStudyDesc: lv(proof.caseStudyDesc as LS, locale),
    },
    process: {
      badge: lv(proc.badge as LS, locale),
      heading: lv(proc.heading as LS, locale),
      subtext: lv(proc.subtext as LS, locale),
      steps: ((proc.steps as Array<Record<string, unknown>>) ?? []).map((s) => ({
        title: lv(s.title as LS, locale),
        body: lv(s.body as LS, locale),
      })),
    },
    faq: {
      badge: lv(faq.badge as LS, locale),
      heading: lv(faq.heading as LS, locale),
      items: ((faq.items as Array<Record<string, unknown>>) ?? []).map((item) => ({
        q: lv(item.q as LS, locale),
        a: lv(item.a as LS, locale),
      })),
    },
    form: {
      badge: lv(form.badge as LS, locale),
      heading: lv(form.heading as LS, locale),
      description: lv(form.description as LS, locale),
      checklist: lva(form.checklist as Record<string, string[]>, locale),
      contactLabel: lv(form.contactLabel as LS, locale),
      nameLbl: lv(form.nameLbl as LS, locale),
      emailLbl: lv(form.emailLbl as LS, locale),
      companyLbl: lv(form.companyLbl as LS, locale),
      websiteLbl: lv(form.websiteLbl as LS, locale),
      serviceLbl: lv(form.serviceLbl as LS, locale),
      goalLbl: lv(form.goalLbl as LS, locale),
      namePlaceholder: lv(form.namePlaceholder as LS, locale),
      emailPlaceholder: lv(form.emailPlaceholder as LS, locale),
      companyPlaceholder: lv(form.companyPlaceholder as LS, locale),
      websitePlaceholder: lv(form.websitePlaceholder as LS, locale),
      goalPlaceholder: lv(form.goalPlaceholder as LS, locale),
      serviceOptions: {
        defaultOpt: lv(((form.serviceOptions as Record<string, LS>) ?? {}).defaultOpt, locale),
        newWebsite: lv(((form.serviceOptions as Record<string, LS>) ?? {}).newWebsite, locale),
        redesign: lv(((form.serviceOptions as Record<string, LS>) ?? {}).redesign, locale),
        landing: lv(((form.serviceOptions as Record<string, LS>) ?? {}).landing, locale),
        ecommerce: lv(((form.serviceOptions as Record<string, LS>) ?? {}).ecommerce, locale),
        notSure: lv(((form.serviceOptions as Record<string, LS>) ?? {}).notSure, locale),
      },
      submitButton: lv(form.submitButton as LS, locale),
      submitting: lv(form.submitting as LS, locale),
      noCommitment: lv(form.noCommitment as LS, locale),
      successTitle: lv(form.successTitle as LS, locale),
      successDesc: lv(form.successDesc as LS, locale),
      successReset: lv(form.successReset as LS, locale),
    },
  };
}
