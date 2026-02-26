import { getTranslations } from "next-intl/server";

const benefitIcons = ["$", "⚡", "∞", "↗", "✦", "📊"];

export default async function Benefits() {
  const t = await getTranslations("Benefits");

  const benefits = [0, 1, 2, 3, 4, 5].map((i) => ({
    icon: benefitIcons[i],
    dots: i + 1,
    title: t(`items.${i}.title`),
    description: t(`items.${i}.description`),
  }));

  return (
    <section id="benefits" className="px-6 md:px-12 lg:px-16 py-24">
      <div className="max-w-[1340px] mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div>
            <span className="section-badge">{t("badge")}</span>
            <h2 className="text-5xl md:text-6xl font-bold mt-6">
              {t("heading")}
            </h2>
          </div>
          <p className="text-muted max-w-sm text-lg">{t("description")}</p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-[url('/images/service-bg.png')] p-3 rounded-2xl">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white rounded-2xl p-7 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="text-2xl font-bold text-foreground">
                  {benefit.icon}
                </span>
                <div className="flex gap-1">
                  {Array.from({ length: benefit.dots }).map((_, i) => (
                    <span key={i} className="w-2 h-2 rounded-full bg-accent" />
                  ))}
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
              <p className="text-muted text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
