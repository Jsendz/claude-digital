"use client";

import { useState } from "react";

export type ContactLabels = {
  fieldName: string; fieldEmail: string; fieldPhone: string; fieldCompany: string;
  fieldService: string;
  phName: string; phEmail: string; phPhone: string; phCompany: string;
  selectDefault: string; optBranding: string; optWeb: string;
  optMarketing: string; optUnsure: string;
  submitNote: string; submitButton: string; sending: string;
  successTitle: string; successText: string; errorText: string;
};

type FormState = { name: string; email: string; phone: string; company: string; service: string };

export default function ContactForm({ labels, locale }: { labels: ContactLabels; locale?: string }) {
  const [form, setForm] = useState<FormState>({
    name: "", email: "", phone: "", company: "", service: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function validate() {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Required";
    if (!form.email.trim()) { next.email = "Required"; }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { next.email = "Invalid email"; }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, locale }),
      });
      if (res.ok) { setStatus("success"); setForm({ name: "", email: "", phone: "", company: "", service: "" }); setErrors({}); }
      else { setStatus("error"); }
    } catch { setStatus("error"); }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  if (status === "success") {
    return (
      <form className="ct-form">
        <div className="ct-success">
          <h3>{labels.successTitle}</h3>
          <p>{labels.successText}</p>
        </div>
      </form>
    );
  }

  return (
    <form className="ct-form" onSubmit={handleSubmit} noValidate>
      <div className="ct-field">
        <label htmlFor="ct-name">{labels.fieldName}</label>
        <input id="ct-name" name="name" type="text" required placeholder={labels.phName}
          value={form.name} onChange={handleChange}
          style={errors.name ? { borderColor: "#dc2626" } : undefined} />
      </div>

      <div className="ct-field">
        <label htmlFor="ct-email">{labels.fieldEmail}</label>
        <input id="ct-email" name="email" type="email" required placeholder={labels.phEmail}
          value={form.email} onChange={handleChange}
          style={errors.email ? { borderColor: "#dc2626" } : undefined} />
      </div>

      <div className="ct-field">
        <label htmlFor="ct-phone">{labels.fieldPhone}</label>
        <input id="ct-phone" name="phone" type="tel" placeholder={labels.phPhone}
          value={form.phone} onChange={handleChange} />
      </div>

      <div className="ct-field">
        <label htmlFor="ct-company">{labels.fieldCompany}</label>
        <input id="ct-company" name="company" type="text" placeholder={labels.phCompany}
          value={form.company} onChange={handleChange} />
      </div>

      <div className="ct-field full">
        <label htmlFor="ct-service">{labels.fieldService}</label>
        <select id="ct-service" name="service" value={form.service} onChange={handleChange}>
          <option value="">{labels.selectDefault}</option>
          <option value="branding">{labels.optBranding}</option>
          <option value="web">{labels.optWeb}</option>
          <option value="marketing">{labels.optMarketing}</option>
          <option value="unsure">{labels.optUnsure}</option>
        </select>
      </div>

      {status === "error" && <div className="ct-error">{labels.errorText}</div>}

      <div className="ct-submit-row">
        <span className="ct-note">{labels.submitNote}</span>
        <button type="submit" className="btn-submit" disabled={status === "sending"}>
          {status === "sending" ? labels.sending : labels.submitButton}
          <span className="btn-arr-w">→</span>
        </button>
      </div>
    </form>
  );
}
