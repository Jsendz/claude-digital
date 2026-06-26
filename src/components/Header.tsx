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
  const [openKey, setOpenKey] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: nav.home, href: locale === "en" ? "/" : `/${locale}` },
    { label: nav.services, href: locale === "en" ? "/web-design" : `/${locale}/web-design` },
    { label: nav.contact, href: "#contact" },
  ];

  function openMenu() {
    setMenuOpen(true);
    setOpenKey((k) => k + 1);
  }

  return (
    <>
      <style>{`
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>

      <header className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-12 pt-6 pb-2 transition-all duration-300 ${scrolled ? "bg-white shadow-sm" : "bg-transparent"}`}>
        <div className="flex flex-row items-center">
          <a href={locale === "en" ? "/" : `/${locale}`} className="text-xl font-bold text-foreground relative z-60 mr-2 md:mr-6">
            <Image
              src={logoUrl ?? "/images/lumiqblack.svg"}
              alt="Lumiq"
              width={120}
              height={48}
              className={`h-8 md:h-12 w-auto transition-all duration-300 ${!scrolled ? "brightness-0 invert" : ""}`}
              unoptimized={!!logoUrl}
            />
          </a>
          <LanguageSwitcher locale={locale} transparent={!scrolled} />
        </div>
        <div className="relative z-60 flex items-center gap-3">
          <button
            onClick={() => (menuOpen ? setMenuOpen(false) : openMenu())}
            className={`flex items-center gap-2 px-3 sm:px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${scrolled ? "bg-foreground text-white hover:bg-card-dark" : "bg-white/10 text-white border border-white/25 hover:bg-white/20 backdrop-blur-sm"}`}
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
        <div className="flex flex-col justify-between h-full px-10 pt-24 pb-10">
          <ul key={openKey} className="space-y-2">
            {navLinks.map((link, i) => (
              <li
                key={link.label}
                style={{
                  opacity: 0,
                  animation: menuOpen ? `fadeInRight 0.45s cubic-bezier(0.25,0.46,0.45,0.94) forwards` : "none",
                  animationDelay: menuOpen ? `${0.15 + i * 0.1}s` : "0s",
                }}
              >
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-4 text-5xl font-medium text-foreground hover:text-accent transition-colors border-b border-gray-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="rounded-xl overflow-hidden">
            <div className="w-full h-40 bg-linear-to-br from-accent to-orange-300 rounded-xl flex items-center justify-center">
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
