import { defineField, defineType } from "sanity";

export const webDesignPage = defineType({
  name: "webDesignPage",
  title: "Web Design Page",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        defineField({ name: "badge", type: "localizedString", title: "Badge" }),
        defineField({ name: "heading1", type: "localizedString", title: "Heading Line 1" }),
        defineField({ name: "headingAccent", type: "localizedString", title: "Heading Accent" }),
        defineField({ name: "paragraph", type: "localizedText", title: "Paragraph" }),
        defineField({ name: "cta1", type: "localizedString", title: "Primary CTA" }),
        defineField({ name: "cta2", type: "localizedString", title: "Secondary CTA" }),
        defineField({ name: "noPressure", type: "localizedText", title: "No Pressure Text" }),
        defineField({ name: "trustCount", type: "localizedString", title: "Trust Count" }),
        defineField({ name: "trustSub", type: "localizedString", title: "Trust Subtitle" }),
      ],
    }),
    defineField({
      name: "problem",
      title: "Problem Section",
      type: "object",
      fields: [
        defineField({ name: "badge", type: "localizedString", title: "Badge" }),
        defineField({ name: "heading", type: "localizedString", title: "Heading" }),
        defineField({
          name: "items",
          title: "Problem Items",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "title", type: "localizedString", title: "Title" }),
                defineField({ name: "body", type: "localizedText", title: "Body" }),
              ],
              preview: { select: { title: "title.en" } },
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "solution",
      title: "Solution Section",
      type: "object",
      fields: [
        defineField({ name: "badge", type: "localizedString", title: "Badge" }),
        defineField({ name: "heading", type: "localizedString", title: "Heading" }),
        defineField({ name: "p1", type: "localizedText", title: "Paragraph 1" }),
        defineField({ name: "p2", type: "localizedText", title: "Paragraph 2" }),
        defineField({
          name: "pillars",
          title: "Pillars",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "title", type: "localizedString", title: "Title" }),
                defineField({ name: "body", type: "localizedText", title: "Body" }),
              ],
              preview: { select: { title: "title.en" } },
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "deliverables",
      title: "Deliverables Section",
      type: "object",
      fields: [
        defineField({ name: "badge", type: "localizedString", title: "Badge" }),
        defineField({ name: "heading", type: "localizedString", title: "Heading" }),
        defineField({ name: "subtext", type: "localizedText", title: "Subtext" }),
        defineField({
          name: "items",
          title: "Deliverable Items",
          type: "object",
          fields: [
            defineField({ name: "en", type: "array", of: [{ type: "string" }], title: "English" }),
            defineField({ name: "es", type: "array", of: [{ type: "string" }], title: "Spanish" }),
            defineField({ name: "fr", type: "array", of: [{ type: "string" }], title: "French" }),
            defineField({ name: "ca", type: "array", of: [{ type: "string" }], title: "Catalan" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "outcomes",
      title: "Outcomes Section",
      type: "object",
      fields: [
        defineField({ name: "badge", type: "localizedString", title: "Badge" }),
        defineField({ name: "heading", type: "localizedString", title: "Heading" }),
        defineField({
          name: "items",
          title: "Outcome Items",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "title", type: "localizedString", title: "Title" }),
                defineField({ name: "body", type: "localizedText", title: "Body" }),
              ],
              preview: { select: { title: "title.en" } },
            },
          ],
        }),
        defineField({ name: "ctaTitle", type: "localizedString", title: "CTA Title" }),
        defineField({ name: "ctaDesc", type: "localizedText", title: "CTA Description" }),
        defineField({ name: "ctaButton", type: "localizedString", title: "CTA Button" }),
        defineField({ name: "ctaNoCommitment", type: "localizedString", title: "No Commitment Text" }),
      ],
    }),
    defineField({
      name: "proof",
      title: "Proof Section",
      type: "object",
      fields: [
        defineField({ name: "badge", type: "localizedString", title: "Badge" }),
        defineField({ name: "heading", type: "localizedString", title: "Heading" }),
        defineField({ name: "trustCount", type: "localizedString", title: "Trust Count" }),
        defineField({ name: "trustSub", type: "localizedString", title: "Trust Subtitle" }),
        defineField({ name: "ctaButton", type: "localizedString", title: "CTA Button" }),
        defineField({
          name: "testimonials",
          type: "array",
          title: "Testimonials",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "name", type: "string", title: "Name" }),
                defineField({ name: "role", type: "string", title: "Role" }),
                defineField({ name: "quote", type: "localizedText", title: "Quote" }),
              ],
              preview: { select: { title: "name" } },
            },
          ],
        }),
        defineField({ name: "caseStudyTitle", type: "localizedString", title: "Case Study Title" }),
        defineField({ name: "caseStudyDesc", type: "localizedText", title: "Case Study Description" }),
      ],
    }),
    defineField({
      name: "process",
      title: "Process Section",
      type: "object",
      fields: [
        defineField({ name: "badge", type: "localizedString", title: "Badge" }),
        defineField({ name: "heading", type: "localizedString", title: "Heading" }),
        defineField({ name: "subtext", type: "localizedText", title: "Subtext" }),
        defineField({
          name: "steps",
          type: "array",
          title: "Steps",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "title", type: "localizedString", title: "Title" }),
                defineField({ name: "body", type: "localizedText", title: "Body" }),
              ],
              preview: { select: { title: "title.en" } },
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "faq",
      title: "FAQ Section",
      type: "object",
      fields: [
        defineField({ name: "badge", type: "localizedString", title: "Badge" }),
        defineField({ name: "heading", type: "localizedString", title: "Heading" }),
        defineField({
          name: "items",
          type: "array",
          title: "FAQ Items",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "q", type: "localizedString", title: "Question" }),
                defineField({ name: "a", type: "localizedText", title: "Answer" }),
              ],
              preview: { select: { title: "q.en" } },
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "form",
      title: "Form Section",
      type: "object",
      fields: [
        defineField({ name: "badge", type: "localizedString", title: "Badge" }),
        defineField({ name: "heading", type: "localizedString", title: "Heading" }),
        defineField({ name: "description", type: "localizedText", title: "Description" }),
        defineField({
          name: "checklist",
          type: "object",
          title: "Checklist Items",
          fields: [
            defineField({ name: "en", type: "array", of: [{ type: "string" }], title: "English" }),
            defineField({ name: "es", type: "array", of: [{ type: "string" }], title: "Spanish" }),
            defineField({ name: "fr", type: "array", of: [{ type: "string" }], title: "French" }),
            defineField({ name: "ca", type: "array", of: [{ type: "string" }], title: "Catalan" }),
          ],
        }),
        defineField({ name: "contactLabel", type: "localizedString", title: "Contact Label" }),
        defineField({ name: "nameLbl", type: "localizedString", title: "Name Label" }),
        defineField({ name: "emailLbl", type: "localizedString", title: "Email Label" }),
        defineField({ name: "companyLbl", type: "localizedString", title: "Company Label" }),
        defineField({ name: "websiteLbl", type: "localizedString", title: "Website Label" }),
        defineField({ name: "serviceLbl", type: "localizedString", title: "Service Label" }),
        defineField({ name: "goalLbl", type: "localizedString", title: "Goal Label" }),
        defineField({ name: "namePlaceholder", type: "localizedString", title: "Name Placeholder" }),
        defineField({ name: "emailPlaceholder", type: "localizedString", title: "Email Placeholder" }),
        defineField({ name: "companyPlaceholder", type: "localizedString", title: "Company Placeholder" }),
        defineField({ name: "websitePlaceholder", type: "localizedString", title: "Website Placeholder" }),
        defineField({ name: "goalPlaceholder", type: "localizedString", title: "Goal Placeholder" }),
        defineField({
          name: "serviceOptions",
          type: "object",
          title: "Service Select Options",
          fields: [
            defineField({ name: "defaultOpt", type: "localizedString", title: "Default Option" }),
            defineField({ name: "newWebsite", type: "localizedString", title: "New Website" }),
            defineField({ name: "redesign", type: "localizedString", title: "Redesign" }),
            defineField({ name: "landing", type: "localizedString", title: "Landing Page" }),
            defineField({ name: "ecommerce", type: "localizedString", title: "E-commerce" }),
            defineField({ name: "notSure", type: "localizedString", title: "Not Sure" }),
          ],
        }),
        defineField({ name: "submitButton", type: "localizedString", title: "Submit Button" }),
        defineField({ name: "submitting", type: "localizedString", title: "Submitting Label" }),
        defineField({ name: "noCommitment", type: "localizedText", title: "No Commitment Text" }),
        defineField({ name: "successTitle", type: "localizedString", title: "Success Title" }),
        defineField({ name: "successDesc", type: "localizedText", title: "Success Description" }),
        defineField({ name: "successReset", type: "localizedString", title: "Success Reset Button" }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Web Design Page" }) },
});
