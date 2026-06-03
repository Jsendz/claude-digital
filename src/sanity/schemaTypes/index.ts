import { localizedString } from "./objects/localizedString";
import { localizedText } from "./objects/localizedText";
import { heroSection } from "./documents/heroSection";
import { servicesSection } from "./documents/servicesSection";
import { benefitsSection } from "./documents/benefitsSection";
import { workSection } from "./documents/workSection";
import { pricingSection } from "./documents/pricingSection";
import { reviewsSection } from "./documents/reviewsSection";
import { faqSection } from "./documents/faqSection";
import { contactSection } from "./documents/contactSection";
import { footerSection } from "./documents/footerSection";
import { headerSection } from "./documents/headerSection";
import { siteSettings } from "./documents/siteSettings";
import { webDesignPage } from "./documents/webDesignPage";

export const schemaTypes = [
  // Object types (used as field types in documents)
  localizedString,
  localizedText,
  // Document types (singleton pages / sections)
  heroSection,
  servicesSection,
  benefitsSection,
  workSection,
  pricingSection,
  reviewsSection,
  faqSection,
  contactSection,
  footerSection,
  headerSection,
  siteSettings,
  webDesignPage,
];

export const singletonTypes = [
  "heroSection",
  "servicesSection",
  "benefitsSection",
  "workSection",
  "pricingSection",
  "reviewsSection",
  "faqSection",
  "contactSection",
  "footerSection",
  "headerSection",
  "siteSettings",
  "webDesignPage",
];
