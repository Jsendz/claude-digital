import { defineField, defineType } from "sanity";

export const faqSection = defineType({
  name: "faqSection",
  title: "FAQ Section",
  type: "document",
  fields: [
    defineField({ name: "badge", title: "Badge Text", type: "localizedString" }),
    defineField({ name: "heading", title: "Heading", type: "localizedString" }),
    defineField({
      name: "items",
      title: "FAQ Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "question", title: "Question", type: "localizedString" }),
            defineField({ name: "answer", title: "Answer", type: "localizedText" }),
          ],
          preview: { select: { title: "question.en" } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "FAQ Section" }) },
});
