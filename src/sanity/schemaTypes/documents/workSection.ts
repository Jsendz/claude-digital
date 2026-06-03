import { defineField, defineType } from "sanity";

export const workSection = defineType({
  name: "workSection",
  title: "Work Section",
  type: "document",
  fields: [
    defineField({ name: "badge", title: "Badge Text", type: "localizedString" }),
    defineField({ name: "heading", title: "Heading", type: "localizedString" }),
    defineField({ name: "description", title: "Description", type: "localizedText" }),
    defineField({
      name: "projects",
      title: "Projects",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "localizedString" }),
            defineField({ name: "image", title: "Project Image", type: "image", options: { hotspot: true } }),
          ],
          preview: { select: { title: "label.en", media: "image" } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Work Section" }) },
});
