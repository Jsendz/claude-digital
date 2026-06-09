import Image from "next/image";

type WorkHeader = {
  eyebrow: string; eyebrowSub: string;
  titleBefore: string; titleEm: string; titleAfter: string;
  metaBold: string; metaText: string;
};

const HEADERS: Record<string, WorkHeader> = {
  en: {
    eyebrow: "04 · WORK", eyebrowSub: "Selected projects",
    titleBefore: "Recent ", titleEm: "work,", titleAfter: "from across the world.",
    metaBold: "24 projects shipped", metaText: "in the last 18 months. A handful below.",
  },
  es: {
    eyebrow: "04 · PROYECTOS", eyebrowSub: "Proyectos seleccionados",
    titleBefore: "Trabajo ", titleEm: "reciente,", titleAfter: "de todo el mundo.",
    metaBold: "24 proyectos entregados", metaText: "en los últimos 18 meses. Aquí, algunos.",
  },
  fr: {
    eyebrow: "04 · TRAVAUX", eyebrowSub: "Projets sélectionnés",
    titleBefore: "Travaux ", titleEm: "récents,", titleAfter: "du monde entier.",
    metaBold: "24 projets livrés", metaText: "ces 18 derniers mois. En voici quelques-uns.",
  },
  ca: {
    eyebrow: "04 · TREBALL", eyebrowSub: "Projectes seleccionats",
    titleBefore: "Feina ", titleEm: "recent,", titleAfter: "d'arreu del món.",
    metaBold: "24 projectes lliurats", metaText: "els últims 18 mesos. Aquí, uns quants.",
  },
};

const TILES = [
  { tileClass: "pf-t1",       bgClass: "pf-a", image:"/images/tamy.png", label: "2026 · BRAND IDENTITY",  nameParts: ["Solenne ",  "candles"], slug: "work/solenne" },
  { tileClass: "pf-t2 light", bgClass: "pf-c", image:"", label: "2025 · WEB DESIGN",       nameParts: ["Northwind ", "app"],     slug: "" },
  { tileClass: "pf-t3",       bgClass: "pf-b", image:"", label: "2025 · CAMPAIGN",          nameParts: ["Atelier ",  "Vermeer"], slug: "" },
  { tileClass: "pf-t4",       bgClass: "pf-d", image:"", label: "2024 · IDENTITY · WEB",    nameParts: ["Halo ",     "credit"],  slug: "" },
  { tileClass: "pf-t5",       bgClass: "pf-e", image:"", label: "2024 · PACKAGING",         nameParts: ["Maison ",   "Faure"],   slug: "" },
];

export default async function Work({ locale }: { locale: string }) {
  const h = HEADERS[locale] ?? HEADERS.en;

  return (
    <section className="pf-section">
      <div className="glow tl very-faint" />
      <div className="pf-inner">
        <header className="sec-head">
          <div className="sec-head-left">
            <div className="eyebrow">
              <span className="led" />
              <span>{h.eyebrow}</span>
              <span className="esep">/</span>
              <span>{h.eyebrowSub}</span>
            </div>
            <h2 className="sec-title">
              {h.titleBefore}<span className="em">{h.titleEm}</span>
              <br />{h.titleAfter}
            </h2>
          </div>
          <p className="head-meta">
            <span className="v">{h.metaBold}</span>{" "}{h.metaText}
          </p>
        </header>

        <div className="pf-grid">
          {TILES.map((tile, i) => {
            const href = tile.slug
              ? (locale === "en" ? `/${tile.slug}` : `/${locale}/${tile.slug}`)
              : "#";
            return (
              <a key={i} href={href} className={`pf-tile ${tile.tileClass}`}>
                <div className={`pf-bg ${tile.bgClass}`}>
                  {tile.image && (
                    <Image
                      src={tile.image}
                      alt={tile.nameParts.join("")}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 720px) 100vw, 50vw"
                    />
                  )}
                </div>
                <span className="pf-arrow">↗</span>
                <div className="pf-meta">
                  <p className="pf-label">{tile.label}</p>
                  <p className="pf-name">
                    {tile.nameParts[0]}
                    <span className="it">{tile.nameParts[1]}</span>
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
