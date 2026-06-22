"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { useModal } from "@/context/ModalContext";

/* ── Icons ─────────────────────────────────────────────── */
const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
    <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const CheckIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
    <circle cx="14" cy="14" r="14" fill="var(--orange, #FF4000)" opacity=".12" />
    <path d="M8 14l4 4 8-8" stroke="var(--orange, #FF4000)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── Styles ─────────────────────────────────────────────── */
const S = {
  overlay: {
    position: "fixed" as const,
    inset: 0,
    zIndex: 9999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px",
    background: "rgba(0,0,0,0.55)",
    backdropFilter: "blur(4px)",
    animation: "am-overlay-in 0.2s ease",
  },
  panel: {
    position: "relative" as const,
    background: "#fff",
    borderRadius: 20,
    width: "100%",
    maxWidth: 500,
    maxHeight: "90vh",
    overflowY: "auto" as const,
    boxShadow: "0 32px 80px -16px rgba(0,0,0,0.28), 0 0 0 1px rgba(0,0,0,0.06)",
    animation: "am-panel-in 0.24s cubic-bezier(0.22, 1, 0.36, 1)",
  },
  accentBar: {
    height: 3,
    background: "var(--orange, #FF4000)",
    borderRadius: "20px 20px 0 0",
  },
  body: {
    padding: "32px 32px 36px",
  },
  closeBtn: {
    position: "absolute" as const,
    top: 16,
    right: 16,
    width: 32,
    height: 32,
    borderRadius: "50%",
    border: "1.5px solid rgba(0,0,0,0.10)",
    background: "rgba(0,0,0,0.03)",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "rgba(0,0,0,0.45)",
    transition: "background 0.15s, border-color 0.15s",
    flexShrink: 0 as const,
  },
  eyebrow: {
    display: "inline-flex",
    alignItems: "center",
    gap: 7,
    padding: "5px 13px",
    borderRadius: 999,
    border: "1px solid var(--line, rgba(4,4,4,0.10))",
    background: "var(--lp-paper, #FBFBFB)",
    fontFamily: "var(--font-mono, ui-monospace, monospace)",
    fontSize: 10,
    letterSpacing: "0.14em",
    textTransform: "uppercase" as const,
    color: "var(--ink-mid, rgba(4,4,4,0.62))",
    marginBottom: 14,
  },
  eyebrowDot: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: "var(--orange, #FF4000)",
    boxShadow: "0 0 0 3px rgba(255,64,0,0.15)",
    flexShrink: 0 as const,
  },
  heading: {
    fontFamily: "var(--font-inter, system-ui, sans-serif)",
    fontWeight: 500,
    fontSize: "clamp(1.35rem, 4vw, 1.65rem)",
    lineHeight: 1.15,
    letterSpacing: "-0.025em",
    color: "var(--mirage, #040404)",
    margin: "0 0 28px",
  },
  fieldGroup: {
    display: "flex",
    flexDirection: "column" as const,
    gap: 6,
    marginBottom: 16,
  },
  label: {
    fontFamily: "var(--font-mono, ui-monospace, monospace)",
    fontSize: 10,
    fontWeight: 500,
    letterSpacing: "0.16em",
    textTransform: "uppercase" as const,
    color: "var(--ink-mut, rgba(4,4,4,0.40))",
  },
  input: {
    width: "100%",
    padding: "12px 14px",
    background: "var(--sand, #FBFBFB)",
    border: "1.5px solid transparent",
    borderRadius: 12,
    color: "var(--mirage, #040404)",
    fontFamily: "var(--font-body, system-ui, sans-serif)",
    fontSize: 15,
    outline: "none",
    transition: "border-color 0.18s, background 0.18s",
    boxSizing: "border-box" as const,
  },
  inputFocus: {
    borderColor: "var(--orange, #FF4000)",
    background: "#fff",
  },
  textarea: {
    width: "100%",
    padding: "12px 14px",
    background: "var(--sand, #FBFBFB)",
    border: "1.5px solid transparent",
    borderRadius: 12,
    color: "var(--mirage, #040404)",
    fontFamily: "var(--font-body, system-ui, sans-serif)",
    fontSize: 15,
    outline: "none",
    resize: "vertical" as const,
    lineHeight: 1.5,
    minHeight: 100,
    transition: "border-color 0.18s, background 0.18s",
    boxSizing: "border-box" as const,
  },
  divider: {
    height: 1,
    background: "var(--line, rgba(4,4,4,0.08))",
    margin: "20px 0",
  },
  errorBox: {
    padding: "10px 14px",
    background: "rgba(220,38,38,0.07)",
    borderRadius: 10,
    color: "#dc2626",
    fontSize: 13,
    lineHeight: 1.45,
    marginBottom: 16,
  },
  submitBtn: {
    width: "100%",
    justifyContent: "center",
  },
  microcopy: {
    marginTop: 12,
    textAlign: "center" as const,
    fontFamily: "var(--font-mono, ui-monospace, monospace)",
    fontSize: 10,
    letterSpacing: "0.14em",
    textTransform: "uppercase" as const,
    color: "var(--ink-mut, rgba(4,4,4,0.40))",
  },
  successWrap: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    textAlign: "center" as const,
    gap: 12,
    padding: "24px 0 8px",
  },
  successText: {
    fontSize: 15,
    lineHeight: 1.6,
    color: "var(--ink-mid, rgba(4,4,4,0.62))",
    maxWidth: "36ch",
    margin: 0,
  },
};

/* ── Component ─────────────────────────────────────────── */
type FormState = { name: string; email: string; url: string; frustration: string };

export function AuditModal() {
  const { isOpen, closeModal } = useModal();
  const t = useTranslations("landing.form");

  const [form, setForm] = useState<FormState>({ name: "", email: "", url: "", frustration: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const firstInputRef = useRef<HTMLInputElement>(null);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Focus first input on open
  useEffect(() => {
    if (isOpen) setTimeout(() => firstInputRef.current?.focus(), 60);
  }, [isOpen]);

  // Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
    if (isOpen) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, closeModal]);

  // Auto-close after success
  useEffect(() => {
    if (!submitted) return;
    const t = setTimeout(() => {
      closeModal();
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: "", email: "", url: "", frustration: "" });
      }, 300);
    }, 3000);
    return () => clearTimeout(t);
  }, [submitted, closeModal]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(false);
    try {
      const res = await fetch("/api/audit-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre: form.name, email: form.email, websiteUrl: form.url, frustration: form.frustration }),
      });
      if (res.ok) setSubmitted(true);
      else setSubmitError(true);
    } catch {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle = (id: string) => ({
    ...S.input,
    ...(focused === id ? S.inputFocus : {}),
  });

  const textareaStyle = (id: string) => ({
    ...S.textarea,
    ...(focused === id ? S.inputFocus : {}),
  });

  if (!isOpen) return null;

  return (
    <div
      style={S.overlay}
      onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
      role="dialog"
      aria-modal="true"
      aria-label={t("h2")}
    >
      <div style={S.panel}>
        {/* Orange accent bar */}
        <div style={S.accentBar} />

        {/* Close button */}
        <button
          onClick={closeModal}
          aria-label="Close"
          style={S.closeBtn}
          onMouseEnter={(e) => {
            Object.assign((e.currentTarget as HTMLElement).style, { background: "rgba(0,0,0,0.07)", borderColor: "rgba(0,0,0,0.16)" });
          }}
          onMouseLeave={(e) => {
            Object.assign((e.currentTarget as HTMLElement).style, { background: "rgba(0,0,0,0.03)", borderColor: "rgba(0,0,0,0.10)" });
          }}
        >
          <XIcon />
        </button>

        <div style={S.body}>
          {/* Eyebrow */}
          <div style={S.eyebrow}>
            <span style={S.eyebrowDot} />
            {t("eyebrow")}
          </div>

          {/* Heading */}
          <h2 style={S.heading}>{t("h2")}</h2>

          {submitted ? (
            <div style={S.successWrap}>
              <CheckIcon />
              <p style={S.successText}>{t("success")}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>

              {/* Name */}
              <div style={S.fieldGroup}>
                <label htmlFor="am-name" style={S.label}>
                  {t("fields.name.label")}<span aria-hidden> *</span>
                </label>
                <input
                  ref={firstInputRef}
                  id="am-name"
                  type="text"
                  placeholder={t("fields.name.placeholder")}
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  required
                  autoComplete="name"
                  style={inputStyle("name")}
                />
              </div>

              {/* Email */}
              <div style={S.fieldGroup}>
                <label htmlFor="am-email" style={S.label}>
                  {t("fields.email.label")}<span aria-hidden> *</span>
                </label>
                <input
                  id="am-email"
                  type="email"
                  placeholder={t("fields.email.placeholder")}
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  required
                  autoComplete="email"
                  style={inputStyle("email")}
                />
              </div>

              {/* URL */}
              <div style={S.fieldGroup}>
                <label htmlFor="am-url" style={S.label}>
                  {t("fields.url.label")}<span aria-hidden> *</span>
                </label>
                <input
                  id="am-url"
                  type="url"
                  placeholder={t("fields.url.placeholder")}
                  value={form.url}
                  onChange={(e) => setForm((f) => ({ ...f, url: e.target.value }))}
                  onFocus={() => setFocused("url")}
                  onBlur={() => setFocused(null)}
                  required
                  autoComplete="url"
                  style={inputStyle("url")}
                />
              </div>

              <div style={S.divider} />

              {/* Frustration */}
              <div style={{ ...S.fieldGroup, marginBottom: 20 }}>
                <label htmlFor="am-frustration" style={S.label}>
                  {t("fields.frustration.label")}
                </label>
                <textarea
                  id="am-frustration"
                  placeholder={t("fields.frustration.placeholder")}
                  value={form.frustration}
                  onChange={(e) => setForm((f) => ({ ...f, frustration: e.target.value }))}
                  onFocus={() => setFocused("frustration")}
                  onBlur={() => setFocused(null)}
                  style={textareaStyle("frustration")}
                />
              </div>

              {submitError && (
                <div style={S.errorBox} role="alert">
                  {t("error")}
                </div>
              )}

              <button
                type="submit"
                className="lp-btn lp-btn-primary lg"
                disabled={submitting}
                style={S.submitBtn}
              >
                {submitting ? t("submitting") : t("submit")}
                {!submitting && <span className="lp-arr"><ArrowRight /></span>}
              </button>

              <p style={S.microcopy}>{t("microcopy")}</p>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @keyframes am-overlay-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes am-panel-in {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}
