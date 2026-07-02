import type { Metadata } from "next";
import { Expletus_Sans, Montserrat, Instrument_Serif, JetBrains_Mono, Inter } from "next/font/google";
import { setRequestLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getHeaderContent, getFooterContent } from "@/sanity/lib/queries";
import { ModalProvider } from "@/context/ModalContext";
import { AuditModal } from "@/components/AuditModal";
import ScrollReveal from "@/components/ScrollReveal";
import "../globals.css";

const BASE_URL = "https://lumiqstudios.com";

const expletusSans = Expletus_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: "%s | Lumiq Studios",
    default: "Lumiq Studios — Branding & Web Design Studio",
  },
  description:
    "We help businesses increase trust, stand out, and generate qualified leads with a sharp brand, a high-performance website, and conversion-focused marketing.",
  openGraph: {
    siteName: "JH Digital",
    type: "website",
    images: [{ url: "/images/favi.png", width: 300, height: 300, alt: "JH Digital" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@jhdigital",
    images: ["/images/favi.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  verification: { google: "AmrRoJmkNSS0edy_O35h1OeXJsp_lG5zzUV4Eu87BFs" },
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }, { locale: "fr" }, { locale: "ca" }];
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Lumiq Studios",
  url: BASE_URL,
  description: "Lumiq Studios is an independent studio building brand identities, web design, and marketing for ambitious teams.",
  logo: { "@type": "ImageObject", url: `${BASE_URL}/images/logo-lumiq.svg` },
  contactPoint: { "@type": "ContactPoint", email: "hello@lumiq.studio", contactType: "customer service" },
  sameAs: ["https://twitter.com/jhdigital"],
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Lumiq Studios",
  url: BASE_URL,
  description: "Lumiq Studios is an independent studio building brand identities, web design, and marketing for ambitious teams.",
  logo: { "@type": "ImageObject", url: `${BASE_URL}/images/logo-lumiq.svg` },
  email: "hello@lumiq.studio",
  sameAs: ["https://twitter.com/jhdigital"],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5", bestRating: "5", worstRating: "1", reviewCount: "4" },
};

const webSiteSchema = { "@context": "https://schema.org", "@type": "WebSite", name: "Lumiq Studios", url: BASE_URL };

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const [headerContent, footerContent, messages] = await Promise.all([
    getHeaderContent(locale),
    getFooterContent(locale),
    getMessages(),
  ]);

  return (
    <html lang={locale}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }} />
      </head>
      <body className={`${expletusSans.variable} ${montserrat.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} ${inter.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <ModalProvider>
            <Header content={headerContent} locale={locale} />
            {children}
            <Footer locale={locale} content={footerContent} />
            <AuditModal />
            <ScrollReveal />
          </ModalProvider>
        </NextIntlClientProvider>
        <Script
          id="vtag-ai-js"
          src="https://r2.leadsy.ai/tag.js"
          data-pid="DsLeeJ2HIppzeyHX"
          data-version="062024"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
