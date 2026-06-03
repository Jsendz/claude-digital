import { defineField, defineType } from "sanity";

export const heroSection = defineType({
  name: "heroSection",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({ name: "badge", title: "Badge Text", type: "localizedString" }),
    defineField({ name: "heading1", title: "Heading Line 1", type: "localizedString" }),
    defineField({ name: "heading2", title: "Heading Line 2", type: "localizedString" }),
    defineField({ name: "headingAccent", title: "Heading Accent Word", type: "localizedString" }),
    defineField({ name: "paragraph", title: "Paragraph", type: "localizedText" }),
    defineField({ name: "cta1", title: "Primary CTA Label", type: "localizedString" }),
    defineField({ name: "cta2", title: "Secondary CTA Label", type: "localizedString" }),
    defineField({ name: "trustCount", title: "Trust Count Text", type: "localizedString" }),
    defineField({ name: "trustSub", title: "Trust Subtitle", type: "localizedString" }),
    defineField({
      name: "images",
      title: "Gallery Images (max 6)",
      type: "array",
      validation: (Rule) => Rule.max(6),
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
            defineField({ name: "alt", title: "Alt Text", type: "string" }),
            defineField({ name: "showBadge", title: 'Show "NEW!" Badge', type: "boolean", initialValue: false }),
          ],
          preview: { select: { title: "alt", media: "image" } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Hero Section" }) },
});
