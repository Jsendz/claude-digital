type Card = { mark: string; num: string; heading: string; em: string; body: string };
type WhyContent = {
  eyebrow: string; eyebrowSub: string;
  titleLine1: string; titleLine2: string; titleEm: string;
  metaBold: string; metaText: string;
  cards: Card[];
};

const WHY: Record<string, WhyContent> = {
  en: {
    eyebrow: "03 · WHY LUMIQ", eyebrowSub: "How we differ",
    titleLine1: "A studio built", titleLine2: "to be", titleEm: "trusted.",
    metaBold: "Nine reasons", metaText: "founders, marketers and product teams come back.",
    cards: [
      { mark: "01", num: "PROCESS",  heading: "End-to-end ",   em: "ownership", body: "One team from strategy to launch — no hand-offs, no information lost in translation." },
      { mark: "02", num: "PEOPLE",   heading: "Senior ",        em: "only",      body: "Every project led by founders and senior designers. You'll never get juniored." },
      { mark: "03", num: "SPEED",    heading: "Sprints, not ",  em: "months",    body: "Tight cycles with weekly milestones. Most engagements ship in four to ten weeks." },
      { mark: "04", num: "CRAFT",    heading: "Built ",         em: "to last",   body: "Systems-thinking from day one. Brands that age into themselves, not out of trend." },
      { mark: "05", num: "FOCUS",    heading: "Small ",         em: "batch",     body: "We take four clients at a time. Yours gets the bandwidth and care it deserves." },
      { mark: "06", num: "RESULT",   heading: "Designed to ",   em: "convert",   body: "Beautiful is the floor. Work that moves a metric is the ceiling we aim for." },
      { mark: "07", num: "FIT",      heading: "Embedded ",      em: "partners",  body: "We act like an in-house team — async-friendly, shared Slack, transparent timelines." },
      { mark: "08", num: "REACH",    heading: "Beyond the ",    em: "launch",    body: "Retainers, refreshes, and growth experiments long after the brand is live." },
      { mark: "09", num: "PROMISE",  heading: "Honest ",        em: "always",    body: "Straight talk on scope, timing, and trade-offs. No surprises, no padded invoices." },
    ],
  },
  es: {
    eyebrow: "03 · POR QUÉ LUMIQ", eyebrowSub: "Nuestra diferencia",
    titleLine1: "Un estudio creado", titleLine2: "para ser", titleEm: "de confianza.",
    metaBold: "Nueve razones", metaText: "por las que fundadores, marketers y equipos de producto repiten.",
    cards: [
      { mark: "01", num: "PROCESO",   heading: "Propiedad ",       em: "integral",    body: "Un equipo de la estrategia al lanzamiento — sin traspasos ni información perdida." },
      { mark: "02", num: "EQUIPO",    heading: "Solo ",            em: "seniors",     body: "Cada proyecto liderado por fundadores y diseñadores senior. Sin juniors." },
      { mark: "03", num: "VELOCIDAD", heading: "Sprints, no ",     em: "meses",       body: "Ciclos ágiles con hitos semanales. La mayoría de proyectos se entregan en 4-10 semanas." },
      { mark: "04", num: "OFICIO",    heading: "Construido para ", em: "durar",       body: "Pensamiento sistémico desde el primer día. Marcas que se afianzan con el tiempo." },
      { mark: "05", num: "FOCO",      heading: "Pequeño ",         em: "volumen",     body: "Aceptamos cuatro clientes a la vez. El tuyo recibe la atención que merece." },
      { mark: "06", num: "RESULTADO", heading: "Diseñado para ",   em: "convertir",   body: "Lo bonito es el mínimo. El trabajo que mueve métricas es el techo al que apuntamos." },
      { mark: "07", num: "ENCAJE",    heading: "Partners ",        em: "integrados",  body: "Actuamos como equipo interno — asíncrono, Slack compartido, plazos transparentes." },
      { mark: "08", num: "ALCANCE",   heading: "Más allá del ",    em: "lanzamiento", body: "Retainers, actualizaciones y experimentos de crecimiento mucho después del lanzamiento." },
      { mark: "09", num: "PROMESA",   heading: "Honestidad ",      em: "total",       body: "Transparencia total sobre alcance, tiempos y compromisos. Sin sorpresas ni facturas infladas." },
    ],
  },
  fr: {
    eyebrow: "03 · POURQUOI LUMIQ", eyebrowSub: "Ce qui nous différencie",
    titleLine1: "Un studio conçu", titleLine2: "pour être", titleEm: "de confiance.",
    metaBold: "Neuf raisons", metaText: "pour lesquelles fondateurs, marketeurs et équipes produit reviennent.",
    cards: [
      { mark: "01", num: "PROCESSUS",   heading: "Pilotage ",        em: "total",      body: "Une seule équipe de la stratégie au lancement — sans transferts ni perte d'informations." },
      { mark: "02", num: "ÉQUIPE",      heading: "Uniquement ",      em: "senior",     body: "Chaque projet piloté par des fondateurs et designers seniors. Jamais de juniors." },
      { mark: "03", num: "RAPIDITÉ",    heading: "Sprints, pas ",    em: "de mois",    body: "Cycles courts avec jalons hebdomadaires. La plupart des missions livrées en 4-10 semaines." },
      { mark: "04", num: "MÉTIER",      heading: "Conçu pour ",      em: "durer",      body: "Approche systémique dès le premier jour. Des marques qui s'affirment avec le temps." },
      { mark: "05", num: "FOCUS",       heading: "Petite ",          em: "série",      body: "Quatre clients à la fois. Le vôtre bénéficie de toute notre attention et énergie." },
      { mark: "06", num: "RÉSULTAT",    heading: "Optimisé pour ",   em: "convertir",  body: "La beauté est le minimum. Notre objectif est le travail qui fait bouger les métriques." },
      { mark: "07", num: "INTÉGRATION", heading: "Partenaires ",     em: "intégrés",   body: "Nous fonctionnons comme une équipe interne — asynchrone, Slack partagé, délais transparents." },
      { mark: "08", num: "PORTÉE",      heading: "Au-delà du ",      em: "lancement",  body: "Retainers, mises à jour et expériences de croissance bien après le lancement." },
      { mark: "09", num: "PROMESSE",    heading: "Honnêtes ",        em: "toujours",   body: "Clarté totale sur le périmètre, les délais et les compromis. Pas de surprises." },
    ],
  },
  ca: {
    eyebrow: "03 · PER QUÈ LUMIQ", eyebrowSub: "El que ens diferencia",
    titleLine1: "Un estudi creat", titleLine2: "per ser", titleEm: "de confiança.",
    metaBold: "Nou raons", metaText: "per les quals fundadors, màrqueters i equips de producte tornen.",
    cards: [
      { mark: "01", num: "PROCÉS",    heading: "Propietat ",       em: "integral",    body: "Un equip de l'estratègia al llançament — sense traspassos ni informació perduda." },
      { mark: "02", num: "EQUIP",     heading: "Només ",           em: "seniors",     body: "Cada projecte liderat per fundadors i dissenyadors sènior. Sense juniors." },
      { mark: "03", num: "VELOCITAT", heading: "Sprints, no ",     em: "mesos",       body: "Cicles àgils amb fites setmanals. La majoria de projectes s'entreguen en 4-10 setmanes." },
      { mark: "04", num: "OFICI",     heading: "Construït per ",   em: "durar",       body: "Pensament sistèmic des del primer dia. Marques que es consoliden amb el temps." },
      { mark: "05", num: "FOCUS",     heading: "Petit ",           em: "volum",       body: "Acceptem quatre clients alhora. El teu rep l'atenció i la cura que es mereix." },
      { mark: "06", num: "RESULTAT",  heading: "Dissenyat per ",   em: "convertir",   body: "El bonito és el mínim. La feina que mou mètriques és el sostre al qual apuntem." },
      { mark: "07", num: "ENCAIX",    heading: "Partners ",        em: "integrats",   body: "Actuem com a equip intern — asíncron, Slack compartit, terminis transparents." },
      { mark: "08", num: "ABAST",     heading: "Més enllà del ",   em: "llançament",  body: "Retainers, actualitzacions i experiments de creixement molt després del llançament." },
      { mark: "09", num: "PROMESA",   heading: "Honestitat ",      em: "total",       body: "Claredat total sobre abast, temps i compromisos. Sense sorpreses ni factures inflades." },
    ],
  },
};

export default async function Benefits({ locale }: { locale: string }) {
  const t = WHY[locale] ?? WHY.en;

  return (
    <section className="why-section">
      <div className="glow tr faint" />
      <div className="why-inner">
        <header className="sec-head" data-reveal>
          <div className="sec-head-left">
            <div className="eyebrow">
              <span className="led" />
              <span>{t.eyebrow}</span>
              <span className="esep">/</span>
              <span>{t.eyebrowSub}</span>
            </div>
            <h2 className="sec-title">
              {t.titleLine1}<br />{t.titleLine2} <span className="em">{t.titleEm}</span>
            </h2>
          </div>
          <p className="head-meta">
            <span className="v">{t.metaBold}</span>{" "}{t.metaText}
          </p>
        </header>

        <div className="why-grid">
          {t.cards.map((card, i) => (
            <article key={card.mark} className="why-card" data-reveal data-delay={String((i % 3) + 1)}>
              <span className="why-mark">{card.mark}</span>
              <span className="why-num">{card.num}</span>
              <h3>{card.heading}<span className="it">{card.em}</span></h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
