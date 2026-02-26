"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

const stepIcons = ["📋", "☰", "✓"];
const planPrices = [
  { price: "$5K", period: "/mo", dark: false },
  { price: "$10K", period: "+", dark: true },
];

export default function Pricing() {
  const t = useTranslations("Pricing");
  const [devToggles, setDevToggles] = useState<boolean[]>([false, false]);

  const toggleDev = (index: number) => {
    setDevToggles((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  const steps = [0, 1, 2].map((i) => ({
    icon: stepIcons[i],
    title: t(`steps.${i}.title`),
    description: t(`steps.${i}.description`),
  }));

  const plans = [0, 1].map((i) => ({
    ...planPrices[i],
    name: t(`plans.${i}.name`),
    description: t(`plans.${i}.description`),
    devAddon: t(`plans.${i}.devAddon`),
    features: [0, 1, 2, 3, 4, 5].map((j) => t(`plans.${i}.features.${j}`)),
  }));

  return (
    <section id="pricing" className="px-6 md:px-12 lg:px-16 py-24">
      <div className="max-w-[1340px] mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="section-badge">{t("badge")}</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-6 text-muted">
            {t("heading")}
          </h2>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* How it works column */}
          <div className="bg-white rounded-2xl p-7 flex flex-col gap-4">
            {steps.map((step, i) => (
              <div key={i} className="bg-card rounded-xl p-5">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xl">{step.icon}</span>
                  <div className="flex gap-1">
                    {Array.from({ length: i + 1 }).map((_, j) => (
                      <span key={j} className="w-2 h-2 rounded-full bg-accent" />
                    ))}
                  </div>
                </div>
                <h4 className="font-bold text-base mb-1">{step.title}</h4>
                <p className="text-muted text-sm">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Plan cards */}
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-7 flex flex-col ${
                plan.dark ? "bg-foreground text-white" : "bg-white text-foreground"
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <div className="text-right">
                  <span className="text-2xl font-bold">{plan.price}</span>
                  <span className={`text-sm ${plan.dark ? "text-gray-400" : "text-muted"}`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <p className={`text-sm mb-6 ${plan.dark ? "text-gray-400" : "text-muted"}`}>
                {plan.description}
              </p>

              {/* Dev addon toggle */}
              <div className={`flex items-center justify-between rounded-xl px-4 py-3 mb-6 ${plan.dark ? "bg-white/10" : "bg-card"}`}>
                <div className="flex items-center gap-2 text-sm font-medium">
                  <span>⚡</span>
                  {plan.devAddon}
                </div>
                <button
                  onClick={() => toggleDev(index)}
                  className={`w-10 h-5 rounded-full relative transition-colors ${devToggles[index] ? "bg-accent" : "bg-gray-300"}`}
                >
                  <span
                    className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${devToggles[index] ? "translate-x-5" : "translate-x-0.5"}`}
                  />
                </button>
              </div>

              {/* Features */}
              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${plan.dark ? "bg-white/10 text-white" : "bg-card text-foreground"}`}>
                      +
                    </span>
                    <span className={plan.dark ? "text-gray-300" : ""}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`block text-center py-4 rounded-full font-medium text-sm transition-colors ${
                  plan.dark
                    ? "bg-white text-foreground hover:bg-gray-100"
                    : "bg-foreground text-white hover:bg-[#0a3d1a]"
                }`}
              >
                {t("cta")}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
