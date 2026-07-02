import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes, singletonTypes } from "./src/sanity/schemaTypes";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  name: "jh-digital",
  title: "Lumiq Studios CMS",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem().title("Header").id("headerSection").child(
              S.document().schemaType("headerSection").documentId("headerSection")
            ),
            S.listItem().title("Hero Section").id("heroSection").child(
              S.document().schemaType("heroSection").documentId("heroSection")
            ),
            S.listItem().title("Services Section").id("servicesSection").child(
              S.document().schemaType("servicesSection").documentId("servicesSection")
            ),
            S.listItem().title("Benefits Section").id("benefitsSection").child(
              S.document().schemaType("benefitsSection").documentId("benefitsSection")
            ),
            S.listItem().title("Work Section").id("workSection").child(
              S.document().schemaType("workSection").documentId("workSection")
            ),
            S.listItem().title("Pricing Section").id("pricingSection").child(
              S.document().schemaType("pricingSection").documentId("pricingSection")
            ),
            S.listItem().title("Reviews Section").id("reviewsSection").child(
              S.document().schemaType("reviewsSection").documentId("reviewsSection")
            ),
            S.listItem().title("FAQ Section").id("faqSection").child(
              S.document().schemaType("faqSection").documentId("faqSection")
            ),
            S.listItem().title("Contact Section").id("contactSection").child(
              S.document().schemaType("contactSection").documentId("contactSection")
            ),
            S.listItem().title("Footer").id("footerSection").child(
              S.document().schemaType("footerSection").documentId("footerSection")
            ),
            S.divider(),
            S.listItem().title("Web Design Page").id("webDesignPage").child(
              S.document().schemaType("webDesignPage").documentId("webDesignPage")
            ),
            S.divider(),
            S.listItem().title("Site Settings & SEO").id("siteSettings").child(
              S.document().schemaType("siteSettings").documentId("siteSettings")
            ),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.includes(schemaType)),
  },
  document: {
    actions: (input, context) =>
      singletonTypes.includes(context.schemaType)
        ? input.filter(({ action }) => action && ["publish", "discardChanges", "restore"].includes(action))
        : input,
  },
});
