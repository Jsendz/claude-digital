import { defineField, defineType } from "sanity";

export const pricingSection = defineType({
  name: "pricingSection",
  title: "Pricing Section",
  type: "document",
  fields: [
    defineField({ name: "badge", title: "Badge Text", type: "localizedString" }),
    defineField({ name: "heading", title: "Heading", type: "localizedString" }),
    defineField({ name: "cta", title: "CTA Button Label", type: "localizedString" }),
    defineField({
      name: "steps",
      title: "How It Works Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "localizedString" }),
            defineField({ name: "description", title: "Description", type: "localizedText" }),
          ],
          preview: { select: { title: "title.en" } },
        },
      ],
    }),
    defineField({
      name: "plans",
      title: "Pricing Plans",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name", title: "Plan Name", type: "localizedString" }),
            defineField({ name: "description", title: "Description", type: "localizedText" }),
            defineField({ name: "price", title: "Price (e.g. $5K)", type: "string" }),
            defineField({ name: "period", title: "Period (e.g. /mo)", type: "string" }),
            defineField({ name: "devAddon", title: "Dev Add-on Label", type: "localizedString" }),
            defineField({ name: "dark", title: "Dark Background", type: "boolean", initialValue: false }),
            defineField({
              name: "features",
              title: "Features",
              type: "object",
              fields: [
                defineField({ name: "en", title: "English", type: "array", of: [{ type: "string" }] }),
                defineField({ name: "es", title: "Spanish", type: "array", of: [{ type: "string" }] }),
                defineField({ name: "fr", title: "French", type: "array", of: [{ type: "string" }] }),
                defineField({ name: "ca", title: "Catalan", type: "array", of: [{ type: "string" }] }),
              ],
            }),
          ],
          preview: { select: { title: "name.en", subtitle: "price" } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Pricing Section" }) },
});
