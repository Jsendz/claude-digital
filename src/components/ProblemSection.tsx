const CARDS = [
  {
    num: "01 / 03",
    headline: { before: "You're ", italic: "invisible", after: " to the people you serve." },
    body: 'The right buyers exist. They\'re searching. They\'re scrolling. But your name never enters the room — and "trying harder" hasn\'t moved the needle in months.',
    tag: "SYMPTOM · LOW QUALIFIED REACH",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="10.5" cy="10.5" r="7" />
        <path d="M20 20l-3.5-3.5" />
        <path d="M10.5 7.5a2 2 0 0 1 1 3.7c-.6.3-1 .8-1 1.3" />
        <circle cx="10.5" cy="14.5" r=".5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    num: "02 / 03",
    headline: { before: "Your ", italic: "story", after: " isn't landing." },
    body: "What you actually do is good — sometimes great. But the way it's told online buries the lead. Visitors leave without ever understanding why you, and why now.",
    tag: "SYMPTOM · SOFT POSITIONING",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 7h18" />
        <line x1="12" y1="7" x2="12" y2="21" />
        <path d="M7.5 10.5 Q5.5 15 7.5 19.5" />
        <path d="M16.5 10.5 Q18.5 15 16.5 19.5" />
      </svg>
    ),
  },
  {
    num: "03 / 03",
    headline: { before: "", italic: "Silence", after: " where there should be signal." },
    body: 'No replies. No saves. No DMs. No "where did you come from?" intros. Without measurable visibility, every next move is a guess — and guessing is expensive.',
    tag: "SYMPTOM · NO INBOUND FEEDBACK LOOP",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <circle cx="12" cy="18.5" r="1" />
        <line x1="9" y1="7" x2="15" y2="7" strokeDasharray="1.5 2" />
        <line x1="9" y1="10.5" x2="15" y2="10.5" strokeDasharray="1.5 2" />
        <line x1="9" y1="14" x2="13" y2="14" strokeDasharray="1.5 2" />
      </svg>
    ),
  },
];

export default function ProblemSection() {
  return (
    <div className="prob-wrap" id="problem">
      <div className="prob-grain" aria-hidden="true" />
      <div className="prob-hairline" aria-hidden="true" />

      <section className="prob-section">
        <header className="prob-head">
          <div className="prob-eyebrow" role="doc-subtitle">
            <span className="prob-led" aria-hidden="true" />
            <span>The Problem</span>
            <span className="prob-eyebrow-sep" aria-hidden="true">·</span>
            <span>Where most brands sit today</span>
          </div>

          <h2 className="prob-title">
            You&apos;re doing the work.
            <br />
            <em className="prob-title-em">Nobody&apos;s</em> watching.
          </h2>

          <p className="prob-lede">
            You&apos;ve shipped the product. You&apos;ve written the posts. You&apos;ve shown up
            consistently for months. And yet the inbox stays quiet, the launches land soft, and the
            right people never seem to find you.{" "}
            <span className="prob-lede-em">It isn&apos;t the work — it&apos;s the signal.</span>
          </p>
        </header>

        <div className="prob-grid">
          {CARDS.map((card, i) => (
            <article key={i} className="prob-card">
              <span className="prob-card-num" aria-hidden="true">{card.num}</span>

              <div className="prob-icon">{card.icon}</div>

              <div className="prob-card-content">
                <h3 className="prob-card-h3">
                  {card.headline.before}
                  <em className="prob-card-h3-em">{card.headline.italic}</em>
                  {card.headline.after}
                </h3>

                <p className="prob-card-body">{card.body}</p>

                <div className="prob-card-foot">
                  <span className="prob-card-dot" aria-hidden="true" />
                  <span>{card.tag}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
