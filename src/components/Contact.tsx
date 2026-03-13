"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

type FormState = {
  name: string;
  email: string;
  website: string;
  message: string;
};

export default function Contact() {
  const t = useTranslations("Contact");

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    website: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<FormState>>({});

  function validate(): boolean {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = "Required";
    if (!form.email.trim()) {
      next.email = "Required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Invalid email";
    }
    if (!form.message.trim()) next.message = "Required";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", website: "", message: "" });
        setErrors({});
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  const inputClass = (field: keyof FormState) =>
    `w-full bg-white/10 text-white border rounded-xl px-4 py-3 text-sm placeholder:text-gray-500 focus:outline-none transition-colors ${
      errors[field] ? "border-red-400 focus:border-red-400" : "border-white/10 focus:border-accent"
    }`;

  return (
    <section id="contact" className="px-6 md:px-12 lg:px-16 py-24">
      <div className="max-w-335 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left */}
          <div>
            <span className="section-badge">{t("badge")}</span>
            <h2 className="text-5xl md:text-6xl font-bold mt-6">
              {t("heading")}
            </h2>
            <p className="mt-4 text-muted max-w-sm">{t("description")}</p>

            {/* Contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              <div className="bg-white rounded-xl p-5">
                <div className="flex items-start justify-between mb-6">
                  <span className="text-lg">✉️</span>
                  <span className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <p className="text-xs text-muted uppercase tracking-wider mb-1">
                  {t("chatToSales")}
                </p>
                <p className="font-semibold text-sm">info@jhdigitalservices.com</p>
              </div>

              <div className="bg-white rounded-xl p-5">
                <div className="flex items-start justify-between mb-6">
                  <span className="text-lg">📞</span>
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                </div>
                <p className="text-xs text-muted uppercase tracking-wider mb-1">
                  {t("callUs")}
                </p>
                <p className="font-semibold text-sm">+3348724599</p>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-foreground rounded-2xl p-8">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12 gap-4">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center text-3xl">
                  ✓
                </div>
                <h3 className="text-white text-2xl font-bold">{t("formSuccessTitle")}</h3>
                <p className="text-gray-400 text-sm max-w-xs">{t("formSuccessDesc")}</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-sm text-accent underline underline-offset-4"
                >
                  {t("formSuccessReset")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    {t("formName")}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t("formNamePlaceholder")}
                    className={inputClass("name")}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    {t("formEmail")}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={t("formEmailPlaceholder")}
                    className={inputClass("email")}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    {t("formWebsite")}
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={form.website}
                    onChange={handleChange}
                    placeholder={t("formWebsitePlaceholder")}
                    className={inputClass("website")}
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    {t("formMessage")}
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder={t("formMessagePlaceholder")}
                    rows={4}
                    className={inputClass("message")}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400">{errors.message}</p>
                  )}
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-400">{t("formError")}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-white text-foreground py-4 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? t("formSending") : t("formSubmit")}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
