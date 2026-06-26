"use client";

// Runs client-only (loaded with ssr:false in Header).
// Does not use next-intl hooks — avoids needing NextIntlClientProvider.

const LOCALES = ["en", "es", "fr", "ca"] as const;
const DEFAULT_LOCALE = "en";

function getLocalizedPath(pathname: string, currentLocale: string, targetLocale: string): string {
  // Strip the current locale prefix (if non-default)
  let bare = pathname;
  if (currentLocale !== DEFAULT_LOCALE) {
    bare = pathname.replace(new RegExp(`^/${currentLocale}(?=/|$)`), "") || "/";
  }
  // Add target locale prefix (if non-default)
  return targetLocale === DEFAULT_LOCALE ? bare || "/" : `/${targetLocale}${bare}`;
}

export default function LanguageSwitcher({ locale, transparent = false }: { locale: string; transparent?: boolean }) {
  const handleSwitch = (targetLocale: string) => {
    const newPath = getLocalizedPath(window.location.pathname, locale, targetLocale);
    window.location.href = newPath;
  };

  return (
    <div className="flex items-center gap-0.5">
      {LOCALES.map((loc) => (
        <button
          key={loc}
          onClick={() => handleSwitch(loc)}
          className={`text-xs font-semibold px-1.5 md:px-2 py-1 rounded-md transition-all duration-300 ${
            locale === loc
              ? transparent
                ? "bg-white/20 text-white"
                : "bg-foreground text-white"
              : transparent
                ? "text-white/60 hover:text-white"
                : "text-foreground/50 hover:text-foreground"
          }`}
          aria-label={`Switch to ${loc.toUpperCase()}`}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
