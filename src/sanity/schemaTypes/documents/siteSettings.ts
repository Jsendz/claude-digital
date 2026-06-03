import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings & SEO",
  type: "document",
  fields: [
    defineField({
      name: "metaHome",
      title: "Homepage SEO",
      type: "object",
      fields: [
        defineField({ name: "title", type: "localizedString", title: "Title" }),
        defineField({ name: "description", type: "localizedText", title: "Description" }),
        defineField({ name: "keywords", type: "localizedString", title: "Keywords" }),
      ],
    }),
    defineField({
      name: "metaWebDesign",
      title: "Web Design Page SEO",
      type: "object",
      fields: [
        defineField({ name: "title", type: "localizedString", title: "Title" }),
        defineField({ name: "description", type: "localizedText", title: "Description" }),
        defineField({ name: "keywords", type: "localizedString", title: "Keywords" }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Site Settings & SEO" }) },
});
