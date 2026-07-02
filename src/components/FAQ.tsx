import { getTranslations } from "next-intl/server";

type FAQItem = { question: string; answer: string };

export default async function FAQ() {
  const t = await getTranslations("FAQ");
  const items = t.raw("items") as FAQItem[];

  return (
    <section className="faq-section">
      <div className="glow br very-faint" />
      <div className="faq-inner">
        <header className="sec-head" data-reveal>
          <div className="sec-head-left">
            <div className="eyebrow">
              <span className="led" />
              <span>05 · {t("badge")}</span>
              <span className="esep">/</span>
              <span>{t("heading")}</span>
            </div>
            <h2 className="sec-title">
              {t("heading")}
            </h2>
          </div>
        </header>

        <div className="faq-wrap">
          {items.map((item, i) => (
            <details key={i} className="faq-item" data-reveal data-delay={String(Math.min(i + 1, 9))} open={i === 0 || undefined}>
              <summary>
                <span className="faq-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="faq-q">{item.question}</span>
                <span className="faq-toggle">+</span>
              </summary>
              <p className="faq-ans">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
