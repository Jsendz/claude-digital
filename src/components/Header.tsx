"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const LanguageSwitcher = dynamic(() => import("./LanguageSwitcher"), { ssr: false });
import type { HeaderContent } from "@/sanity/lib/types";

const FALLBACK_NAV = {
  home: "Home", services: "Services", benefits: "Benefits", work: "Work",
  pricing: "Pricing", reviews: "Reviews", faqs: "FAQs", contact: "Contact",
};

export default function Header({ content, locale }: { content: HeaderContent | null; locale: string }) {
  const menu = content?.menu ?? "Menu";
  const close = content?.close ?? "Close";
  const nav = content?.nav ?? FALLBACK_NAV;
  const logoUrl = content?.logoUrl ?? null;

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: nav.home, href: locale === "en" ? "/" : `/${locale}` },
    { label: nav.services, href: locale === "en" ? "/web-design" : `/${locale}/web-design` },
    { label: nav.benefits, href: "#benefits" },
    { label: nav.work, href: "#work" },
    { label: nav.pricing, href: "#pricing" },
    { label: nav.reviews, href: "#reviews" },
    { label: nav.faqs, href: "#faqs" },
    { label: nav.contact, href: "#contact" },
  ];

  return (
    <>
      <header className={`sticky top-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-12 pt-6 pb-2 transition-colors duration-300 ${scrolled ? "bg-white shadow-sm" : "bg-transparent"}`}>
        <div className="flex flex-row items-center">
          <a href={locale === "en" ? "/" : `/${locale}`} className="text-xl font-bold text-foreground relative z-60 mr-2 md:mr-6">
            <Image
              src={logoUrl ?? "/images/lumiqblack.svg"}
              alt="Lumiq"
              width={120}
              height={48}
              className="h-8 md:h-12 w-auto"
              unoptimized={!!logoUrl}
            />
          </a>
          <LanguageSwitcher locale={locale} />
        </div>
        <div className="relative z-60 flex items-center gap-3">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2 bg-foreground text-white px-3 sm:px-5 py-2.5 rounded-full text-sm font-medium hover:bg-card-dark transition-colors"
          >
            {menuOpen ? close : menu}
            <span className="text-lg leading-none">{menuOpen ? "×" : "+"}</span>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-55 bg-black/60 transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMenuOpen(false)}
      />

      <nav className={`fixed top-0 right-0 z-55 h-screen w-full max-w-md bg-white rounded-l-2xl shadow-2xl transition-transform duration-500 ease-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col justify-center h-full px-10 pt-20">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={() => setMenuOpen(false)} className="block py-3 text-2xl font-medium text-foreground hover:text-accent transition-colors border-b border-gray-100">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-10 rounded-xl overflow-hidden">
            <div className="w-full h-48 bg-linear-to-br from-accent to-orange-300 rounded-xl flex items-center justify-center">
              <Image
              src={logoUrl ?? "/images/lumiqblack.svg"}
              alt="Lumiq"
              width={120}
              height={48}
              className="h-12 w-auto"
              unoptimized={!!logoUrl}
            />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
