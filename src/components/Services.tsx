import { getServicesContent } from "@/sanity/lib/queries";

const CATEGORIES = ["Identity", "Digital", "Growth"];

const FALLBACK_TAGS = [
  ["Naming", "Logo", "Mark", "Type", "Guidelines", "Tone of voice"],
  ["UX · UI", "Prototyping", "Webflow", "CMS"],
  ["Campaigns", "Content", "Social", "Paid", "SEO"],
];

// plain: prefix text (non-italic), italic: the emphasis word
const FALLBACK_TITLES: { plain: string; italic: string }[] = [
  { plain: "",     italic: "Branding"  },
  { plain: "Web ", italic: "design"    },
  { plain: "",     italic: "Marketing" },
];

const FALLBACK_DESCRIPTIONS = [
  "Names, marks, type, and a full visual language built to age well. We design identities as systems — so every touchpoint stays on key as the brand scales.",
  "Considered, fast, accessible sites. From single-page launches to full design systems and CMS integrations — built to convert and last.",
  "Campaigns, content, and performance work that gets your brand in front of the right audience — and keeps it there.",
];

export default async function Services({ locale }: { locale: string }) {
  const content = await getServicesContent(locale);
  const badge = content?.badge ?? "Services";

  const services = content?.items?.length
    ? content.items.map((item, i) => ({
        num: `0${i + 1}`,
        category: CATEGORIES[i] ?? CATEGORIES[0],
        title: FALLBACK_TITLES[i] ?? { plain: "", italic: item.title },
        description: item.description,
        tags: item.tags?.length ? item.tags : (FALLBACK_TAGS[i] ?? []),
        dark: i === 1,
      }))
    : FALLBACK_TITLES.map((title, i) => ({
        num: `0${i + 1}`,
        category: CATEGORIES[i],
        title,
        description: FALLBACK_DESCRIPTIONS[i],
        tags: FALLBACK_TAGS[i],
        dark: i === 1,
      }));

  return (
    <div className="svc-wrap" id="services">
      <section className="svc-section">

        {/* ── Header ─────────────────────────────────────── */}
        <header className="svc-head">
          <div className="svc-head-left">

            {/* Eyebrow pill */}
            <div className="svc-eyebrow" role="doc-subtitle">
              <span className="svc-led" aria-hidden="true" />
              <span>02 · {badge}</span>
              <span className="svc-sep" aria-hidden="true">/</span>
              <span>What we do</span>
            </div>

            {/* Title */}
            <h2 className="svc-title">
              Crafted for brands
              <br />
              that want to be{" "}
              <em className="svc-title-em">seen.</em>
            </h2>
          </div>

          {/* Meta — hidden below 541px via CSS */}
          <p className="svc-meta">
            <strong>Three disciplines.</strong>
            <br />
            One studio, one team.
            <br />
            End-to-end engagements from strategy to launch.
          </p>
        </header>

        {/* ── Cards grid ─────────────────────────────────── */}
        <div className="svc-grid">
          {services.map((service, i) => (
            <article
              key={i}
              className={`svc-card${service.dark ? " svc-card--green" : ""}`}
            >
              {/* Corner warm-light beam */}
              <span className="svc-beam" aria-hidden="true" />

              {/* Card header: num / category + arrow */}
              <div className="svc-card-head">
                <span className="svc-num">
                  {service.num} / {service.category}
                </span>
                <span className="svc-arrow" aria-hidden="true">↗</span>
              </div>

              {/* Service name */}
              <h3 className="svc-name">
                {service.title.plain && (
                  <span>{service.title.plain}</span>
                )}
                <em className="svc-name-it">{service.title.italic}</em>
              </h3>

              {/* Description */}
              <p className="svc-copy">{service.description}</p>

              {/* Tags */}
              <div className="svc-foot">
                {service.tags.map((tag, j) => (
                  <span key={j} className="svc-chip">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* ── Footer strip ───────────────────────────────── */}
        <div className="svc-footstrip">
          <p className="svc-footcaption">
            Need a custom engagement? / Hybrid teams welcome.
          </p>
          <a href="#contact" className="svc-more">
            View capabilities deck
            <span className="svc-arr" aria-hidden="true">→</span>
          </a>
        </div>

      </section>
    </div>
  );
}
