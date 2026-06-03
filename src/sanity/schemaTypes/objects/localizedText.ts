import { defineField, defineType } from "sanity";

export const localizedText = defineType({
  name: "localizedText",
  title: "Localized Text",
  type: "object",
  options: { collapsible: true, collapsed: true },
  fields: [
    defineField({ name: "en", title: "English", type: "text", rows: 3 }),
    defineField({ name: "es", title: "Spanish", type: "text", rows: 3 }),
    defineField({ name: "fr", title: "French", type: "text", rows: 3 }),
    defineField({ name: "ca", title: "Catalan", type: "text", rows: 3 }),
  ],
});
