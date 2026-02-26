"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("Contact");
  const [pricingModel, setPricingModel] = useState("retainer");

  return (
    <section id="contact" className="px-6 md:px-12 lg:px-16 py-24">
      <div className="max-w-[1340px] mx-auto">
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
                <p className="font-semibold text-sm">+1-555-123-4567</p>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-foreground rounded-2xl p-8">
            <form className="space-y-5">
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  {t("formName")}
                </label>
                <input
                  type="text"
                  placeholder={t("formNamePlaceholder")}
                  className="w-full bg-white/10 text-white border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-gray-500 focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  {t("formEmail")}
                </label>
                <input
                  type="email"
                  placeholder={t("formEmailPlaceholder")}
                  className="w-full bg-white/10 text-white border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-gray-500 focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  {t("formWebsite")}
                </label>
                <input
                  type="url"
                  placeholder={t("formWebsitePlaceholder")}
                  className="w-full bg-white/10 text-white border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-gray-500 focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  {t("formMessage")}
                </label>
                <textarea
                  placeholder={t("formMessagePlaceholder")}
                  rows={4}
                  className="w-full bg-white/10 text-white border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-gray-500 focus:outline-none focus:border-accent transition-colors resize-vertical"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-foreground py-4 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors"
              >
                {t("formSubmit")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
