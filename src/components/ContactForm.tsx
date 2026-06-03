"use client";

import { useState } from "react";

export type ContactLabels = {
  fieldName: string; fieldEmail: string; fieldCompany: string;
  fieldService: string; fieldBudget: string; fieldMessage: string;
  phName: string; phEmail: string; phCompany: string; phMessage: string;
  selectDefault: string; optBranding: string; optWeb: string;
  optMarketing: string; optUnsure: string;
  budgetOptions: string[];
  submitNote: string; submitButton: string; sending: string;
  successTitle: string; successText: string; errorText: string;
};

type FormState = { name: string; email: string; company: string; service: string; budget: string; message: string };

export default function ContactForm({ labels }: { labels: ContactLabels }) {
  const [form, setForm] = useState<FormState>({
    name: "", email: "", company: "", service: "", budget: labels.budgetOptions[1] ?? "", message: "",
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
        body: JSON.stringify(form),
      });
      if (res.ok) { setStatus("success"); setForm({ name: "", email: "", company: "", service: "", budget: labels.budgetOptions[1] ?? "", message: "" }); setErrors({}); }
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

      <div className="ct-field full">
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

      <div className="ct-field full">
        <label>{labels.fieldBudget}</label>
        <div className="ct-chips">
          {labels.budgetOptions.map((opt) => (
            <span key={opt}>
              <input className="ct-chip-input" type="radio" name="budget"
                id={`budget-${opt}`} value={opt} checked={form.budget === opt} onChange={handleChange} />
              <label className="ct-chip-label" htmlFor={`budget-${opt}`}>{opt}</label>
            </span>
          ))}
        </div>
      </div>

      <div className="ct-field full">
        <label htmlFor="ct-msg">{labels.fieldMessage}</label>
        <textarea id="ct-msg" name="message" placeholder={labels.phMessage}
          value={form.message} onChange={handleChange} />
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
