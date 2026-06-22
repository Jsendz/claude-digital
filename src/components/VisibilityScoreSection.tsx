"use client";

import Image from "next/image";

export default function VisibilityScoreSection() {

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

          {/* ── Right column: mockup image ────────────── */}
          <div className="vs-right">
            <Image
              src="/images/test.webp"
              alt="Visibility Score sample report shown across devices"
              width={6000}
              height={4171}
              className="vs-mockup-img"
              priority
            />
          </div>

        </div>
      </section>
    </div>
  );
}
