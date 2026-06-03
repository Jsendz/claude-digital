type CTAContent = {
  eyebrow: string; eyebrowSub: string;
  titleLine1: string; titleLine2: string; titleEm: string;
  sub: string; button: string; stat: string;
};

const CONTENT: Record<string, CTAContent> = {
  en: {
    eyebrow: "06 · NEXT", eyebrowSub: "Let's begin",
    titleLine1: "Got something worth", titleLine2: "bringing to", titleEm: "light?",
    sub: "Booking from Q3 onward. We take four engagements at a time — first conversations are free and frank.",
    button: "Start a project", stat: "2 SLOTS OPEN · Q3 2026",
  },
  es: {
    eyebrow: "06 · SIGUIENTE", eyebrowSub: "Empecemos",
    titleLine1: "¿Tienes algo que vale", titleLine2: "la pena sacar a la", titleEm: "luz?",
    sub: "Reservas a partir del T3. Aceptamos cuatro proyectos a la vez — la primera conversación es gratuita y directa.",
    button: "Iniciar un proyecto", stat: "2 PLAZAS LIBRES · T3 2026",
  },
  fr: {
    eyebrow: "06 · SUITE", eyebrowSub: "Commençons",
    titleLine1: "Vous avez quelque chose qui mérite", titleLine2: "d'être mis en", titleEm: "lumière ?",
    sub: "Réservations à partir du T3. Quatre missions à la fois — la première conversation est gratuite et franche.",
    button: "Lancer un projet", stat: "2 CRÉNEAUX DISPONIBLES · T3 2026",
  },
  ca: {
    eyebrow: "06 · SEGÜENT", eyebrowSub: "Comencem",
    titleLine1: "Tens alguna cosa que val la pena", titleLine2: "treure a la", titleEm: "llum?",
    sub: "Reserves a partir del T3. Acceptem quatre projectes alhora — la primera conversa és gratuïta i directa.",
    button: "Iniciar un projecte", stat: "2 LLOCS DISPONIBLES · T3 2026",
  },
};

export default function CTA({ locale }: { locale: string }) {
  const t = CONTENT[locale] ?? CONTENT.en;

  return (
    <section className="cta-section">
      <div className="cta-block">
        <div className="cta-inner">
          <div className="cta-left">
            <div className="eyebrow orange-inv">
              <span className="led" />
              <span>{t.eyebrow}</span>
              <span className="esep">/</span>
              <span>{t.eyebrowSub}</span>
            </div>
            <h2 className="cta-title">
              {t.titleLine1}
              <br />{t.titleLine2} <span className="em">{t.titleEm}</span>
            </h2>
            <p className="cta-sub">{t.sub}</p>
          </div>

          <div className="cta-actions">
            <a href="#contact" className="btn-light">
              {t.button}
              <span className="btn-arr">→</span>
            </a>
            <div className="cta-stat">
              <span className="led" />
              {t.stat}
            </div>
          </div>
        </div>

        <div className="cta-ghost" aria-hidden="true">
          {locale === "es" ? "luz" : locale === "fr" ? "lumière" : locale === "ca" ? "llum" : "light"}
        </div>
      </div>
    </section>
  );
}
