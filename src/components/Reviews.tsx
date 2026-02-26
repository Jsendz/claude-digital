import { getTranslations } from "next-intl/server";

const logos = ["Amara", "Atica", "Aven", "CodeLab", "Hexa", "Ideaa", "Light AI"];

export default async function Reviews() {
  const t = await getTranslations("Reviews");

  const testimonials = [0, 1, 2, 3].map((i) => ({
    name: t(`testimonials.${i}.name`),
    role: t(`testimonials.${i}.role`),
    rating: 5.0,
    quote: t(`testimonials.${i}.quote`),
  }));

  return (
    <section id="reviews" className="px-6 md:px-12 lg:px-16 py-24">
      <div className="max-w-[1340px] mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="section-badge">{t("badge")}</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-6 text-muted">
            {t("heading")}
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Trust card */}
          <div className="bg-foreground text-white rounded-2xl p-8 flex flex-col justify-end">
            <div className="flex -space-x-3 mb-4">
              {[0, 1, 2].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-foreground bg-linear-to-br from-gray-400 to-gray-600" />
              ))}
            </div>
            <div className="flex gap-0.5 text-accent text-lg mb-2">
              {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
            </div>
            <p className="font-semibold">{t("trustCount")}</p>
            <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">{t("trustSub")}</p>
            <a href="#contact" className="mt-6 block text-center py-3 rounded-full border border-white/20 text-sm font-medium hover:bg-white/10 transition-colors">
              {t("contactUs")}
            </a>
          </div>

          {/* Testimonial cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5">
            {testimonials.map((item) => (
              <div key={item.name} className="bg-white rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-gray-300 to-gray-500" />
                  <div>
                    <p className="font-semibold text-sm">{item.name}</p>
                    <p className="text-xs text-muted uppercase tracking-wider">{item.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm font-bold">{item.rating}</span>
                  <span className="text-accent text-sm">★★★★★</span>
                  <span className="text-xs text-muted uppercase tracking-wider">Rating</span>
                </div>
                <p className="text-sm leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>

        {/* Logo marquee */}
        <div className="mt-16 overflow-hidden">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-medium text-muted whitespace-nowrap">{t("workedWith")}</span>
          </div>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee gap-16 items-center">
              {[...logos, ...logos].map((logo, i) => (
                <span key={i} className="text-xl font-bold text-foreground whitespace-nowrap opacity-70">{logo}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
