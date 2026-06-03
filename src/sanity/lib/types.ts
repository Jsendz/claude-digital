// ─── Shared localized field type ─────────────────────────────────────────────

export type LS = { en?: string; es?: string; fr?: string; ca?: string };

/** Pick the right locale from a localized string, falling back to English. */
export function lv(field: LS | undefined | null, locale: string): string {
  if (!field) return "";
  return field[locale as keyof LS] ?? field.en ?? "";
}

/** Pick a localized string array, falling back to English. */
export function lva(field: Record<string, string[]> | undefined | null, locale: string): string[] {
  if (!field) return [];
  return (field[locale] ?? field["en"] ?? []) as string[];
}

// ─── Sanity image reference ───────────────────────────────────────────────────

export type SanityImage = {
  asset?: { _ref?: string; url?: string };
  hotspot?: unknown;
  crop?: unknown;
};

// ─── Section content types (resolved, locale-specific) ───────────────────────

export type HeroContent = {
  badge: string;
  heading1: string;
  heading2: string;
  headingAccent: string;
  paragraph: string;
  cta1: string;
  cta2: string;
  trustCount: string;
  trustSub: string;
  images: { imageUrl: string | null; alt: string; showBadge: boolean }[];
};

export type ServiceItem = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string | null;
};

export type ServicesContent = {
  badge: string;
  heading: string;
  description: string;
  serviceLabel: string;
  items: ServiceItem[];
};

export type BenefitItem = { icon: string; title: string; description: string };
export type BenefitsContent = {
  badge: string;
  heading: string;
  description: string;
  items: BenefitItem[];
};

export type WorkProject = { label: string; imageUrl: string | null };
export type WorkContent = {
  badge: string;
  heading: string;
  description: string;
  projects: WorkProject[];
};

export type PricingStep = { title: string; description: string };
export type PricingPlan = {
  name: string;
  description: string;
  price: string;
  period: string;
  devAddon: string;
  dark: boolean;
  features: string[];
};
export type PricingContent = {
  badge: string;
  heading: string;
  cta: string;
  steps: PricingStep[];
  plans: PricingPlan[];
};

export type Testimonial = { name: string; role: string; quote: string };
export type ReviewsContent = {
  badge: string;
  heading: string;
  trustCount: string;
  trustSub: string;
  contactUs: string;
  workedWith: string;
  testimonials: Testimonial[];
};

export type FAQItem = { question: string; answer: string };
export type FAQContent = {
  badge: string;
  heading: string;
  items: FAQItem[];
};

export type ContactContent = {
  badge: string;
  heading: string;
  description: string;
  chatToSales: string;
  callUs: string;
  formName: string;
  formNamePlaceholder: string;
  formEmail: string;
  formEmailPlaceholder: string;
  formWebsite: string;
  formWebsitePlaceholder: string;
  formMessage: string;
  formMessagePlaceholder: string;
  formSubmit: string;
  formSending: string;
  formSuccessTitle: string;
  formSuccessDesc: string;
  formSuccessReset: string;
  formError: string;
};

export type NavLabels = {
  home: string;
  services: string;
  benefits: string;
  work: string;
  pricing: string;
  reviews: string;
  faqs: string;
  contact: string;
};

export type HeaderContent = {
  menu: string;
  close: string;
  nav: NavLabels;
  logoUrl: string | null;
};

export type FooterContent = {
  newsletterTitle: string;
  newsletterDesc: string;
  newsletterPlaceholder: string;
  navLabel: string;
  resourcesLabel: string;
  socialsLabel: string;
  nav: { services: string; benefits: string; work: string; pricing: string; reviews: string; faqs: string };
  resources: { privacy: string; terms: string };
  socials: { twitter: string; linkedin: string; youtube: string };
  copyright: string;
  builtWith: string;
};

export type MetaContent = {
  title: string;
  description: string;
  keywords: string;
};
