import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WebDesignServicePage from "@/components/WebDesignServicePage";

export const metadata: Metadata = {
  title: "Web Design & Development for Small Businesses — JH Digital",
  description:
    "Custom websites for small businesses that convert visitors into clients. Get a free, no-commitment website audit.",
};

export default async function WebDesignPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <WebDesignServicePage />
      </main>
      <Footer />
    </>
  );
}
