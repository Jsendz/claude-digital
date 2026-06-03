import { defineField, defineType } from "sanity";

export const footerSection = defineType({
  name: "footerSection",
  title: "Footer",
  type: "document",
  fields: [
    defineField({ name: "newsletterTitle", title: "Newsletter Title", type: "localizedString" }),
    defineField({ name: "newsletterDesc", title: "Newsletter Description", type: "localizedText" }),
    defineField({ name: "newsletterPlaceholder", title: "Email Placeholder", type: "localizedString" }),
    defineField({ name: "navLabel", title: "Navigation Column Label", type: "localizedString" }),
    defineField({ name: "resourcesLabel", title: "Resources Column Label", type: "localizedString" }),
    defineField({ name: "socialsLabel", title: "Socials Column Label", type: "localizedString" }),
    defineField({
      name: "nav",
      title: "Navigation Links",
      type: "object",
      fields: [
        defineField({ name: "services", type: "localizedString", title: "Services" }),
        defineField({ name: "benefits", type: "localizedString", title: "Benefits" }),
        defineField({ name: "work", type: "localizedString", title: "Work" }),
        defineField({ name: "pricing", type: "localizedString", title: "Pricing" }),
        defineField({ name: "reviews", type: "localizedString", title: "Reviews" }),
        defineField({ name: "faqs", type: "localizedString", title: "FAQs" }),
      ],
    }),
    defineField({
      name: "resources",
      title: "Resource Links",
      type: "object",
      fields: [
        defineField({ name: "privacy", type: "localizedString", title: "Privacy Policy" }),
        defineField({ name: "terms", type: "localizedString", title: "Terms of Service" }),
      ],
    }),
    defineField({
      name: "socials",
      title: "Social Links",
      type: "object",
      fields: [
        defineField({ name: "twitter", type: "localizedString", title: "Twitter/X" }),
        defineField({ name: "linkedin", type: "localizedString", title: "LinkedIn" }),
        defineField({ name: "youtube", type: "localizedString", title: "YouTube" }),
      ],
    }),
    defineField({ name: "copyright", title: "Copyright Text", type: "localizedString" }),
    defineField({ name: "builtWith", title: "Built With Text", type: "localizedString" }),
  ],
  preview: { prepare: () => ({ title: "Footer" }) },
});
