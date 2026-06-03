import { defineField, defineType } from "sanity";

export const localizedString = defineType({
  name: "localizedString",
  title: "Localized String",
  type: "object",
  options: { collapsible: true, collapsed: false },
  fields: [
    defineField({ name: "en", title: "English", type: "string" }),
    defineField({ name: "es", title: "Spanish", type: "string" }),
    defineField({ name: "fr", title: "French", type: "string" }),
    defineField({ name: "ca", title: "Catalan", type: "string" }),
  ],
});
