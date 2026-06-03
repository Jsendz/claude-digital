import { defineField, defineType } from "sanity";

export const servicesSection = defineType({
  name: "servicesSection",
  title: "Services Section",
  type: "document",
  fields: [
    defineField({ name: "badge", title: "Badge Text", type: "localizedString" }),
    defineField({ name: "heading", title: "Heading", type: "localizedString" }),
    defineField({ name: "description", title: "Description", type: "localizedText" }),
    defineField({ name: "serviceLabel", title: "Service Label Prefix", type: "localizedString" }),
    defineField({
      name: "items",
      title: "Services",
      type: "array",
      validation: (Rule) => Rule.max(3),
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "localizedString" }),
            defineField({ name: "description", title: "Description", type: "localizedText" }),
            defineField({
              name: "tags",
              title: "Tags",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({ name: "en", title: "English", type: "string" }),
                    defineField({ name: "es", title: "Spanish", type: "string" }),
                    defineField({ name: "fr", title: "French", type: "string" }),
                    defineField({ name: "ca", title: "Catalan", type: "string" }),
                  ],
                  preview: { select: { title: "en" } },
                },
              ],
            }),
            defineField({ name: "image", title: "Card Image", type: "image", options: { hotspot: true } }),
          ],
          preview: { select: { title: "title.en" } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Services Section" }) },
});
