"use client";

import { useState } from "react";

// ─── Non-translatable visual constants ────────────────────────────────────────
const PROBLEM_NUMBERS = ["01", "02", "03"];
const PILLAR_ICONS = ["✦", "↗", "⚡"];
const OUTCOME_ICONS = ["↗", "✦", "⚡"];
const STEP_NUMBERS = ["01", "02", "03", "04"];

// ─── Icons ────────────────────────────────────────────────────────────────────
const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

// ─── Content type ─────────────────────────────────────────────────────────────
type WDContent = ReturnType<typeof import("@/sanity/lib/queries").resolveWebDesignContent>;

// ─── Component ────────────────────────────────────────────────────────────────
export default function WebDesignServicePage({ content }: { content: WDContent }) {
  const { hero, problem, solution: sol, deliverables: del, outcomes: out, proof, process: proc, faq, form } = content;

  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [formData, setFormData] = useState({ name: "", email: "", company: "", website: "", service: "", goal: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => setFormStatus("success"), 1500);
  };

  return (
    <div className="brand-v2">
      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 md:px-12 lg:px-16 pt-32 pb-16">
        <div className="max-w-[1340px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="section-badge w-fit mb-8 block">{hero.badge}</span>
            <h1 className="text-5xl md:text-6xl lg:text-[4rem] font-bold leading-[1.05] tracking-tight text-foreground">
              {hero.heading1}{" "}
              <span className="text-accent italic">{hero.headingAccent}</span>
            </h1>
            <p className="mt-6 text-muted text-lg max-w-lg">{hero.paragraph}</p>
            <div className="flex flex-wrap gap-3 mt-8">
              <a href="#audit-form" className="inline-flex items-center gap-2 bg-accent text-white px-7 py-3.5 rounded-full font-medium text-sm hover:bg-accent-hover transition-colors">
                {hero.cta1}<ArrowIcon />
              </a>
              <a href="#work-examples" className="inline-flex items-center gap-2 bg-foreground text-white px-7 py-3.5 rounded-full font-medium text-sm hover:bg-card-dark transition-colors">
                {hero.cta2}<ArrowIcon />
              </a>
            </div>
            <p className="mt-4 text-sm text-muted">{hero.noPressure}</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl overflow-hidden h-56"><img src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80" alt="Website on laptop" className="w-full h-full object-cover" /></div>
            <div className="rounded-2xl overflow-hidden h-56"><img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80" alt="UI design interface" className="w-full h-full object-cover" /></div>
            <div className="rounded-2xl overflow-hidden h-56"><img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" alt="Web analytics" className="w-full h-full object-cover" /></div>
            <div className="rounded-2xl bg-foreground h-56 flex flex-col justify-end p-6">
              <div className="flex gap-0.5 text-accent text-lg mb-2">★★★★★</div>
              <p className="text-white font-semibold text-sm">{hero.trustCount}</p>
              <p className="text-gray-400 text-xs mt-1 uppercase tracking-wider">{hero.trustSub}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. PROBLEM ──────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 lg:px-16 py-24">
        <div className="max-w-[1340px] mx-auto">
          <div className="mb-16">
            <span className="section-badge">{problem.badge}</span>
            <h2 className="text-5xl md:text-6xl font-bold mt-6 text-muted">{problem.heading}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {problem.items.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl p-7">
                <div className="flex items-start justify-between mb-6">
                  <span className="text-xs font-bold text-foreground/30 tracking-widest">{PROBLEM_NUMBERS[i]}</span>
                  <span className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. SOLUTION ─────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 lg:px-16 py-24">
        <div className="max-w-[1340px] mx-auto">
          <div className="relative overflow-hidden rounded-3xl px-10 md:px-16 py-14" style={{ backgroundColor: "#1c0f0b" }}>
            {/* Decorative circle */}
            <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full pointer-events-none" style={{ backgroundColor: "#6b1c0f" }} />
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: copy + form */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1.5 mb-8" style={{ backgroundColor: "rgba(0,0,0,0.35)" }}>
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-white text-xs font-bold tracking-widest">{sol.badge}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-5">{sol.heading}</h2>
                <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-md">{sol.paragraph}</p>
                <div className="flex items-center rounded-full p-1.5 mb-5 border border-white/5 max-w-lg" style={{ backgroundColor: "#2a1410" }}>
                  <input
                    type="url"
                    placeholder={sol.inputPlaceholder}
                    className="flex-1 bg-transparent text-white text-sm px-4 placeholder:text-gray-500 focus:outline-none min-w-0"
                  />
                  <a href="#audit-form" className="bg-accent hover:bg-accent-hover text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors whitespace-nowrap shrink-0">
                    {sol.ctaButton}
                  </a>
                </div>
                <div className="flex flex-wrap gap-5">
                  {sol.trust.map((item, i) => (
                    <span key={i} className="text-gray-400 text-xs flex items-center gap-1.5">
                      <span className="text-gray-500">✓</span> {item}
                    </span>
                  ))}
                </div>
              </div>
              {/* Right: browser mockup */}
              <div className="hidden lg:block">
                <div className="rounded-2xl overflow-hidden border border-white/5" style={{ backgroundColor: "#2a1410" }}>
                  <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#ff5f56" }} />
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#ffbd2e" }} />
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#27c93f" }} />
                    <span className="ml-3 text-gray-500 text-xs">yourbrand.com</span>
                  </div>
                  <div className="flex flex-col items-center justify-center py-20 px-8 text-center">
                    <span className="text-7xl font-light text-gray-600 mb-4">?</span>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-50">{sol.mockLabel}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. DELIVERABLES ─────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 lg:px-16 py-24">
        <div className="max-w-[1340px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
            <div>
              <span className="section-badge">{del.badge}</span>
              <h2 className="text-5xl md:text-6xl font-bold mt-6">{del.heading}</h2>
            </div>
            <p className="text-muted max-w-sm text-lg">{del.subtext}</p>
          </div>
          <div className="bg-white rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {del.items.map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-card rounded-xl p-5">
                  <span className="w-6 h-6 rounded-full bg-foreground text-accent flex items-center justify-center shrink-0 mt-0.5"><CheckIcon /></span>
                  <p className="text-sm font-medium leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. OUTCOMES ─────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 lg:px-16 py-24">
        <div className="max-w-[1340px] mx-auto">
          <div className="mb-16">
            <span className="section-badge">{out.badge}</span>
            <h2 className="text-5xl md:text-6xl font-bold mt-6">{out.heading}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {out.items.map((o, i) => (
              <div key={i} className={`rounded-2xl p-7 ${i === 1 ? "bg-foreground text-white" : "bg-white"}`}>
                <div className="flex items-start justify-between mb-6">
                  <span className={`text-2xl font-bold ${i === 1 ? "text-accent" : "text-foreground"}`}>{OUTCOME_ICONS[i]}</span>
                  <div className="flex gap-1">{Array.from({ length: i + 1 }).map((_, j) => <span key={j} className="w-2 h-2 rounded-full bg-accent" />)}</div>
                </div>
                <h3 className="text-xl font-bold mb-3">{o.title}</h3>
                <p className={`text-sm leading-relaxed ${i === 1 ? "text-gray-300" : "text-muted"}`}>{o.body}</p>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-bold text-xl">{out.ctaTitle}</p>
              <p className="text-muted mt-1 text-sm">{out.ctaDesc}</p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#audit-form" className="inline-flex items-center gap-2 bg-accent text-white px-7 py-3.5 rounded-full font-medium text-sm hover:bg-accent-hover transition-colors">
                {out.ctaButton}<ArrowIcon />
              </a>
              <p className="text-xs text-muted">{out.ctaNoCommitment}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. PROOF ────────────────────────────────────────────────────────── */}
      <section id="work-examples" className="px-6 md:px-12 lg:px-16 py-24">
        <div className="max-w-[1340px] mx-auto">
          <div className="mb-16">
            <span className="section-badge">{proof.badge}</span>
            <h2 className="text-5xl md:text-6xl font-bold mt-6 text-muted">{proof.heading}</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="bg-foreground text-white rounded-2xl p-8 flex flex-col justify-end">
              <div className="flex -space-x-3 mb-4">{[0,1,2].map((i) => <div key={i} className="w-12 h-12 rounded-full border-2 border-foreground bg-linear-to-br from-gray-400 to-gray-600" />)}</div>
              <div className="flex gap-0.5 text-accent text-lg mb-2">★★★★★</div>
              <p className="font-semibold">{proof.trustCount}</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">{proof.trustSub}</p>
              <a href="#audit-form" className="mt-6 block text-center py-3 rounded-full border border-white/20 text-sm font-medium hover:bg-white/10 transition-colors">{proof.ctaButton}</a>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5">
              {proof.testimonials.map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-gray-300 to-gray-500" />
                    <div>
                      <p className="font-semibold text-sm">{item.name}</p>
                      <p className="text-xs text-muted uppercase tracking-wider">{item.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm font-bold">5.0</span>
                    <span className="text-accent text-sm">★★★★★</span>
                    <span className="text-xs text-muted uppercase tracking-wider">Rating</span>
                  </div>
                  <p className="text-sm leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
                </div>
              ))}
              {[0, 1].map((i) => (
                <div key={i} className="bg-card rounded-2xl p-6 border-2 border-dashed border-foreground/10 flex flex-col items-center justify-center text-center gap-3 min-h-[200px]">
                  <span className="text-2xl">📁</span>
                  <p className="font-semibold text-sm">{proof.caseStudyTitle}</p>
                  <p className="text-xs text-muted">{proof.caseStudyDesc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. PROCESS ──────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 lg:px-16 py-24">
        <div className="max-w-[1340px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
            <div>
              <span className="section-badge">{proc.badge}</span>
              <h2 className="text-5xl md:text-6xl font-bold mt-6">{proc.heading}</h2>
            </div>
            <p className="text-muted max-w-sm text-lg">{proc.subtext}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {proc.steps.map((step, i) => (
              <div key={i} className={`rounded-2xl p-7 ${i === 3 ? "bg-foreground text-white" : "bg-white"}`}>
                <div className="flex items-start justify-between mb-6">
                  <span className={`text-xs font-bold tracking-widest ${i === 3 ? "text-gray-500" : "text-foreground/30"}`}>{STEP_NUMBERS[i]}</span>
                  <div className="flex gap-1">{Array.from({ length: i + 1 }).map((_, j) => <span key={j} className="w-2 h-2 rounded-full bg-accent" />)}</div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className={`text-sm leading-relaxed ${i === 3 ? "text-gray-300" : "text-muted"}`}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. FAQ ──────────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 lg:px-16 py-24">
        <div className="max-w-[1340px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="section-badge">{faq.badge}</span>
              <h2 className="text-5xl md:text-6xl font-bold mt-6 text-muted">{faq.heading}</h2>
            </div>
            <div className="space-y-3">
              {faq.items.map((item, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden">
                  <button onClick={() => setFaqOpen(faqOpen === index ? null : index)} className="w-full flex items-center justify-between px-6 py-5 text-left">
                    <span className="font-semibold text-sm md:text-base pr-4">{item.q}</span>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${faqOpen === index ? "bg-accent text-white" : "bg-card text-foreground"}`}>
                      {faqOpen === index ? "−" : "+"}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${faqOpen === index ? "max-h-96 pb-5" : "max-h-0"}`}>
                    <p className="px-6 text-muted text-sm leading-relaxed">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. FORM ─────────────────────────────────────────────────────────── */}
      <section id="audit-form" className="px-6 md:px-12 lg:px-16 py-24">
        <div className="max-w-[1340px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="section-badge">{form.badge}</span>
              <h2 className="text-5xl md:text-6xl font-bold mt-6">{form.heading}</h2>
              <p className="mt-4 text-muted text-lg max-w-sm">{form.description}</p>
              <div className="mt-10 space-y-4">
                {form.checklist.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-foreground text-accent flex items-center justify-center shrink-0"><CheckIcon /></span>
                    <p className="text-sm font-medium">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 bg-white rounded-2xl p-6">
                <div className="flex items-start justify-between mb-6">
                  <span className="text-lg">✉️</span>
                  <span className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <p className="text-xs text-muted uppercase tracking-wider mb-1">{form.contactLabel}</p>
                <p className="font-semibold text-sm">hello@lumiq.studio</p>
              </div>
            </div>

            <div className="bg-foreground rounded-2xl p-8">
              {formStatus === "success" ? (
                <div className="flex flex-col items-center justify-center h-full py-16 text-center gap-4">
                  <span className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-white text-2xl">✓</span>
                  <h3 className="text-white text-2xl font-bold">{form.successTitle}</h3>
                  <p className="text-gray-300 text-sm max-w-xs">{form.successDesc}</p>
                  <button onClick={() => { setFormStatus("idle"); setFormData({ name: "", email: "", company: "", website: "", service: "", goal: "" }); }} className="mt-4 text-sm text-gray-400 hover:text-white transition-colors underline">
                    {form.successReset}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">{form.nameLbl}</label>
                      <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder={form.namePlaceholder} className="w-full bg-white/10 text-white border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-gray-500 focus:outline-none focus:border-accent transition-colors" />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">{form.emailLbl}</label>
                      <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder={form.emailPlaceholder} className="w-full bg-white/10 text-white border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-gray-500 focus:outline-none focus:border-accent transition-colors" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">{form.companyLbl}</label>
                      <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder={form.companyPlaceholder} className="w-full bg-white/10 text-white border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-gray-500 focus:outline-none focus:border-accent transition-colors" />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">{form.websiteLbl}</label>
                      <input type="url" name="website" value={formData.website} onChange={handleChange} placeholder={form.websitePlaceholder} className="w-full bg-white/10 text-white border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-gray-500 focus:outline-none focus:border-accent transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">{form.serviceLbl}</label>
                    <div className="relative">
                      <select name="service" value={formData.service} onChange={handleChange} className="w-full bg-white/10 text-white border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors appearance-none pr-10">
                        <option value="" className="bg-foreground text-white">{form.serviceOptions.defaultOpt}</option>
                        <option value="new-website" className="bg-foreground text-white">{form.serviceOptions.newWebsite}</option>
                        <option value="redesign" className="bg-foreground text-white">{form.serviceOptions.redesign}</option>
                        <option value="landing-page" className="bg-foreground text-white">{form.serviceOptions.landing}</option>
                        <option value="ecommerce" className="bg-foreground text-white">{form.serviceOptions.ecommerce}</option>
                        <option value="not-sure" className="bg-foreground text-white">{form.serviceOptions.notSure}</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">▾</div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">{form.goalLbl}</label>
                    <textarea name="goal" value={formData.goal} onChange={handleChange} placeholder={form.goalPlaceholder} rows={3} className="w-full bg-white/10 text-white border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-gray-500 focus:outline-none focus:border-accent transition-colors resize-none" />
                  </div>
                  <button type="submit" disabled={formStatus === "submitting"} className="w-full bg-white text-foreground py-4 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors disabled:opacity-70 disabled:cursor-not-allowed">
                    {formStatus === "submitting" ? form.submitting : form.submitButton}
                  </button>
                  <p className="text-center text-xs text-gray-500">{form.noCommitment}</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
