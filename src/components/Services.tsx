import { getTranslations } from "next-intl/server";

const CATEGORIES = ["Identity", "Digital", "Growth"];

type ServiceItem = {
  title: string;
  description: string;
  tags: string[];
};

export default async function Services() {
  const t = await getTranslations("Services");
  const items = t.raw("items") as ServiceItem[];

  return (
    <div className="svc-wrap" id="services">
      <section className="svc-section">

        {/* ── Header ─────────────────────────────────────── */}
        <header className="svc-head">
          <div className="svc-head-left">

            {/* Eyebrow pill */}
            <div className="svc-eyebrow" role="doc-subtitle">
              <span className="svc-led" aria-hidden="true" />
              <span>02 · {t("badge")}</span>
            </div>

            {/* Title */}
            <h2 className="svc-title">
              {t("heading")}
            </h2>
          </div>

          {/* Meta */}
          <p className="svc-meta">
            {t("description")}
          </p>
        </header>

        {/* ── Cards grid ─────────────────────────────────── */}
        <div className="svc-grid">
          {items.map((item, i) => (
            <article key={i} className="svc-card svc-card--green">
              {/* Corner warm-light beam */}
              <span className="svc-beam" aria-hidden="true" />

              {/* Card header: num / category + arrow */}
              <div className="svc-card-head">
                <span className="svc-num">
                  0{i + 1} / {CATEGORIES[i]}
                </span>
                <span className="svc-arrow" aria-hidden="true">↗</span>
              </div>

              {/* Service name */}
              <h3 className="svc-name">
                <em className="svc-name-it">{item.title}</em>
              </h3>

              {/* Description */}
              <p className="svc-copy">{item.description}</p>

              {/* Tags */}
              <div className="svc-foot">
                {item.tags.map((tag, j) => (
                  <span key={j} className="svc-chip">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

      </section>
    </div>
  );
}
