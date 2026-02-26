"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/navigation";
import { routing } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("LanguageSwitcher");

  const handleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-0.5">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => handleChange(loc)}
          className={`text-xs font-semibold px-2 py-1 rounded-md transition-colors ${
            locale === loc
              ? "bg-foreground text-white"
              : "text-foreground/50 hover:text-foreground"
          }`}
          aria-label={`Switch to ${loc.toUpperCase()}`}
        >
          {t(loc)}
        </button>
      ))}
    </div>
  );
}
