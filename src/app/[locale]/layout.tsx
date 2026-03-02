import type { Metadata } from "next";
import { Expletus_Sans, Montserrat } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import "../globals.css";

const BASE_URL = "https://jhdigitalservices.com";

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

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "JH Digital — Branding, Web Design & Marketing",
    template: "%s | JH Digital",
  },
  description:
    "We help businesses increase trust, stand out, and generate qualified leads with a sharp brand, a high-performance website, and conversion-focused marketing.",
  openGraph: {
    siteName: "JH Digital",
    type: "website",
    images: [
      {
        url: "/images/logojh2.png",
        width: 300,
        height: 300,
        alt: "JH Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@jhdigital",
    images: ["/images/logojh2.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "es" },
    { locale: "fr" },
    { locale: "ca" },
  ];
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "JH Digital",
  url: BASE_URL,
  logo: `${BASE_URL}/images/logojh2.png`,
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@jhdigitalservices.com",
    contactType: "customer service",
  },
  sameAs: [
    "https://twitter.com/jhdigital",
    "https://www.linkedin.com/company/jhdigital",
  ],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${expletusSans.variable} ${montserrat.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
