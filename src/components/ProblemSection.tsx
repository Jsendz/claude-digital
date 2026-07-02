import { getTranslations } from "next-intl/server";

const ICONS = [
  (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="7" />
      <path d="M20 20l-3.5-3.5" />
      <path d="M10.5 7.5a2 2 0 0 1 1 3.7c-.6.3-1 .8-1 1.3" />
      <circle cx="10.5" cy="14.5" r=".5" fill="currentColor" stroke="none" />
    </svg>
  ),
  (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 7h18" />
      <line x1="12" y1="7" x2="12" y2="21" />
      <path d="M7.5 10.5 Q5.5 15 7.5 19.5" />
      <path d="M16.5 10.5 Q18.5 15 16.5 19.5" />
    </svg>
  ),
  (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <circle cx="12" cy="18.5" r="1" />
      <line x1="9" y1="7" x2="15" y2="7" strokeDasharray="1.5 2" />
      <line x1="9" y1="10.5" x2="15" y2="10.5" strokeDasharray="1.5 2" />
      <line x1="9" y1="14" x2="13" y2="14" strokeDasharray="1.5 2" />
    </svg>
  ),
];

type CardData = {
  num: string;
  headline_before: string;
  headline_italic: string;
  headline_after: string;
  body: string;
  tag: string;
};

export default async function ProblemSection() {
  const t = await getTranslations("Problem");
  const cards = t.raw("cards") as CardData[];

  return (
    <div className="prob-wrap" id="problem">
      <div className="prob-grain" aria-hidden="true" />
      <div className="prob-hairline" aria-hidden="true" />

      <section className="prob-section">
        <header className="prob-head" data-reveal>
          <div className="prob-eyebrow" role="doc-subtitle">
            <span className="prob-led" aria-hidden="true" />
            <span>{t("eyebrow")}</span>
            <span className="prob-eyebrow-sep" aria-hidden="true">·</span>
            <span>{t("eyebrow_sub")}</span>
          </div>

          <h2 className="prob-title">
            {t("title_before")}
            <br />
            <em className="prob-title-em">{t("title_em")}</em> {t("title_after")}
          </h2>

          <p className="prob-lede">
            {t("lede")}{" "}
            <span className="prob-lede-em">{t("lede_em")}</span>
          </p>
        </header>

        <div className="prob-grid">
          {cards.map((card, i) => (
            <article key={i} className="prob-card" data-reveal data-delay={String(i + 1)}>
              <div className="prob-card-img" aria-hidden="true" />
              <span className="prob-card-num" aria-hidden="true">{card.num}</span>

              <div className="prob-icon">{ICONS[i]}</div>

              <div className="prob-card-content">
                <h3 className="prob-card-h3">
                  {card.headline_before}
                  <em className="prob-card-h3-em">{card.headline_italic}</em>
                  {card.headline_after}
                </h3>

                <p className="prob-card-body">{card.body}</p>

                <div className="prob-card-foot">
                  <span className="prob-card-dot" aria-hidden="true" />
                  <span>{card.tag}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
