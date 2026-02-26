import { getTranslations } from "next-intl/server";

const projectImages = [
  "/images/jh.png",
  "/images/ecco.png",
  "/images/tsh.png",
  "/images/jhmock.png",
  "/images/eccomock.png",
];

export default async function Work() {
  const t = await getTranslations("Work");

  const projects = projectImages.map((image, i) => ({
    image,
    label: t(`projects.${i}.label`),
  }));

  return (
    <section id="work" className="px-6 md:px-12 lg:px-16 py-24">
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

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden h-72 md:h-96 cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  {project.label}
                </span>
                <span className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
