import { getTranslations } from "next-intl/server";

const BrandingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const WebDesignIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
    <path d="M7 8l3 3-3 3" />
    <path d="M13 14h4" />
  </svg>
);

const MarketingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

const serviceIcons = [<BrandingIcon key="branding" />, <WebDesignIcon key="web" />, <MarketingIcon key="marketing" />];
const serviceImages = ["/images/branding2.webp", "/images/iphone.jpg", "/images/branding2.webp"];

export default async function Services() {
  const t = await getTranslations("Services");

  const services = [0, 1, 2].map((i) => ({
    icon: serviceIcons[i],
    image: serviceImages[i],
    title: t(`items.${i}.title`),
    description: t(`items.${i}.description`),
    tags: [0, 1, 2, 3].map((j) => t(`items.${i}.tags.${j}`)),
  }));

  return (
    <section id="services" className="px-6 md:px-12 lg:px-16 py-24">
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

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="relative rounded-2xl p-3 flex flex-col gap-3 overflow-hidden border border-white/6 hover:shadow-2xl hover:shadow-green-900/20 transition-all duration-300"
            >
              {/* Background image */}
              <img
                src="/images/service-bg.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />

              {/* Content panel */}
              <div className="relative z-10 flex flex-col gap-5 rounded-xl p-5 bg-[#f0f0f0]">
                {/* Top row: icon + service badge */}
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-foreground text-accent flex items-center justify-center">
                    {service.icon}
                  </div>
                  <span className="text-xs font-semibold tracking-wider text-foreground/50 border border-foreground/10 bg-foreground/5 px-3 py-1 rounded-lg">
                    {t("serviceLabel")} {i + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold">{service.title}</h3>

                <p className="text-muted text-sm leading-relaxed">{service.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-foreground/60 border border-foreground/10 px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Preview image */}
              <div className="relative z-10 w-full rounded-xl overflow-hidden">
                <img
                  src={service.image}
                  alt=""
                  className="w-full object-cover h-44 rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
