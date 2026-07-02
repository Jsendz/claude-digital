"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8.5l3 3 7-7.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function VisibilityScoreSection() {
  const t = useTranslations("VisibilityScore");
  const checks = t.raw("checks") as string[];

  return (
    <div className="vs-wrap" id="visibility-score">
      <div className="vs-grain" aria-hidden="true" />

      <section className="vs-section">
        <div className="vs-card">
          <div className="vs-card-beam" aria-hidden="true" />

          <div className="vs-grid">

            {/* ── Left column: copy ─────────────────────── */}
            <div className="vs-left" data-reveal>
              <div className="vs-eyebrow" role="doc-subtitle">
                {t("eyebrow")}
              </div>

              <div className="vs-badge">
                <span className="vs-badge-led" aria-hidden="true" />
                <span>{t("badge")}</span>
              </div>

              <h2 className="vs-title">
                {t("title_before")}{" "}
                <em className="vs-title-em">{t("title_em")}</em>{" "}
                {t("title_after")}
              </h2>

              <p className="vs-lede">
                {t("lede")}
              </p>

              <form
                className="vs-form"
                aria-label={t("form_aria")}
                onSubmit={(e) => e.preventDefault()}
              >
                <span className="vs-form-protocol">https://</span>
                <input
                  className="vs-form-input"
                  type="text"
                  name="domain"
                  placeholder={t("form_placeholder")}
                  aria-label={t("form_aria")}
                  required
                />
                <button type="submit" className="vs-form-btn">
                  {t("form_btn")}
                </button>
              </form>

              <ul className="vs-checks">
                {checks.map((item) => (
                  <li key={item}>
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Right column: report mockup ───────────── */}
            <div className="vs-right" data-reveal data-delay="2">
              <div className="vs-right-panel">
                <span className="vs-sample-badge">
                  <span className="vs-sample-dot" aria-hidden="true" />
                  {t("sample_badge")}
                </span>

                <Image
                  src="/images/visibility-report-phone.webp"
                  alt={t("img_alt")}
                  fill
                  sizes="(min-width: 1200px) 480px, (min-width: 960px) 420px, 420px"
                  className="vs-mockup-img"
                  priority
                />
              </div>

              <div className="vs-caption-card">
                {t("caption_before")}{" "}
                <em>{t("caption_em")}</em>.
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
