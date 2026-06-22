"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { AuditModalTrigger } from "@/components/AuditModalTrigger";

/* ─── SVG helpers ────────────────────────────────────── */
const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
    <path d="M8 1l1.854 3.756L14 5.528l-3 2.924.708 4.126L8 10.5l-3.708 2.078L5 8.452 2 5.528l4.146-.772L8 1z" />
  </svg>
);

/* ─── Section heading h2 ──────────────────────────────── */
function SH({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <h2 className={className}>{children}</h2>;
}

/* ─── Types ───────────────────────────────────────────── */
type TabId = "services" | "local" | "ecom" | "creators" | "agency";

type UcPane = {
  id: TabId;
  tag: string;
  heading_before: string;
  heading_accent: string;
  body: string;
  chips: string[];
  warmChips: string[];
};

type WhyCard = {
  icon: string;
  title: string;
  body: string;
};

type StepItem = {
  n: string;
  icon: string;
  title: string;
  body: string;
};

type FaqItem = {
  q: string;
  a: string;
};

type UcTab = {
  id: TabId;
  label: string;
};

/* ─── Main component ─────────────────────────────────── */
export default function LumiqLandingPage() {
  const t = useTranslations("landing");

  const [activeTab, setActiveTab] = useState<TabId>("services");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [ringVisible, setRingVisible] = useState(false);

  const ringRef = useRef<HTMLDivElement>(null);
  const ringNumRef = useRef<HTMLSpanElement>(null);
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);

  /* ── Translated arrays ─────────────────────────────── */
  const heroTags     = t.raw("hero.tags")          as string[];
  const sectors      = t.raw("logoStrip.sectors")  as string[];
  const whyCards     = t.raw("whyItWorks.cards")   as WhyCard[];
  const stepItems    = t.raw("steps.items")        as StepItem[];
  const ucTabs       = t.raw("useCases.tabs")      as UcTab[];
  const ucPanes      = t.raw("useCases.panes")     as UcPane[];
  const faqItems     = t.raw("faq.items")          as FaqItem[];

  /* ── Score ring intersection observer ─────────────── */
  useEffect(() => {
    const el = ringRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setRingVisible(true); observer.disconnect(); } },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* ── Count-up animation ────────────────────────────── */
  useEffect(() => {
    if (!ringVisible) return;
    const el = ringNumRef.current;
    if (!el) return;
    let frame: number;
    const start = performance.now();
    const duration = 1600;
    const target = 78;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const ease = 1 - Math.pow(1 - t, 3);
      el.textContent = String(Math.round(ease * target));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [ringVisible]);

  /* ── Scroll reveal ─────────────────────────────────── */
  useEffect(() => {
    const els = document.querySelectorAll(".lp-root [data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ── FAQ toggle ────────────────────────────────────── */
  const toggleFaq = (i: number) => {
    setOpenFaq(openFaq === i ? null : i);
  };

  /* ── FAQ max-height animation ──────────────────────── */
  useEffect(() => {
    faqRefs.current.forEach((ref, i) => {
      if (!ref) return;
      const wrap = ref.querySelector<HTMLDivElement>(".lp-faq-a-wrap");
      if (!wrap) return;
      wrap.style.maxHeight = openFaq === i ? wrap.scrollHeight + "px" : "0px";
    });
  }, [openFaq]);

  /* ── Ring SVG ──────────────────────────────────────── */
  const r = 42;
  const circ = 2 * Math.PI * r;
  const ringOffset = ringVisible ? circ * (1 - 78 / 100) : circ;

  return (
    <div className="lp-root brand-v2">

      {/* ══ 01 HERO ══════════════════════════════════════ */}
      <section className="lp-hero" id="top">

        {/* ── Left: text content ─────────────────────── */}
        <div className="lp-hero-inner">
          <div className="lp-eyebrow">
            <span className="lp-dot" />
            {t("hero.eyebrow")}
          </div>

          <h1>
            {t("hero.h1_before")}{" "}
            <span className="it accent">{t("hero.h1_accent")}</span>
          </h1>

          <p className="lp-hero-lede">{t("hero.lede")}</p>

          <div className="lp-hero-tags">
            {heroTags.map((tag) => (
              <span key={tag} className="lp-tag">{tag}</span>
            ))}
          </div>

          <div className="lp-hero-btns">
            <AuditModalTrigger className="lp-btn lp-btn-primary lg">
              {t("hero.cta_primary")}
              <span className="lp-arr"><ArrowRight /></span>
            </AuditModalTrigger>
            <a href="#how" className="lp-btn lp-btn-light">
              {t("hero.cta_secondary")}
              <span className="lp-arr"><ArrowRight /></span>
            </a>
          </div>

          <div className="lp-trust">
            <div className="lp-trust-stars">
              {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
            </div>
            <strong>{t("hero.trust_rating")}</strong>
            <div className="lp-trust-avs">
              {[...Array(4)].map((_, i) => <div key={i} className="av" />)}
            </div>
            <span>{t("hero.trust_label")}</span>
          </div>
        </div>

        {/* ── Right: hero image ──────────────────────── */}
        <div className="lp-hero-right">
          <img
            src="/images/hero-lumiq.png"
            alt="Lumiq free website audit"
            className="lp-hero-img"
          />
        </div>

      </section>

      {/* ── Logo strip ─────────────────────────────────── */}
      <div className="lp-logo-strip">
        <p className="lp-logo-strip-label">{t("logoStrip.label")}</p>
        <div className="lp-logo-grid">
          {sectors.map((name) => (
            <div key={name} className="lp-logo-item">{name}</div>
          ))}
        </div>
      </div>

      {/* ══ 02 FEATURES ══════════════════════════════════ */}
      <section className="lp-features" id="features">
        <div className="lp-wrap">
          <div className="lp-features-head" data-reveal>
            <div className="lp-eyebrow">
              <span className="lp-dot" />
              {t("features.eyebrow")}
            </div>
            <SH>
              {t("features.h2_before")}{" "}
              <span className="it">{t("features.h2_accent")}</span>
            </SH>
            <p className="lp-hero-lede" style={{ margin: "16px auto 0", maxWidth: "52ch" }}>
              {t("features.lede")}
            </p>
          </div>

          <div className="lp-dash-outer" data-reveal>
            <div className="lp-dash-wrap">
              <div className="lp-dash-chrome">
                <span className="lp-dash-dot" />
                <span className="lp-dash-dot" />
                <span className="lp-dash-dot" />
              </div>
              <img
                src="/images/lumiq-dashboard.png"
                alt="Lumiq audit preview"
                className="lp-dash-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══ 03 WHY IT WORKS ══════════════════════════════ */}
      <section className="lp-why">
        <div className="lp-wrap">
          <div data-reveal>
            <div className="lp-eyebrow">
              <span className="lp-dot" />
              {t("whyItWorks.eyebrow")}
            </div>
            <h2>
              {t("whyItWorks.h2_before")}{" "}
              <span className="it">{t("whyItWorks.h2_accent")}</span>
            </h2>
          </div>
          <div className="lp-uf-grid">
            {whyCards.map(({ icon, title, body }) => (
              <div key={title} className="lp-uf-card" data-reveal>
                <div className="lp-icon-chip lg" style={{ fontSize: 18 }}>{icon}</div>
                <p className="lp-uf-card-title">{title}</p>
                <p className="lp-uf-card-body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 04 HOW IT WORKS ══════════════════════════════ */}
      <section className="lp-steps" id="how">
        <div className="lp-wrap">
          <div data-reveal>
            <div className="lp-eyebrow">
              <span className="lp-dot" />
              {t("steps.eyebrow")}
            </div>
            <h2>
              {t("steps.h2_before")}{" "}
              <span className="it">{t("steps.h2_accent")}</span>
            </h2>
            <p className="lp-hero-lede" style={{ margin: "0 auto", maxWidth: "48ch" }}>
              {t("steps.lede")}
            </p>
          </div>
          <div className="lp-steps-grid" style={{ marginTop: 48 }}>
            {stepItems.map(({ n, icon, title, body }) => (
              <div key={n} className="lp-step-card" data-reveal>
                <div className="lp-step-card-head">
                  <span className="lp-step-n">{n}</span>
                  <div className="lp-step-icon">{icon}</div>
                </div>
                <p className="lp-step-title">{title}</p>
                <p className="lp-step-body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 05 USE CASES ═════════════════════════════════ */}
      <section className="lp-uc">
        <div className="lp-wrap">
          <div data-reveal>
            <div className="lp-eyebrow">
              <span className="lp-dot" />
              {t("useCases.eyebrow")}
            </div>
            <h2>
              {t("useCases.h2_before")}{" "}
              <span className="it">{t("useCases.h2_accent")}</span>
            </h2>
          </div>

          <div className="lp-uc-tabs" role="tablist" aria-label={t("useCases.eyebrow")}>
            {ucTabs.map(({ id, label }) => (
              <button
                key={id}
                className="lp-uc-tab"
                role="tab"
                aria-selected={activeTab === id}
                onClick={() => setActiveTab(id)}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="lp-uc-stage">
            {ucPanes.map(({ id, tag, heading_before, heading_accent, body, chips, warmChips }) => (
              <div
                key={id}
                className={`lp-uc-pane${activeTab === id ? " active" : ""}`}
                role="tabpanel"
              >
                <span className="lp-uc-tag">{tag}</span>
                <h3>
                  {heading_before}{" "}
                  <span className="it">{heading_accent}</span>
                </h3>
                <p className="lp-uc-body">{body}</p>
                <div className="lp-uc-chips">
                  {warmChips.map((c) => <span key={c} className="lp-chip warm">{c}</span>)}
                  {chips.map((c) => <span key={c} className="lp-chip">{c}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 07 FAQ ═══════════════════════════════════════ */}
      <section className="lp-faq-section" id="faq">
        <div className="lp-faq-inner">
          <div data-reveal>
            <div className="lp-eyebrow">
              <span className="lp-dot" />
              {t("faq.eyebrow")}
            </div>
            <h2>
              {t("faq.h2_before")}{" "}
              <span className="it">{t("faq.h2_accent")}</span>
            </h2>
          </div>
          <div className="lp-faq-list">
            {faqItems.map(({ q, a }, i) => (
              <div
                key={i}
                ref={(el) => { faqRefs.current[i] = el; }}
                className={`lp-faq-item${openFaq === i ? " open" : ""}`}
                data-reveal
              >
                <button
                  className="lp-faq-q"
                  onClick={() => toggleFaq(i)}
                  aria-expanded={openFaq === i}
                >
                  <span className="lp-faq-q-text">{q}</span>
                  <span className="lp-faq-pill" aria-hidden />
                </button>
                <div className="lp-faq-a-wrap">
                  <p className="lp-faq-a">{a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 08 FINAL CTA ═════════════════════════════════ */}
      <section className="lp-final" id="cta">
        <div className="lp-final-inner">
          <div className="lp-eyebrow lp-dark">
            <span className="lp-dot" />
            {t("finalCta.eyebrow")}
          </div>
          <h2>
            {t("finalCta.h2_before")}{" "}
            <span className="it">{t("finalCta.h2_accent")}</span>
          </h2>
          <p className="lp-final-lede">{t("finalCta.lede")}</p>
          <AuditModalTrigger className="lp-btn lp-btn-primary lg">
            {t("finalCta.cta")}
            <span className="lp-arr"><ArrowRight /></span>
          </AuditModalTrigger>
          <p className="lp-final-micro">{t("finalCta.microcopy")}</p>
        </div>
      </section>

    </div>
  );
}