"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const t = useTranslations("Header");
  const locale = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { label: t("nav.home"), href: `/${locale}` },
    { label: t("nav.services"), href: `/${locale}/web-design` },
    { label: t("nav.benefits"), href: "#benefits" },
    { label: t("nav.work"), href: "#work" },
    { label: t("nav.pricing"), href: "#pricing" },
    { label: t("nav.reviews"), href: "#reviews" },
    { label: t("nav.faqs"), href: "#faqs" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="flex flex-row justify-around">
        <a href={locale === "en" ? "/" : `/${locale}`} className="text-xl font-bold text-foreground relative z-60 mr-6">
          <Image src="/images/logojh2.png" alt="JH Digital" width={120} height={48} className="h-12 w-auto" />
        </a>

          <LanguageSwitcher />
          </div>
        <div className="relative z-60 flex items-center gap-3">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2 bg-foreground text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#0a3d1a] transition-colors"
          >
            {menuOpen ? t("close") : t("menu")}
            <span className="text-lg leading-none">{menuOpen ? "×" : "+"}</span>
          </button>
        </div>
      </header>

      {/* Menu overlay */}
      <div
        className={`fixed inset-0 z-55 bg-black/60 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <nav
        className={`fixed top-0 right-0 z-55 h-screen w-full max-w-md bg-white rounded-l-2xl shadow-2xl transition-transform duration-500 ease-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col justify-center h-full px-10 pt-20">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-2xl font-medium text-foreground hover:text-accent transition-colors border-b border-gray-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-xl overflow-hidden">
            <div className="w-full h-48 bg-linear-to-br from-accent to-orange-300 rounded-xl flex items-center justify-center">
              <span className="text-white text-lg font-bold">JH Digital</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
