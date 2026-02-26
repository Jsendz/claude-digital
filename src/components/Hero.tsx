import { getTranslations } from "next-intl/server";

export default async function Hero() {
  const t = await getTranslations("Hero");

  return (
    <section className="relative min-h-screen overflow-hidden px-6 md:px-12 lg:px-16">
      <div className="max-w-[1340px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-6 items-start">
        {/* Left Content */}
        <div className="flex flex-col justify-center pt-32 lg:pt-40 pb-16">
          <span className="section-badge w-fit mb-8">
            {t("badge")}
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-[4rem] font-bold leading-[1.05] tracking-tight text-foreground">
            {t("heading1")}
            <br />
            {t("heading2")}
            <br />
            {" "}
            <span className="text-accent italic">{t("headingAccent")}</span>
          </h1>

          <p className="mt-6 text-muted text-lg max-w-md">
            {t("paragraph")}
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 bg-accent text-white px-7 py-3.5 rounded-full font-medium text-sm hover:bg-accent-hover transition-colors"
            >
              {t("cta1")}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-foreground text-white px-7 py-3.5 rounded-full font-medium text-sm hover:bg-[#0a3d1a] transition-colors"
            >
              {t("cta2")}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Trust bar */}
          <div className="flex items-center gap-4 mt-12">
            <div className="flex -space-x-3">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-background bg-linear-to-br from-gray-300 to-gray-500 overflow-hidden"
                />
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 text-accent text-sm">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
              <p className="text-sm font-semibold">{t("trustCount")}</p>
              <p className="text-xs text-muted uppercase tracking-wider">
                {t("trustSub")}
              </p>
            </div>
          </div>
        </div>

        {/* Right Image Grid */}
        <div className="grid grid-cols-2 gap-3 pt-12 lg:-mt-4 pb-8">
          <div className="rounded-2xl overflow-hidden h-64 relative">
            <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80" alt="Web design on laptop" className="w-full h-full object-cover" />
            <div className="absolute bottom-3 left-3 bg-yellow-400 text-xs font-bold px-3 py-1 rounded-full">NEW!</div>
          </div>
          <div className="rounded-2xl overflow-hidden h-64 relative">
            <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80" alt="UI/UX design interface" className="w-full h-full object-cover" />
            <div className="absolute bottom-3 left-3 bg-yellow-400 text-xs font-bold px-3 py-1 rounded-full">NEW!</div>
          </div>
          <div className="rounded-2xl overflow-hidden h-64">
            <img src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80" alt="Creative design workspace" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden h-64">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" alt="Web analytics dashboard" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden h-64">
            <img src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&q=80" alt="Brand identity design" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden h-64">
            <img src="https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&q=80" alt="Branding materials layout" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
