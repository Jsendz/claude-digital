"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function FAQ() {
  const t = useTranslations("FAQ");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [0, 1, 2, 3, 4, 5].map((i) => ({
    question: t(`items.${i}.question`),
    answer: t(`items.${i}.answer`),
  }));

  return (
    <section id="faqs" className="px-6 md:px-12 lg:px-16 py-24">
      <div className="max-w-[1340px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <span className="section-badge">{t("badge")}</span>
            <h2 className="text-5xl md:text-6xl font-bold mt-6 text-muted">
              {t("heading")}
            </h2>
          </div>

          {/* Right - Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-semibold text-sm md:text-base pr-4">
                    {faq.question}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      openIndex === index ? "bg-accent text-white" : "bg-card text-foreground"
                    }`}
                  >
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="px-6 text-muted text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
