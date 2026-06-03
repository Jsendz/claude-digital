"use client";

import { useState, useEffect, useRef } from "react";

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

const UC_TABS: { id: TabId; label: string }[] = [
  { id: "services", label: "Service businesses" },
  { id: "local", label: "Local shops" },
  { id: "ecom", label: "E-commerce" },
  { id: "creators", label: "Creators" },
  { id: "agency", label: "Agencies" },
];

const UC_PANES: {
  id: TabId;
  tag: string;
  heading: React.ReactNode;
  body: string;
  chips: string[];
  warmChips: string[];
}[] = [
  {
    id: "services",
    tag: "Service businesses",
    heading: <>Stop losing leads to rivals with a <span className="it">better Google presence</span></>,
    body: "Plumbers, lawyers, cleaners — your clients Google you first. Your score tells you exactly why they're choosing the competition, and what to fix first.",
    chips: ["Findability", "Trust signals", "Reviews"],
    warmChips: ["Instant results"],
  },
  {
    id: "local",
    tag: "Local shops",
    heading: <>Turn foot traffic into <span className="it">online discovery</span></>,
    body: "People search before they walk in. Your Visibility Score checks whether your online presence matches the quality of your store — and where it falls short.",
    chips: ["Google Maps", "Local SEO", "Speed"],
    warmChips: ["Free diagnostic"],
  },
  {
    id: "ecom",
    tag: "E-commerce",
    heading: <>Find out why your store <span className="it">isn't converting</span></>,
    body: "Traffic without sales is a signal problem. The test surfaces trust gaps, speed issues, and conversion killers in under 60 seconds.",
    chips: ["Conversion", "Trust", "Performance"],
    warmChips: ["No login needed"],
  },
  {
    id: "creators",
    tag: "Creators & freelancers",
    heading: <>Your portfolio is your <span className="it">first impression</span></>,
    body: "Clients vet you before they email. Your score shows whether your site passes the trust bar — or quietly loses you work.",
    chips: ["First impression", "Trust", "Mobile"],
    warmChips: ["Results in 60s"],
  },
  {
    id: "agency",
    tag: "For consultants & agencies",
    heading: <>Win clients with a <span className="it">diagnostic they can't ignore</span></>,
    body: "Use the Visibility Score as a conversation starter. Share a client's score before the pitch — it's the most compelling opener you'll ever send.",
    chips: ["Lead gen", "Client reports", "White-label"],
    warmChips: ["Earn a call"],
  },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "Is the Visibility Score really free?",
    a: "Yes — the score, the breakdown, and the letter grade are completely free. You get them the moment you finish the 20 questions. The follow-up PDF report and strategy calls are paid extras, but you're never required to buy anything.",
  },
  {
    q: "How long does the test take?",
    a: "Under 60 seconds for most people. There are 20 multiple-choice questions. No jargon, no trick questions — just honest answers about your current online presence.",
  },
  {
    q: "Do I need to know anything technical?",
    a: "Not at all. The questions are written in plain English and cover things you already know about your business — not your server settings. If you know you have a website, you can take this test.",
  },
  {
    q: "What happens after I get my score?",
    a: "You'll see your score out of 100, a breakdown across the four pillars (Findability, Trust, Conversion, Speed), and a letter grade with tier label. You can then choose to get the full PDF report and, if you want, book a strategy session.",
  },
  {
    q: "Can I take the test for a client's website?",
    a: "Absolutely. Many consultants and agencies use Lumiq as a prospecting tool — run the test for a potential client, share the score, and use it to open the conversation. It's the most compelling cold opener we've seen.",
  },
  {
    q: "What is the 'done-for-you' plan?",
    a: "It's a hands-on engagement where our team implements the recommendations from your report. You get a dedicated strategist, priority support, and a full execution plan — not just advice. Pricing starts at $1,490.",
  },
];

/* ─── Main component ─────────────────────────────────── */
export default function LumiqLandingPage() {
  const [activeTab, setActiveTab] = useState<TabId>("services");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [ringVisible, setRingVisible] = useState(false);
  const ringRef = useRef<HTMLDivElement>(null);
  const ringNumRef = useRef<HTMLSpanElement>(null);
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);

  /* Score ring intersection observer */
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

  /* Count-up animation */
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

  /* Scroll reveal */
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

  /* FAQ toggle */
  const toggleFaq = (i: number) => {
    const next = openFaq === i ? null : i;
    setOpenFaq(next);
  };

  /* FAQ max-height animation */
  useEffect(() => {
    faqRefs.current.forEach((ref, i) => {
      if (!ref) return;
      const wrap = ref.querySelector<HTMLDivElement>(".lp-faq-a-wrap");
      if (!wrap) return;
      wrap.style.maxHeight = openFaq === i ? wrap.scrollHeight + "px" : "0px";
    });
  }, [openFaq]);

  /* Ring SVG */
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
            What we offer
          </div>

          <h1>
            Find out, in 60 seconds, why your website is{" "}
            <span className="it accent">invisible.</span>
          </h1>

          <p className="lp-hero-lede">
            20 questions. A score out of 100. A grade, A through F. And a clear, personalised explanation of exactly what's dragging your website down — and how to fix it.
          </p>

          <div className="lp-hero-tags">
            {["Free", "60 seconds", "No login needed", "Instant results"].map((t) => (
              <span key={t} className="lp-tag">{t}</span>
            ))}
          </div>

          <div className="lp-hero-btns">
            <a href="#test" className="lp-btn lp-btn-primary lg">
              Start the test
              <span className="lp-arr"><ArrowRight /></span>
            </a>
            <a href="#features" className="lp-btn lp-btn-light">
              See a sample report
              <span className="lp-arr"><ArrowRight /></span>
            </a>
          </div>

          <div className="lp-trust">
            <div className="lp-trust-stars">
              {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
            </div>
            <strong>4.9/5</strong>
            <div className="lp-trust-avs">
              {[...Array(4)].map((_, i) => <div key={i} className="av" />)}
            </div>
            <span>1,000+ businesses scored</span>
          </div>
        </div>

        {/* ── Right: hero image ──────────────────────── */}
        <div className="lp-hero-right">
          <img
            src="/images/hero-lumiq.png"
            alt="Lumiq visibility score report"
            className="lp-hero-img"
          />
        </div>

      </section>

      {/* Logo strip */}
      <div className="lp-logo-strip">
        <p className="lp-logo-strip-label">Trusted by businesses in</p>
        <div className="lp-logo-grid">
          {["Retail", "Hospitality", "Legal", "Health", "Real Estate"].map((name) => (
            <div key={name} className="lp-logo-item">{name}</div>
          ))}
        </div>
      </div>

      {/* ══ 02 FEATURES ══════════════════════════════════ */}
      <section className="lp-features" id="features">
        <div className="lp-wrap">
          <div className="lp-features-head" data-reveal>
            <div className="lp-eyebrow"><span className="lp-dot" />What you get</div>
            <SH>
              Your business, <span className="it">scored</span> and explained.
            </SH>
            <p className="lp-hero-lede" style={{ margin: "16px auto 0", maxWidth: "52ch" }}>
              In 60 seconds, Lumiq gives you a score out of 100, a grade A–F, and a plain-English breakdown of exactly what's holding your website back.
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
                alt="Lumiq SEO metrics dashboard"
                className="lp-dash-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══ 04 WHY IT WORKS ══════════════════════════════ */}
      <section className="lp-why">
        <div className="lp-wrap">
          <div data-reveal>
            <div className="lp-eyebrow"><span className="lp-dot" />Why it works</div>
            <h2>Unique by design. <span className="it">Honest</span> by default.</h2>
          </div>
          <div className="lp-uf-grid">
            {[
              { icon: "⏱", title: "Under 90 seconds", body: "The fastest honest website diagnostic on the market. Finish before your coffee gets cold." },
              { icon: "🏗", title: "Built for 1000s", body: "Calibrated against over a thousand small business websites across 40+ industries." },
              { icon: "💬", title: "No fluff in the report", body: "Every word earns its place. If it doesn't help you act, it's not in there." },
              { icon: "⚡", title: "Action-over-insight", body: "The score exists to create motion. Every section ends with a next step, not a lecture." },
              { icon: "📧", title: "One email. That's it.", body: "We send the report. We don't drip you with content you didn't ask for." },
              { icon: "🔁", title: "The same diagnostics we use", body: "The four pillars are the exact framework our team uses on paid client audits — condensed into 20 questions." },
            ].map(({ icon, title, body }) => (
              <div key={title} className="lp-uf-card" data-reveal>
                <div className="lp-icon-chip lg" style={{ fontSize: 18 }}>{icon}</div>
                <p className="lp-uf-card-title">{title}</p>
                <p className="lp-uf-card-body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 06 SIMPLE STEPS ══════════════════════════════ */}
      <section className="lp-steps" id="how">
        <div className="lp-wrap">
          <div data-reveal>
            <div className="lp-eyebrow"><span className="lp-dot" />How it works</div>
            <h2>Simple steps to <span className="it">get started.</span></h2>
            <p className="lp-hero-lede" style={{ margin: "0 auto", maxWidth: "48ch" }}>
              You don't need to be a tech person. You need 60 seconds and an honest eye for your own website.
            </p>
          </div>
          <div className="lp-steps-grid" style={{ marginTop: 48 }}>
            {[
              { n: "Step 1", icon: "▶", title: "Start the test", body: "Click 'Start the test.' You'll see the first of 20 questions immediately. No sign-up required." },
              { n: "Step 2", icon: "✓", title: "Answer 20 questions", body: "Each question has 2–4 choices. Pick the one that best describes your current situation. Be honest — it's anonymous." },
              { n: "Step 3", icon: "◉", title: "See your score", body: "Get your score out of 100, your grade, and a four-pillar breakdown the moment you finish." },
              { n: "Step 4", icon: "📄", title: "Get your report", body: "Enter your email for the full PDF. Eight pages of personalised recommendations sent within minutes." },
            ].map(({ n, icon, title, body }) => (
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

      {/* ══ 07 USE CASES ═════════════════════════════════ */}
      <section className="lp-uc">
        <div className="lp-wrap">
          <div data-reveal>
            <div className="lp-eyebrow"><span className="lp-dot" />Who it's for</div>
            <h2>One test. <span className="it">Every</span> kind of small business.</h2>
          </div>

          <div className="lp-uc-tabs" role="tablist" aria-label="Business type">
            {UC_TABS.map(({ id, label }) => (
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
            {UC_PANES.map(({ id, tag, heading, body, chips, warmChips }) => (
              <div
                key={id}
                className={`lp-uc-pane${activeTab === id ? " active" : ""}`}
                role="tabpanel"
              >
                <span className="lp-uc-tag">{tag}</span>
                <h3>{heading}</h3>
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

      {/* ══ 09 FAQ ═══════════════════════════════════════ */}
      <section className="lp-faq-section" id="faq">
        <div className="lp-faq-inner">
          <div data-reveal>
            <div className="lp-eyebrow"><span className="lp-dot" />Questions</div>
            <h2>Is it really, <span className="it">free?</span></h2>
          </div>
          <div className="lp-faq-list">
            {FAQS.map(({ q, a }, i) => (
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

      {/* ══ 10 FINAL CTA ═════════════════════════════════ */}
      <section className="lp-final" id="test">
        <div className="lp-final-inner">
          <div className="lp-eyebrow lp-dark"><span className="lp-dot" />Take the test</div>
          <h2>Before you <span className="it">click.</span></h2>
          <p className="lp-final-lede">
            In the next 60 seconds you&apos;ll know exactly why your website isn&apos;t bringing in the business you deserve — and what to do about it. The score is free. The clarity is priceless.
          </p>
          <a href="#top" className="lp-btn lp-btn-primary lg">
            Start the free test
            <span className="lp-arr"><ArrowRight /></span>
          </a>
          <p className="lp-final-micro">No credit card · No login · Results in 60 seconds</p>
        </div>
      </section>

    </div>
  );
}
