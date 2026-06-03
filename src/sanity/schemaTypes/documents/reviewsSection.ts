import { defineField, defineType } from "sanity";

export const reviewsSection = defineType({
  name: "reviewsSection",
  title: "Reviews Section",
  type: "document",
  fields: [
    defineField({ name: "badge", title: "Badge Text", type: "localizedString" }),
    defineField({ name: "heading", title: "Heading", type: "localizedString" }),
    defineField({ name: "trustCount", title: "Trust Count Text", type: "localizedString" }),
    defineField({ name: "trustSub", title: "Trust Subtitle", type: "localizedString" }),
    defineField({ name: "contactUs", title: "Contact Us Button", type: "localizedString" }),
    defineField({ name: "workedWith", title: '"Worked With" Label', type: "localizedString" }),
    defineField({
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name", title: "Name", type: "string" }),
            defineField({ name: "role", title: "Role / Title", type: "string" }),
            defineField({ name: "quote", title: "Quote", type: "localizedText" }),
          ],
          preview: { select: { title: "name", subtitle: "role" } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Reviews Section" }) },
});
