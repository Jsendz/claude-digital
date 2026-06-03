import { defineField, defineType } from "sanity";

export const headerSection = defineType({
  name: "headerSection",
  title: "Header",
  type: "document",
  fields: [
    defineField({ name: "menu", title: "Menu Button Label", type: "localizedString" }),
    defineField({ name: "close", title: "Close Button Label", type: "localizedString" }),
    defineField({
      name: "nav",
      title: "Navigation Labels",
      type: "object",
      fields: [
        defineField({ name: "home", type: "localizedString", title: "Home" }),
        defineField({ name: "services", type: "localizedString", title: "Services" }),
        defineField({ name: "benefits", type: "localizedString", title: "Benefits" }),
        defineField({ name: "work", type: "localizedString", title: "Work" }),
        defineField({ name: "pricing", type: "localizedString", title: "Pricing" }),
        defineField({ name: "reviews", type: "localizedString", title: "Reviews" }),
        defineField({ name: "faqs", type: "localizedString", title: "FAQs" }),
        defineField({ name: "contact", type: "localizedString", title: "Contact" }),
      ],
    }),
    defineField({
      name: "logo",
      title: "Logo Image",
      type: "image",
      options: { hotspot: false },
    }),
  ],
  preview: { prepare: () => ({ title: "Header" }) },
});
