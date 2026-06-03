import { defineField, defineType } from "sanity";

export const contactSection = defineType({
  name: "contactSection",
  title: "Contact Section",
  type: "document",
  fields: [
    defineField({ name: "badge", title: "Badge Text", type: "localizedString" }),
    defineField({ name: "heading", title: "Heading", type: "localizedString" }),
    defineField({ name: "description", title: "Description", type: "localizedText" }),
    defineField({ name: "chatToSales", title: "Chat To Sales Label", type: "localizedString" }),
    defineField({ name: "callUs", title: "Call Us Label", type: "localizedString" }),
    defineField({ name: "formName", title: "Name Field Label", type: "localizedString" }),
    defineField({ name: "formNamePlaceholder", title: "Name Placeholder", type: "localizedString" }),
    defineField({ name: "formEmail", title: "Email Field Label", type: "localizedString" }),
    defineField({ name: "formEmailPlaceholder", title: "Email Placeholder", type: "localizedString" }),
    defineField({ name: "formWebsite", title: "Website Field Label", type: "localizedString" }),
    defineField({ name: "formWebsitePlaceholder", title: "Website Placeholder", type: "localizedString" }),
    defineField({ name: "formMessage", title: "Message Field Label", type: "localizedString" }),
    defineField({ name: "formMessagePlaceholder", title: "Message Placeholder", type: "localizedString" }),
    defineField({ name: "formSubmit", title: "Submit Button", type: "localizedString" }),
    defineField({ name: "formSending", title: "Sending State Label", type: "localizedString" }),
    defineField({ name: "formSuccessTitle", title: "Success Title", type: "localizedString" }),
    defineField({ name: "formSuccessDesc", title: "Success Description", type: "localizedText" }),
    defineField({ name: "formSuccessReset", title: "Reset Button Label", type: "localizedString" }),
    defineField({ name: "formError", title: "Error Message", type: "localizedText" }),
  ],
  preview: { prepare: () => ({ title: "Contact Section" }) },
});
