"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

// ─── Non-translatable visual constants ────────────────────────────────────────

const PROBLEM_NUMBERS = ["01", "02", "03"];
const PILLAR_ICONS = ["✦", "↗", "⚡"];
const OUTCOME_ICONS = ["↗", "✦", "⚡"];
const STEP_NUMBERS = ["01", "02", "03", "04"];

// ─── Icons ────────────────────────────────────────────────────────────────────

const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const CheckIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

// ─── Component ────────────────────────────────────────────────────────────────

export default function WebDesignServicePage() {
  const t = useTranslations("WebDesign");
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    service: "",
    goal: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  // ── Data built from translations ────────────────────────────────────────────

  const problems = PROBLEM_NUMBERS.map((number, i) => ({
    number,
    title: t(`problem.items.${i}.title`),
    body: t(`problem.items.${i}.body`),
  }));

  const solutionPillars = PILLAR_ICONS.map((icon, i) => ({
    icon,
    title: t(`solution.pillars.${i}.title`),
    body: t(`solution.pillars.${i}.body`),
  }));

  const deliverables = [0, 1, 2, 3, 4, 5, 6].map((i) =>
    t(`deliverables.items.${i}`)
  );

  const outcomes = OUTCOME_ICONS.map((icon, i) => ({
    icon,
    title: t(`outcomes.items.${i}.title`),
    body: t(`outcomes.items.${i}.body`),
  }));

  const testimonials = [0, 1].map((i) => ({
    name: t(`proof.testimonials.${i}.name`),
    role: t(`proof.testimonials.${i}.role`),
    quote: t(`proof.testimonials.${i}.quote`),
  }));

  const steps = STEP_NUMBERS.map((number, i) => ({
    number,
    title: t(`process.steps.${i}.title`),
    body: t(`process.steps.${i}.body`),
  }));

  const faqs = [0, 1, 2, 3, 4, 5].map((i) => ({
    q: t(`faq.items.${i}.q`),
    a: t(`faq.items.${i}.a`),
  }));

  const checklist = [0, 1, 2].map((i) => t(`form.checklist.${i}`));

  // ── Handlers ────────────────────────────────────────────────────────────────

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // TODO: Replace with a real API call before going to production.
    // Example: await fetch("/api/audit-request", { method: "POST", body: JSON.stringify(form), headers: { "Content-Type": "application/json" } })
    setTimeout(() => setFormStatus("success"), 1500);
  };

  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 md:px-12 lg:px-16 pt-32 pb-16">
        <div className="max-w-[1340px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: headline + CTAs */}
          <div>
            <span className="section-badge w-fit mb-8 block">{t("hero.badge")}</span>
            <h1 className="text-5xl md:text-6xl lg:text-[4rem] font-bold leading-[1.05] tracking-tight text-foreground">
              {t("hero.heading1")}{" "}
              <span className="text-accent italic">{t("hero.headingAccent")}</span>
            </h1>
            <p className="mt-6 text-muted text-lg max-w-lg">{t("hero.paragraph")}</p>
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="#audit-form"
                className="inline-flex items-center gap-2 bg-accent text-white px-7 py-3.5 rounded-full font-medium text-sm hover:bg-accent-hover transition-colors"
              >
                {t("hero.cta1")}
                <ArrowIcon />
              </a>
              <a
                href="#work-examples"
                className="inline-flex items-center gap-2 bg-foreground text-white px-7 py-3.5 rounded-full font-medium text-sm hover:bg-[#0a3d1a] transition-colors"
              >
                {t("hero.cta2")}
                <ArrowIcon />
              </a>
            </div>
            <p className="mt-4 text-sm text-muted">{t("hero.noPressure")}</p>
          </div>

          {/* Right: image grid + trust card */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl overflow-hidden h-56">
              <img
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80"
                alt="Website on laptop"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-56">
              <img
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80"
                alt="UI design interface"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-56">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
                alt="Web analytics dashboard"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl bg-foreground h-56 flex flex-col justify-end p-6">
              <div className="flex gap-0.5 text-accent text-lg mb-2">★★★★★</div>
              <p className="text-white font-semibold text-sm">{t("hero.trustCount")}</p>
              <p className="text-gray-400 text-xs mt-1 uppercase tracking-wider">
                {t("hero.trustSub")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. PROBLEM ──────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 lg:px-16 py-24">
        <div className="max-w-[1340px] mx-auto">
          <div className="mb-16">
            <span className="section-badge">{t("problem.badge")}</span>
            <h2 className="text-5xl md:text-6xl font-bold mt-6 text-muted">
              {t("problem.heading")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {problems.map((p) => (
              <div key={p.number} className="bg-white rounded-2xl p-7">
                <div className="flex items-start justify-between mb-6">
                  <span className="text-xs font-bold text-foreground/30 tracking-widest">
                    {p.number}
                  </span>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-badge">{t("solution.badge")}</span>
              <h2 className="text-5xl md:text-6xl font-bold mt-6">
                {t("solution.heading")}
              </h2>
              <p className="mt-6 text-muted text-lg leading-relaxed">{t("solution.p1")}</p>
              <p className="mt-4 text-muted text-lg leading-relaxed">{t("solution.p2")}</p>
            </div>
            <div className="flex flex-col gap-4">
              {solutionPillars.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-foreground text-accent flex items-center justify-center text-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-muted text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. DELIVERABLES ─────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 lg:px-16 py-24">
        <div className="max-w-[1340px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
            <div>
              <span className="section-badge">{t("deliverables.badge")}</span>
              <h2 className="text-5xl md:text-6xl font-bold mt-6">
                {t("deliverables.heading")}
              </h2>
            </div>
            <p className="text-muted max-w-sm text-lg">{t("deliverables.subtext")}</p>
          </div>
          <div className="bg-white rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {deliverables.map((item) => (
                <div key={item} className="flex items-start gap-3 bg-card rounded-xl p-5">
                  <span className="w-6 h-6 rounded-full bg-foreground text-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckIcon />
                  </span>
                  <p className="text-sm font-medium leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. OUTCOMES + REPEAT CTA ────────────────────────────────────────── */}
      <section className="px-6 md:px-12 lg:px-16 py-24">
        <div className="max-w-[1340px] mx-auto">
          <div className="mb-16">
            <span className="section-badge">{t("outcomes.badge")}</span>
            <h2 className="text-5xl md:text-6xl font-bold mt-6">
              {t("outcomes.heading")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {outcomes.map((o, i) => (
              <div
                key={o.title}
                className={`rounded-2xl p-7 ${
                  i === 1 ? "bg-foreground text-white" : "bg-white"
                }`}
              >
                <div className="flex items-start justify-between mb-6">
                  <span
                    className={`text-2xl font-bold ${
                      i === 1 ? "text-accent" : "text-foreground"
                    }`}
                  >
                    {o.icon}
                  </span>
                  <div className="flex gap-1">
                    {Array.from({ length: i + 1 }).map((_, j) => (
                      <span key={j} className="w-2 h-2 rounded-full bg-accent" />
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{o.title}</h3>
                <p
                  className={`text-sm leading-relaxed ${
                    i === 1 ? "text-gray-300" : "text-muted"
                  }`}
                >
                  {o.body}
                </p>
              </div>
            ))}
          </div>

          {/* Repeat CTA strip */}
          <div className="bg-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-bold text-xl">{t("outcomes.ctaTitle")}</p>
              <p className="text-muted mt-1 text-sm">{t("outcomes.ctaDesc")}</p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#audit-form"
                className="inline-flex items-center gap-2 bg-accent text-white px-7 py-3.5 rounded-full font-medium text-sm hover:bg-accent-hover transition-colors"
              >
                {t("outcomes.ctaButton")}
                <ArrowIcon />
              </a>
              <p className="text-xs text-muted">{t("outcomes.ctaNoCommitment")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. PROOF ────────────────────────────────────────────────────────── */}
      <section id="work-examples" className="px-6 md:px-12 lg:px-16 py-24">
        <div className="max-w-[1340px] mx-auto">
          <div className="mb-16">
            <span className="section-badge">{t("proof.badge")}</span>
            <h2 className="text-5xl md:text-6xl font-bold mt-6 text-muted">
              {t("proof.heading")}
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Trust card */}
            <div className="bg-foreground text-white rounded-2xl p-8 flex flex-col justify-end">
              <div className="flex -space-x-3 mb-4">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-2 border-foreground bg-linear-to-br from-gray-400 to-gray-600"
                  />
                ))}
              </div>
              <div className="flex gap-0.5 text-accent text-lg mb-2">★★★★★</div>
              <p className="font-semibold">{t("proof.trustCount")}</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">
                {t("proof.trustSub")}
              </p>
              <a
                href="#audit-form"
                className="mt-6 block text-center py-3 rounded-full border border-white/20 text-sm font-medium hover:bg-white/10 transition-colors"
              >
                {t("proof.ctaButton")}
              </a>
            </div>

            {/* Testimonial cards + placeholders */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5">
              {testimonials.map((item) => (
                <div key={item.name} className="bg-white rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-gray-300 to-gray-500" />
                    <div>
                      <p className="font-semibold text-sm">{item.name}</p>
                      <p className="text-xs text-muted uppercase tracking-wider">
                        {item.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm font-bold">5.0</span>
                    <span className="text-accent text-sm">★★★★★</span>
                    <span className="text-xs text-muted uppercase tracking-wider">
                      Rating
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
                </div>
              ))}
              {[0, 1].map((i) => (
                <div
                  key={i}
                  className="bg-card rounded-2xl p-6 border-2 border-dashed border-foreground/10 flex flex-col items-center justify-center text-center gap-3 min-h-[200px]"
                >
                  <span className="text-2xl">📁</span>
                  <p className="font-semibold text-sm">{t("proof.caseStudyTitle")}</p>
                  <p className="text-xs text-muted">{t("proof.caseStudyDesc")}</p>
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
              <span className="section-badge">{t("process.badge")}</span>
              <h2 className="text-5xl md:text-6xl font-bold mt-6">
                {t("process.heading")}
              </h2>
            </div>
            <p className="text-muted max-w-sm text-lg">{t("process.subtext")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`rounded-2xl p-7 ${
                  i === 3 ? "bg-foreground text-white" : "bg-white"
                }`}
              >
                <div className="flex items-start justify-between mb-6">
                  <span
                    className={`text-xs font-bold tracking-widest ${
                      i === 3 ? "text-gray-500" : "text-foreground/30"
                    }`}
                  >
                    {step.number}
                  </span>
                  <div className="flex gap-1">
                    {Array.from({ length: i + 1 }).map((_, j) => (
                      <span key={j} className="w-2 h-2 rounded-full bg-accent" />
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p
                  className={`text-sm leading-relaxed ${
                    i === 3 ? "text-gray-300" : "text-muted"
                  }`}
                >
                  {step.body}
                </p>
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
              <span className="section-badge">{t("faq.badge")}</span>
              <h2 className="text-5xl md:text-6xl font-bold mt-6 text-muted">
                {t("faq.heading")}
              </h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden">
                  <button
                    onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                  >
                    <span className="font-semibold text-sm md:text-base pr-4">
                      {faq.q}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                        faqOpen === index
                          ? "bg-accent text-white"
                          : "bg-card text-foreground"
                      }`}
                    >
                      {faqOpen === index ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      faqOpen === index ? "max-h-96 pb-5" : "max-h-0"
                    }`}
                  >
                    <p className="px-6 text-muted text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. FINAL CTA + LEAD CAPTURE FORM ───────────────────────────────── */}
      <section id="audit-form" className="px-6 md:px-12 lg:px-16 py-24">
        <div className="max-w-[1340px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: trust content */}
            <div>
              <span className="section-badge">{t("form.badge")}</span>
              <h2 className="text-5xl md:text-6xl font-bold mt-6">
                {t("form.heading")}
              </h2>
              <p className="mt-4 text-muted text-lg max-w-sm">{t("form.description")}</p>
              <div className="mt-10 space-y-4">
                {checklist.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-foreground text-accent flex items-center justify-center flex-shrink-0">
                      <CheckIcon />
                    </span>
                    <p className="text-sm font-medium">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 bg-white rounded-2xl p-6">
                <div className="flex items-start justify-between mb-6">
                  <span className="text-lg">✉️</span>
                  <span className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <p className="text-xs text-muted uppercase tracking-wider mb-1">
                  {t("form.contactLabel")}
                </p>
                <p className="font-semibold text-sm">info@jhdigitalservices.com</p>
              </div>
            </div>

            {/* Right: form */}
            <div className="bg-foreground rounded-2xl p-8">
              {formStatus === "success" ? (
                <div className="flex flex-col items-center justify-center h-full py-16 text-center gap-4">
                  <span className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-white text-2xl">
                    ✓
                  </span>
                  <h3 className="text-white text-2xl font-bold">
                    {t("form.successTitle")}
                  </h3>
                  <p className="text-gray-300 text-sm max-w-xs">
                    {t("form.successDesc")}
                  </p>
                  <button
                    onClick={() => {
                      setFormStatus("idle");
                      setForm({
                        name: "",
                        email: "",
                        company: "",
                        website: "",
                        service: "",
                        goal: "",
                      });
                    }}
                    className="mt-4 text-sm text-gray-400 hover:text-white transition-colors underline"
                  >
                    {t("form.successReset")}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        {t("form.nameLbl")}
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder={t("form.namePlaceholder")}
                        className="w-full bg-white/10 text-white border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-gray-500 focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        {t("form.emailLbl")}
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder={t("form.emailPlaceholder")}
                        className="w-full bg-white/10 text-white border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-gray-500 focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        {t("form.companyLbl")}
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder={t("form.companyPlaceholder")}
                        className="w-full bg-white/10 text-white border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-gray-500 focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        {t("form.websiteLbl")}
                      </label>
                      <input
                        type="url"
                        name="website"
                        value={form.website}
                        onChange={handleChange}
                        placeholder={t("form.websitePlaceholder")}
                        className="w-full bg-white/10 text-white border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-gray-500 focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      {t("form.serviceLbl")}
                    </label>
                    <div className="relative">
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full bg-white/10 text-white border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors appearance-none pr-10"
                      >
                        <option value="" className="bg-[#01260E] text-white">
                          {t("form.serviceDefault")}
                        </option>
                        <option value="new-website" className="bg-[#01260E] text-white">
                          {t("form.serviceNew")}
                        </option>
                        <option value="redesign" className="bg-[#01260E] text-white">
                          {t("form.serviceRedesign")}
                        </option>
                        <option value="landing-page" className="bg-[#01260E] text-white">
                          {t("form.serviceLanding")}
                        </option>
                        <option value="ecommerce" className="bg-[#01260E] text-white">
                          {t("form.serviceEcommerce")}
                        </option>
                        <option value="not-sure" className="bg-[#01260E] text-white">
                          {t("form.serviceNotSure")}
                        </option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">
                        ▾
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      {t("form.goalLbl")}
                    </label>
                    <textarea
                      name="goal"
                      value={form.goal}
                      onChange={handleChange}
                      placeholder={t("form.goalPlaceholder")}
                      rows={3}
                      className="w-full bg-white/10 text-white border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-gray-500 focus:outline-none focus:border-accent transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full bg-white text-foreground py-4 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formStatus === "submitting"
                      ? t("form.submitting")
                      : t("form.submitButton")}
                  </button>
                  <p className="text-center text-xs text-gray-500">
                    {t("form.noCommitment")}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
