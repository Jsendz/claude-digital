"use client";

import { useState } from "react";
import type { PricingContent } from "@/sanity/lib/types";

const FALLBACK: PricingContent = {
  badge: "Pricing",
  heading: "Flexible Pricing.",
  cta: "Get in touch",
  steps: [
    { title: "Subscribe", description: "Pick a plan that fits your workflow" },
    { title: "Request", description: "Submit tasks via your design portal" },
    { title: "Approve Or Revise", description: "Receive designs in 2-3 business days" },
  ],
  plans: [
    {
      name: "Design Retainer", description: "Great for founders who need fast, reliable design help.",
      price: "$5K", period: "/mo", devAddon: "Development + $1000", dark: false,
      features: ["Unlimited requests", "One request at a time", "Fixed monthly rate", "Async communication", "Flexible scope", "Pause anytime"],
    },
    {
      name: "Single Project", description: "Bring your dream website to life in just days, not months.",
      price: "$10K", period: "+", devAddon: "Development + $5000", dark: true,
      features: ["Dedicated team of experts", "End-to-End Web Development", "Fully Custom Timeline & Scope", "Async communication", "Advanced SEO & Marketing", "Updates every 48 hours"],
    },
  ],
};

const stepIcons = ["📋", "☰", "✓"];

export default function Pricing({ content }: { content: PricingContent | null }) {
  const c = content ?? FALLBACK;
  const [devToggles, setDevToggles] = useState<boolean[]>([false, false]);

  const toggleDev = (index: number) => {
    setDevToggles((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  return (
    <section id="pricing" className="px-6 md:px-12 lg:px-16 py-24">
      <div className="max-w-[1340px] mx-auto">
        <div className="mb-16">
          <span className="section-badge">{c.badge}</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-6 text-muted">{c.heading}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="bg-white rounded-2xl p-7 flex flex-col gap-4">
            {c.steps.map((step, i) => (
              <div key={i} className="bg-card rounded-xl p-5">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xl">{stepIcons[i] ?? "•"}</span>
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

          {c.plans.map((plan, index) => (
            <div key={index} className={`rounded-2xl p-7 flex flex-col ${plan.dark ? "bg-foreground text-white" : "bg-white text-foreground"}`}>
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <div className="text-right">
                  <span className="text-2xl font-bold">{plan.price}</span>
                  <span className={`text-sm ${plan.dark ? "text-gray-400" : "text-muted"}`}>{plan.period}</span>
                </div>
              </div>

              <p className={`text-sm mb-6 ${plan.dark ? "text-gray-400" : "text-muted"}`}>{plan.description}</p>

              <div className={`flex items-center justify-between rounded-xl px-4 py-3 mb-6 ${plan.dark ? "bg-white/10" : "bg-card"}`}>
                <div className="flex items-center gap-2 text-sm font-medium">
                  <span>⚡</span>
                  {plan.devAddon}
                </div>
                <button
                  onClick={() => toggleDev(index)}
                  className={`w-10 h-5 rounded-full relative transition-colors ${devToggles[index] ? "bg-accent" : "bg-gray-300"}`}
                >
                  <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${devToggles[index] ? "translate-x-5" : "translate-x-0.5"}`} />
                </button>
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${plan.dark ? "bg-white/10 text-white" : "bg-card text-foreground"}`}>+</span>
                    <span className={plan.dark ? "text-gray-300" : ""}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className={`block text-center py-4 rounded-full font-medium text-sm transition-colors ${plan.dark ? "bg-white text-foreground hover:bg-gray-100" : "bg-foreground text-white hover:bg-card-dark"}`}>
                {c.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
