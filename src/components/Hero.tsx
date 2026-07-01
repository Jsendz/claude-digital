import { getTranslations } from "next-intl/server";

const TICKER_ITEMS = [
  "Brand Identity", "Web Design", "Art Direction", "Motion",
  "Naming", "Packaging", "Type", "Strategy", "Editorial",
];

const MOTES = [
  { left: 52, top: 8,  dur: 8.2,  delay: -3.1,  size: 1.8 },
  { left: 56, top: 22, dur: 6.7,  delay: -7.4,  size: 1.2 },
  { left: 61, top: 15, dur: 9.1,  delay: -1.8,  size: 2.1 },
  { left: 49, top: 35, dur: 7.3,  delay: -5.2,  size: 1.5 },
  { left: 65, top: 42, dur: 8.8,  delay: -9.6,  size: 2.4 },
  { left: 58, top: 5,  dur: 6.4,  delay: -2.3,  size: 1.1 },
  { left: 63, top: 28, dur: 10.2, delay: -6.7,  size: 1.9 },
  { left: 54, top: 48, dur: 7.9,  delay: -4.1,  size: 1.6 },
  { left: 69, top: 18, dur: 8.5,  delay: -8.3,  size: 2.2 },
  { left: 51, top: 55, dur: 6.1,  delay: -0.9,  size: 1.3 },
  { left: 67, top: 38, dur: 9.7,  delay: -3.8,  size: 1.7 },
];

export default async function Hero() {
  const t = await getTranslations("Hero");

  return (
    <section className="hs">
      {/* ── Atmospheric layers ───────────────────────── */}
      <div className="hs-bg"      aria-hidden="true" />
      <div className="hs-tint"   aria-hidden="true" />
      <div className="hs-grain"  aria-hidden="true" />
      <div className="hs-floor"  aria-hidden="true" />
      <div className="hs-horizon" aria-hidden="true" />

      {/* ── Dust motes ───────────────────────────────── */}
      <div className="hs-motes" aria-hidden="true">
        {MOTES.map((m, i) => (
          <span
            key={i}
            className="hs-mote"
            style={{
              left: `${m.left}vw`,
              top:  `${m.top}vh`,
              width:  `${m.size}px`,
              height: `${m.size}px`,
              animationDuration: `${m.dur}s`,
              animationDelay:    `${m.delay}s`,
            }}
          />
        ))}
      </div>

      {/* ── Main frame ───────────────────────────────── */}
      <div className="hs-frame">

        {/* Hero body */}
        <div className="hs-body">
          <div className="hs-left">

            {/* Kicker */}
            <div className="hs-kicker" role="doc-subtitle">
              <span className="hs-kicker-led" aria-hidden="true" />
              <span>{t("badge")}</span>
            </div>

            {/* Headline */}
            <h1 className="hs-display">
              {t("heading1")}
              <br />
              <span className="hs-dim">{t("heading2")}</span>
              <br />
              <span className="hs-em">{t("headingAccent")}</span>
            </h1>

            {/* Sub */}
            <p className="hs-sub">{t("paragraph")}</p>

            {/* CTAs */}
            <div className="hs-cta-row">
              <a href="#contact" className="hs-btn-primary">
                {t("cta1")}
                <span className="hs-btn-arr" aria-hidden="true">→</span>
              </a>
              <a href="#work" className="hs-btn-ghost">
                <span className="hs-btn-play" aria-hidden="true">▶</span>
                {t("cta2")}
              </a>
            </div>

          </div>
        </div>

        {/* Bottom row */}
        <div className="hs-bottom">
          <div className="hs-ticker-wrap">
            <div className="hs-ticker">
              {[0, 1].map((g) => (
                <div key={g} className="hs-ticker-group">
                  {TICKER_ITEMS.map((s) => (
                    <span key={`${g}-${s}`}>
                      {s}
                      <span className="hs-ticker-dot" aria-hidden="true"> ✦ </span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="hs-meta">
            <div className="hs-meta-scroll" aria-hidden="true">
              <span>SCROLL</span>
              <span className="hs-meta-scroll-line" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
