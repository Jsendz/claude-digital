"use client";

import { useEffect, useRef, useState } from "react";

const PILLARS = [
  { name: "Findability",   value: 82 },
  { name: "Positioning",   value: 74 },
  { name: "Trust signals", value: 86 },
  { name: "Memorability",  value: 68 },
];

const TARGET_SCORE = 78;

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export default function VisibilityScoreSection() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [score, setScore] = useState(0);
  const [barsActive, setBarsActive] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();

        if (prefersReduced) {
          setScore(TARGET_SCORE);
          setBarsActive(true);
          return;
        }

        const duration = 1600;
        const start = performance.now();

        const tick = (now: number) => {
          const elapsed = now - start;
          const t = Math.min(elapsed / duration, 1);
          setScore(Math.round(easeOutCubic(t) * TARGET_SCORE));
          if (t < 1) {
            rafRef.current = requestAnimationFrame(tick);
          } else {
            setScore(TARGET_SCORE);
          }
        };

        rafRef.current = requestAnimationFrame(tick);
        setTimeout(() => setBarsActive(true), 200);
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="vs-wrap" id="visibility-score">
      <section className="vs-section">
        <div className="vs-grid">

          {/* ── Left column: copy ─────────────────────── */}
          <div className="vs-left">
            <div className="vs-eyebrow" role="doc-subtitle">
              <span className="vs-eyebrow-led" aria-hidden="true" />
              <span>Free · 60 seconds · No email gate to start</span>
            </div>

            <h2 className="vs-title">
              Find out exactly how{" "}
              <em className="vs-title-em">visible</em> you are.
            </h2>

            <p className="vs-lede">
              The Visibility Score grades your brand across four pillars buyers actually use to
              find, trust, and remember you — and tells you, in under a minute, the single move
              that would move your number the most.
            </p>

            <a
              href="#contact"
              className="vs-cta"
              aria-label="Take the Visibility Score test"
            >
              Get my Visibility Score
              <span className="vs-cta-chip" aria-hidden="true">→</span>
            </a>

            <p className="vs-micro">
              Avg. time ·{" "}
              <span className="vs-micro-val">58 sec</span>
              {" "}· Free PDF report ·{" "}
              <span className="vs-micro-val">2,481 scores issued</span>
            </p>
          </div>

          {/* ── Right column: scorecard ───────────────── */}
          <div className="vs-right">
            <div className="vs-float-tag vs-float-tag--top" aria-hidden="true">
              <span className="vs-float-led" />
              Sample Report
            </div>

            <div
              className="vs-card"
              ref={cardRef}
              role="figure"
              aria-label="Sample Visibility Score reveal"
            >
              {/* Browser chrome */}
              <div className="vs-chrome">
                <div className="vs-chrome-dots" aria-hidden="true">
                  <span className="vs-chrome-dot" />
                  <span className="vs-chrome-dot" />
                  <span className="vs-chrome-dot" />
                </div>
                <div className="vs-chrome-url" aria-hidden="true">
                  lumiq.studio
                  <span className="vs-chrome-url-slash">/</span>
                  <span className="vs-chrome-url-em">score</span>
                  <span className="vs-chrome-url-slash">/</span>
                  reveal
                </div>
                <div className="vs-chrome-live" aria-hidden="true">
                  <span className="vs-chrome-live-dot" />
                  Live
                </div>
              </div>

              {/* Card body */}
              <div className="vs-body">
                <div className="vs-meta-row">
                  <span>Your Visibility Score</span>
                  <span>Issued · 24 Apr 2026</span>
                </div>

                <div className="vs-score-row">
                  <div className="vs-score-num-wrap">
                    <span className="vs-score-num">{score}</span>
                    <span className="vs-score-denom">/100</span>
                  </div>

                  <div className="vs-badges" aria-label="Grade B, Status Lit">
                    <span className="vs-badge vs-badge--grade">
                      <span className="vs-badge-pip vs-badge-pip--grade">B</span>
                      Grade B
                    </span>
                    <span className="vs-badge vs-badge--lit">
                      <span className="vs-badge-pip vs-badge-pip--lit" aria-hidden="true" />
                      Status · Lit
                    </span>
                  </div>
                </div>

                <div className="vs-pillars">
                  {PILLARS.map((p) => (
                    <div key={p.name} className="vs-pillar">
                      <span className="vs-pillar-name">{p.name}</span>
                      <div className="vs-pillar-track">
                        <div
                          className="vs-pillar-fill"
                          style={{ width: barsActive ? `${p.value}%` : "0%" }}
                        />
                      </div>
                      <span className="vs-pillar-val">{p.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card footer */}
              <div className="vs-card-foot">
                <p className="vs-card-foot-left">
                  Top move ·{" "}
                  <strong>Sharpen the home headline</strong>
                </p>
                <div className="vs-card-foot-right">
                  <span className="vs-card-foot-btn" aria-hidden="true">↓</span>
                  Download full report
                </div>
              </div>
            </div>

            <div className="vs-float-tag vs-float-tag--bottom" aria-hidden="true">
              Yours in 60s
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
