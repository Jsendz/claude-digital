import type { FAQContent } from "@/sanity/lib/types";

const FALLBACK_ITEMS = [
  {
    num: "01",
    q: ["How long does a ", "typical", " engagement take?"],
    a: "Most identity engagements run four to eight weeks. Web projects sit at six to ten. We share a milestone-based plan after our kick-off so you always know what's next.",
    defaultOpen: true,
  },
  {
    num: "02",
    q: ["What does pricing ", "look like", "?"],
    a: "We scope projects in tiers based on what's needed — strategy, identity, web, motion. Most engagements land between €18k and €80k. We share a written estimate inside 48 hours of our first call.",
  },
  {
    num: "03",
    q: ["Do you work with ", "early-stage", " startups?"],
    a: "Yes — about a third of our work each year is with pre-seed and seed companies. We have a focused “launch package” built for first identities and landing pages.",
  },
  {
    num: "04",
    q: ["Can you embed with our ", "in-house", " team?"],
    a: "Of course. We've run engagements as fractional design leadership, as a parallel team, and as a vendor to in-house design orgs. We adapt to the rhythm that fits.",
  },
  {
    num: "05",
    q: ["Where are you ", "based", "?"],
    a: "Madrid, with collaborators in Lisbon and Amsterdam. We work remotely with clients across Europe and North America and travel for kickoffs when it makes sense.",
  },
];

export default function FAQ({ content }: { content: FAQContent | null }) {
  const items = content?.items && content.items.length > 0
    ? content.items.map((item, i) => ({
        num: String(i + 1).padStart(2, "0"),
        qPlain: item.question,
        a: item.answer,
        defaultOpen: i === 0,
      }))
    : null;

  return (
    <section className="faq-section">
      <div className="glow br very-faint" />
      <div className="faq-inner">
        <header className="sec-head">
          <div className="sec-head-left">
            <div className="eyebrow">
              <span className="led" />
              <span>05 · FAQ</span>
              <span className="esep">/</span>
              <span>Common questions</span>
            </div>
            <h2 className="sec-title">
              Questions worth <span className="em">asking</span>
              <br />before we start.
            </h2>
          </div>
          <p className="head-meta">
            <span className="v">Still unsure?</span>{" "}
            Drop us a note — we reply within one workday.
          </p>
        </header>

        <div className="faq-wrap">
          {items
            ? items.map((item) => (
                <details key={item.num} className="faq-item" open={item.defaultOpen || undefined}>
                  <summary>
                    <span className="faq-num">{item.num}</span>
                    <span className="faq-q">{item.qPlain}</span>
                    <span className="faq-toggle">+</span>
                  </summary>
                  <p className="faq-ans">{item.a}</p>
                </details>
              ))
            : FALLBACK_ITEMS.map((item) => (
                <details key={item.num} className="faq-item" open={item.defaultOpen || undefined}>
                  <summary>
                    <span className="faq-num">{item.num}</span>
                    <span className="faq-q">
                      {item.q[0]}
                      <span className="it">{item.q[1]}</span>
                      {item.q[2]}
                    </span>
                    <span className="faq-toggle">+</span>
                  </summary>
                  <p className="faq-ans">{item.a}</p>
                </details>
              ))}
        </div>
      </div>
    </section>
  );
}
