"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  const navigation = [
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.benefits"), href: "#benefits" },
    { label: t("nav.work"), href: "#work" },
    { label: t("nav.pricing"), href: "#pricing" },
    { label: t("nav.reviews"), href: "#reviews" },
    { label: t("nav.faqs"), href: "#faqs" },
  ];

  const resources = [
    { label: t("resources.privacy"), href: "#" },
    { label: t("resources.terms"), href: "#" },
  ];

  const socials = [
    { label: t("socials.twitter"), href: "#" },
    { label: t("socials.linkedin"), href: "#" },
    { label: t("socials.youtube"), href: "#" },
  ];

  return (
    <footer className="bg-foreground text-white px-6 md:px-12 lg:px-16 py-16">
      <div className="max-w-335 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-3">{t("newsletterTitle")}</h3>
            <p className="text-gray-400 text-sm mb-6">{t("newsletterDesc")}</p>
            <div className="flex items-center bg-white/10 rounded-full pr-1 pl-4">
              <input
                type="email"
                placeholder={t("newsletterPlaceholder")}
                className="bg-transparent text-white text-sm placeholder:text-gray-500 flex-1 py-3 focus:outline-none"
              />
              <button className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-accent-hover transition-colors shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">{t("navLabel")}</p>
            <ul className="space-y-2.5">
              {navigation.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">{t("resourcesLabel")}</p>
            <ul className="space-y-2.5">
              {resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">{t("socialsLabel")}</p>
            <ul className="space-y-2.5">
              {socials.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">{t("copyright")}</p>
          <p className="text-xs text-gray-500">{t("builtWith")}</p>
        </div>
      </div>
    </footer>
  );
}
