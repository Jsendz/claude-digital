type CTAContent = {
  eyebrow: string; eyebrowSub: string;
  titleLine1: string; titleLine2: string; titleEm: string;
  sub: string; button: string; stat: string;
};

const CONTENT: Record<string, CTAContent> = {
  en: {
    eyebrow: "06 · NEXT", eyebrowSub: "Let's begin",
    titleLine1: "Got something worth", titleLine2: "bringing to", titleEm: "light?",
    sub: "",
    button: "Start a project", stat: "",
  },
  es: {
    eyebrow: "06 · SIGUIENTE", eyebrowSub: "Empecemos",
    titleLine1: "¿Tienes algo que vale", titleLine2: "la pena sacar a la", titleEm: "luz?",
    sub: "",
    button: "Iniciar un proyecto", stat: "",
  },
  fr: {
    eyebrow: "06 · SUITE", eyebrowSub: "Commençons",
    titleLine1: "Vous avez quelque chose qui mérite", titleLine2: "d'être mis en", titleEm: "lumière ?",
    sub: "",
    button: "Lancer un projet", stat: "",
  },
  ca: {
    eyebrow: "06 · SEGÜENT", eyebrowSub: "Comencem",
    titleLine1: "Tens alguna cosa que val la pena", titleLine2: "treure a la", titleEm: "llum?",
    sub: "",
    button: "Iniciar un projecte", stat: "",
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
