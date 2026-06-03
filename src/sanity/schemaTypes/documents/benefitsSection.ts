import { defineField, defineType } from "sanity";

export const benefitsSection = defineType({
  name: "benefitsSection",
  title: "Benefits Section",
  type: "document",
  fields: [
    defineField({ name: "badge", title: "Badge Text", type: "localizedString" }),
    defineField({ name: "heading", title: "Heading", type: "localizedString" }),
    defineField({ name: "description", title: "Description", type: "localizedText" }),
    defineField({
      name: "items",
      title: "Benefits",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "icon", title: "Icon (emoji)", type: "string" }),
            defineField({ name: "title", title: "Title", type: "localizedString" }),
            defineField({ name: "description", title: "Description", type: "localizedText" }),
          ],
          preview: { select: { title: "title.en", subtitle: "icon" } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Benefits Section" }) },
});
