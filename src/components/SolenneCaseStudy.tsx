import React from "react";

type Step = {
  label: string;
  title: React.ReactNode;
  body: string;
  duration: string;
  output: string;
  chips: string[];
  heroAlt: string;
  pairAlt: [string, string];
  rev?: boolean;
};

const STEPS: Step[] = [
  {
    label: "Discovery",
    title: <>Listening, <span className="em">first.</span></>,
    body: "Two weeks of founder interviews, scent workshops in the studio, and competitor teardowns across the European candle market. We mapped what Solenne wanted to be — and what it absolutely wasn't.",
    duration: "2 weeks",
    output: "Insight brief",
    chips: ["Stakeholder interviews", "Market audit", "Scent workshops", "Insight brief"],
    heroAlt: "Studio working shot or scent workshop",
    pairAlt: ["Mood board / studio shot", "Workshop notes"],
  },
  {
    label: "Strategy",
    title: <>A <span className="em">position</span> to own.</>,
    body: "Solenne sits between heritage perfumery and a modern, ritualistic everyday. We named the territory — “considered warmth” — and built three brand pillars: craft, atmosphere, and patience.",
    duration: "1 week",
    output: "Brand platform",
    chips: ["Positioning", "Naming", "Pillars", "Tone of voice"],
    heroAlt: "Strategy session or pinboard",
    pairAlt: ["Positioning map", "Pillar diagrams"],
    rev: true,
  },
  {
    label: "Design",
    title: <>Mark, <span className="em">type,</span> texture.</>,
    body: "An asymmetric wordmark built from a custom serif. A two-typeface system pairing Instrument Serif with a workhorse sans. Warm-cream paper stocks, hand-stamped labels, embossed gold foil on the limited edition.",
    duration: "4 weeks",
    output: "Identity system",
    chips: ["Wordmark", "Custom type", "Packaging", "Stationery", "Photography direction"],
    heroAlt: "Identity hero — wordmark in context",
    pairAlt: ["Wordmark studies", "Packaging shot"],
  },
  {
    label: "Launch",
    title: <>Into the <span className="em">world.</span></>,
    body: "Six SKUs, three retail partners, one editorial campaign shot in a Madrid loft. We supported the launch with a fast Webflow site, press kits, and an Instagram playbook the team still runs today.",
    duration: "3 weeks",
    output: "Launch package",
    chips: ["Site", "Press kit", "Campaign", "Social playbook"],
    heroAlt: "Launch campaign hero",
    pairAlt: ["Campaign image", "Site screenshot"],
    rev: true,
  },
];

const STATS = [
  { num: "+210", suf: "%", lbl: "DTC sign-ups",   cap: "First 90 days, vs. pre-launch waitlist." },
  { num: "3.4",  suf: "x", lbl: "Repeat orders",  cap: "Year-one repeat rate vs. category benchmark." },
  { num: "47",   suf: "",  lbl: "Press hits",      cap: "Including Monocle, Apartamento, Wallpaper*." },
];

const META = [
  { lbl: "Client",   val: "Solenne" },
  { lbl: "Year",     val: "2026" },
  { lbl: "Role",     val: "Identity · Packaging · Web" },
  { lbl: "Duration", val: "10 weeks" },
];

export default function SolenneCaseStudy() {
  return (
    <>
      {/* ── Section 1: Hero ─────────────────────────── */}
      <section className="cs-hero">
        <div className="glow tr" />
        <div className="glow bl very-faint" />
        <div className="cs-inner">

          <div className="cs-hero-top">
            <div className="eyebrow">
              <span className="led" />
              <span>CASE 01 · SOLENNE</span>
              <span className="esep">/</span>
              <span>Brand identity · 2026</span>
            </div>
            <p className="cs-hero-tags">
              Madrid<span className="dot"> · </span>
              Independent<span className="dot"> · </span>
              Limited release
            </p>
          </div>

          <h1 className="cs-hero-title">
            Solenne <span className="em">candles</span>
            <span className="cs-hero-subtitle">
              A house of <span className="em">warm,</span> patient scent.
            </span>
          </h1>

          <p className="cs-hero-lede">
            A new candle house out of Madrid — built around six signature blends,
            hand-stamped paper, and a quiet, considered everyday ritual. We led
            identity, packaging, and the launch site over a focused ten-week sprint.
          </p>

          <div className="cs-hero-img">
            <div className="cs-ph" role="img" aria-label="Hero — campaign shot or packaging close-up" />
          </div>

          <div className="cs-meta-strip">
            {META.map(({ lbl, val }) => (
              <div key={lbl} className="cs-meta-col">
                <span className="lbl">{lbl}</span>
                <span className="val">{val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 2: Stats ────────────────────────── */}
      <section className="cs-stats">
        <div className="cs-inner">
          <header className="sec-head">
            <div className="sec-head-left">
              <div className="eyebrow">
                <span className="led" />
                <span>02 · OUTCOME</span>
                <span className="esep">/</span>
                <span>What changed</span>
              </div>
              <h2 className="cs-title-lg">
                Numbers from<br />the <span className="em">first year.</span>
              </h2>
            </div>
            <p className="head-meta">
              <span className="v">Measured at</span>{" "}+90, +180, +365 days
              <br />after public launch.
            </p>
          </header>

          <div className="cs-stats-grid">
            {STATS.map(({ num, suf, lbl, cap }) => (
              <div key={lbl} className="cs-stat">
                <div className="cs-stat-num">
                  {num}
                  {suf && <span className="cs-stat-suf">{suf}</span>}
                </div>
                <span className="cs-stat-lbl">{lbl}</span>
                <p className="cs-stat-cap">{cap}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Process ──────────────────────── */}
      <section className="cs-process">
        <div className="glow tl very-faint" />
        <div className="cs-inner">
          <header className="sec-head">
            <div className="sec-head-left">
              <div className="eyebrow">
                <span className="led" />
                <span>03 · PROCESS</span>
                <span className="esep">/</span>
                <span>How we worked</span>
              </div>
              <h2 className="cs-title-lg">
                Four stages,<br />ten <span className="em">weeks.</span>
              </h2>
            </div>
            <p className="head-meta">
              <span className="v">From kickoff</span>{" "}to public launch.
              <br />Weekly milestones.
            </p>
          </header>

          <div className="cs-steps">
            {STEPS.map((step, i) => (
              <article key={i} className="cs-step">
                <div className={`cs-step-row${step.rev ? " rev" : ""}`}>
                  <div className="cs-step-text">
                    <div className="cs-step-num">
                      <span className="n">0{i + 1}</span>
                      <span className="l">{step.label}</span>
                    </div>
                    <h3 className="cs-title-md">{step.title}</h3>
                    <p className="cs-step-body">{step.body}</p>
                    <div className="cs-step-meta">
                      <div>
                        <span className="lbl">Duration</span>
                        <span className="val">{step.duration}</span>
                      </div>
                      <div>
                        <span className="lbl">Output</span>
                        <span className="val">{step.output}</span>
                      </div>
                    </div>
                    <div className="cs-chip-row">
                      {step.chips.map((chip) => (
                        <span key={chip} className="cs-chip">{chip}</span>
                      ))}
                    </div>
                  </div>

                  <div className="cs-step-art">
                    <div className="cs-step-hero-img">
                      <div className="cs-ph" role="img" aria-label={step.heroAlt} />
                    </div>
                    <div className="cs-step-pair">
                      <div className="cs-step-sq">
                        <div className="cs-ph" role="img" aria-label={step.pairAlt[0]} />
                      </div>
                      <div className="cs-step-sq">
                        <div className="cs-ph" role="img" aria-label={step.pairAlt[1]} />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Gallery ──────────────────────── */}
      <section className="cs-gallery">
        <div className="cs-inner">
          <header className="sec-head">
            <div className="sec-head-left">
              <div className="eyebrow">
                <span className="led" />
                <span>04 · GALLERY</span>
                <span className="esep">/</span>
                <span>In the wild</span>
              </div>
              <h2 className="cs-title-lg">
                The full system,<br /><span className="em">shipped.</span>
              </h2>
            </div>
            <p className="head-meta">
              <span className="v">Six SKUs</span>{" "}three retail partners,
              <br />one editorial campaign.
            </p>
          </header>

          <div className="cs-mosaic">
            <div className="cs-ph a" role="img" aria-label="Wide lifestyle shot" />
            <div className="cs-ph b" role="img" aria-label="Packaging detail" />
            <div className="cs-ph c" role="img" aria-label="On a shelf" />
            <div className="cs-ph d" role="img" aria-label="Press feature" />
          </div>
        </div>
      </section>
    </>
  );
}
