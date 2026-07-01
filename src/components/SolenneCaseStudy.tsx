import React from "react";

type Step = {
  label: string;
  titleBefore: string;
  titleEm: string;
  body: string;
  duration: string;
  output: string;
  chips: string[];
  heroAlt: string;
  pairAlt: [string, string];
  rev?: boolean;
};

type Stat = { num: string; suf: string; lbl: string; cap: string };

type LocaleContent = {
  eyebrow1: string; eyebrow2: string;
  tag1: string; tag2: string; tag3: string;
  heroName: string; heroEm: string;
  subBefore: string; subEm: string; subAfter: string;
  lede: string;
  metaClientLbl: string; metaYearLbl: string; metaRoleLbl: string; metaDurationLbl: string;
  metaClient: string; metaYear: string; metaRole: string; metaDuration: string;
  s02eyebrow: string; s02sub: string;
  s02title: string; s02titleEm: string;
  s02measuredAt: string; s02measuredDays: string;
  stats: Stat[];
  p03eyebrow: string; p03sub: string;
  p03title: string; p03titleEm: string;
  p03from: string; p03detail: string;
  durationLbl: string; outputLbl: string;
  steps: Step[];
  g04eyebrow: string; g04sub: string;
  g04title: string; g04titleEm: string;
  g04stat: string; g04detail: string;
  galAlts: [string, string, string, string];
};

const CONTENT: Record<string, LocaleContent> = {
  en: {
    eyebrow1: "CASE 01 · SOLENNE",
    eyebrow2: "Brand identity · 2026",
    tag1: "Barcelona", tag2: "Independent", tag3: "New practice",
    heroName: "Solenne", heroEm: "Studio",
    subBefore: "A practice built around ", subEm: "considered", subAfter: " space.",
    lede: "A new architecture studio from Barcelona — founded on restraint, light, and materials that age well. We led brand identity, digital presence, and editorial direction over a focused twelve-week engagement.",
    metaClientLbl: "Client", metaYearLbl: "Year", metaRoleLbl: "Role", metaDurationLbl: "Duration",
    metaClient: "Solenne Studio", metaYear: "2026", metaRole: "Identity · Web · Editorial", metaDuration: "12 weeks",
    s02eyebrow: "02 · OUTCOME", s02sub: "What changed",
    s02title: "Numbers from", s02titleEm: "the first year.",
    s02measuredAt: "Measured at", s02measuredDays: "+90, +180, +365 days after public launch.",
    stats: [
      { num: "+180", suf: "%", lbl: "Project inquiries", cap: "First six months after launch, vs. pre-launch baseline." },
      { num: "6",   suf: "",  lbl: "Awards shortlisted", cap: "Architecture competitions entered in year one." },
      { num: "38",  suf: "",  lbl: "Press features",     cap: "Including Dezeen, Wallpaper*, and El Croquis." },
    ],
    p03eyebrow: "03 · PROCESS", p03sub: "How we worked",
    p03title: "Four stages,", p03titleEm: "twelve weeks.",
    p03from: "From kickoff", p03detail: "to public launch. Weekly milestones.",
    durationLbl: "Duration", outputLbl: "Output",
    steps: [
      {
        label: "Discovery",
        titleBefore: "Listening, ", titleEm: "first.",
        body: "Two weeks of studio visits, architect interviews, and a thorough study of how leading practices present themselves. We mapped what Solenne stood for — and what it wasn't willing to compromise.",
        duration: "2 weeks", output: "Insight brief",
        chips: ["Studio visits", "Competitor audit", "Architect interviews", "Insight brief"],
        heroAlt: "Studio working shot or reference visit",
        pairAlt: ["Mood board / reference images", "Interview notes"],
      },
      {
        label: "Strategy",
        titleBefore: "A ", titleEm: "position",
        body: "Solenne sits between rigorous modernism and a warmth rooted in material honesty and craft. We defined the territory — considered restraint — and built three brand pillars: precision, light, and longevity.",
        duration: "1 week", output: "Brand platform",
        chips: ["Positioning", "Naming", "Pillars", "Tone of voice"],
        heroAlt: "Strategy session or mood board wall",
        pairAlt: ["Positioning map", "Pillar diagrams"],
        rev: true,
      },
      {
        label: "Design",
        titleBefore: "Mark, ", titleEm: "type,",
        body: "A minimal wordmark drawn from architectural line weights. A two-typeface system pairing a geometric sans with a refined serif for editorial use. A neutral palette grounded in raw concrete, warm stone, and pale linen.",
        duration: "5 weeks", output: "Identity system",
        chips: ["Wordmark", "Typography", "Colour system", "Stationery", "Photography direction"],
        heroAlt: "Identity hero — wordmark in context",
        pairAlt: ["Wordmark studies", "Colour and type sheet"],
      },
      {
        label: "Launch",
        titleBefore: "Into the ", titleEm: "world.",
        body: "A portfolio site built for silence — fast, projection-focused, with large-format project photography front and centre. We supported the launch with press materials, an editorial shoot in the studio, and a pitch deck the team uses for competition entries today.",
        duration: "4 weeks", output: "Launch package",
        chips: ["Portfolio site", "Press kit", "Editorial shoot", "Pitch deck"],
        heroAlt: "Launch campaign hero or site screenshot",
        pairAlt: ["Editorial image", "Site detail"],
        rev: true,
      },
    ],
    g04eyebrow: "04 · GALLERY", g04sub: "In the wild",
    g04title: "The full system,", g04titleEm: "shipped.",
    g04stat: "Six projects", g04detail: "three competitions, one editorial campaign.",
    galAlts: ["Wide project shot", "Material detail", "Studio space", "Press feature"],
  },

  es: {
    eyebrow1: "CASO 01 · SOLENNE",
    eyebrow2: "Identidad de marca · 2026",
    tag1: "Barcelona", tag2: "Independiente", tag3: "Nueva práctica",
    heroName: "Solenne", heroEm: "Studio",
    subBefore: "Un estudio construido sobre el espacio ", subEm: "considerado.", subAfter: "",
    lede: "Un nuevo estudio de arquitectura de Barcelona — fundado sobre la contención, la luz y los materiales que envejecen bien. Lideramos la identidad de marca, la presencia digital y la dirección editorial en un proyecto de doce semanas.",
    metaClientLbl: "Cliente", metaYearLbl: "Año", metaRoleLbl: "Rol", metaDurationLbl: "Duración",
    metaClient: "Solenne Studio", metaYear: "2026", metaRole: "Identidad · Web · Editorial", metaDuration: "12 semanas",
    s02eyebrow: "02 · RESULTADOS", s02sub: "Qué cambió",
    s02title: "Números del", s02titleEm: "primer año.",
    s02measuredAt: "Medidos a los", s02measuredDays: "+90, +180, +365 días del lanzamiento.",
    stats: [
      { num: "+180", suf: "%", lbl: "Consultas de proyecto", cap: "Primeros seis meses tras el lanzamiento, frente al período previo." },
      { num: "6",   suf: "",  lbl: "Preselecciones en premios", cap: "Concursos de arquitectura presentados en el primer año." },
      { num: "38",  suf: "",  lbl: "Apariciones en prensa",    cap: "Incluyendo Dezeen, Wallpaper* y El Croquis." },
    ],
    p03eyebrow: "03 · PROCESO", p03sub: "Cómo trabajamos",
    p03title: "Cuatro etapas,", p03titleEm: "doce semanas.",
    p03from: "Del inicio", p03detail: "al lanzamiento público. Hitos semanales.",
    durationLbl: "Duración", outputLbl: "Entregable",
    steps: [
      {
        label: "Investigación",
        titleBefore: "Escuchar, ", titleEm: "primero.",
        body: "Dos semanas de visitas al estudio, entrevistas con los arquitectos y un estudio detallado de cómo los estudios líderes se presentan al mundo. Trazamos lo que Solenne representaba — y lo que no estaba dispuesto a comprometer.",
        duration: "2 semanas", output: "Informe de análisis",
        chips: ["Visitas al estudio", "Auditoría de competidores", "Entrevistas", "Informe de análisis"],
        heroAlt: "Sesión de trabajo o visita de referencia",
        pairAlt: ["Mood board / referencias", "Notas de entrevista"],
      },
      {
        label: "Estrategia",
        titleBefore: "Una ", titleEm: "posición",
        body: "Solenne se sitúa entre el modernismo riguroso y la calidez arraigada en la honestidad material y artesanal. Definimos el territorio — contención considerada — y construimos tres pilares de marca: precisión, luz y longevidad.",
        duration: "1 semana", output: "Plataforma de marca",
        chips: ["Posicionamiento", "Naming", "Pilares", "Tono de voz"],
        heroAlt: "Sesión de estrategia o muro de ideas",
        pairAlt: ["Mapa de posicionamiento", "Diagramas de pilares"],
        rev: true,
      },
      {
        label: "Diseño",
        titleBefore: "Marca, ", titleEm: "tipografía,",
        body: "Un logotipo minimalista trazado con el grosor de línea de la arquitectura. Un sistema de dos tipografías que combina una sans geométrica con una serif refinada para uso editorial. Paleta neutra basada en el hormigón crudo, la piedra cálida y el lino pálido.",
        duration: "5 semanas", output: "Sistema de identidad",
        chips: ["Logotipo", "Tipografía", "Sistema de color", "Papelería", "Dirección fotográfica"],
        heroAlt: "Identidad hero — logotipo en contexto",
        pairAlt: ["Estudios de logotipo", "Hoja de color y tipografía"],
      },
      {
        label: "Lanzamiento",
        titleBefore: "Al ", titleEm: "mundo.",
        body: "Un sitio de portfolio construido para el silencio — rápido, centrado en la proyección, con fotografía de gran formato en primer plano. Apoyamos el lanzamiento con materiales de prensa, un reportaje editorial en el estudio y un dossier que el equipo usa en concursos.",
        duration: "4 semanas", output: "Paquete de lanzamiento",
        chips: ["Web de portfolio", "Kit de prensa", "Reportaje editorial", "Dossier de concurso"],
        heroAlt: "Hero de lanzamiento o captura del sitio",
        pairAlt: ["Imagen editorial", "Detalle del sitio"],
        rev: true,
      },
    ],
    g04eyebrow: "04 · GALERÍA", g04sub: "En el mundo",
    g04title: "El sistema completo,", g04titleEm: "desplegado.",
    g04stat: "Seis proyectos", g04detail: "tres concursos, una campaña editorial.",
    galAlts: ["Fotografía de proyecto", "Detalle de material", "Espacio del estudio", "Aparición en prensa"],
  },

  fr: {
    eyebrow1: "CAS 01 · SOLENNE",
    eyebrow2: "Identité de marque · 2026",
    tag1: "Barcelone", tag2: "Indépendant", tag3: "Nouvelle agence",
    heroName: "Solenne", heroEm: "Studio",
    subBefore: "Un cabinet de l'espace architectural ", subEm: "maîtrisé.", subAfter: "",
    lede: "Un nouveau cabinet d'architecture barcelonais — fondé sur la retenue, la lumière et des matériaux qui vieillissent bien. Nous avons dirigé l'identité de marque, la présence digitale et la direction éditoriale lors d'un engagement concentré de douze semaines.",
    metaClientLbl: "Client", metaYearLbl: "Année", metaRoleLbl: "Rôle", metaDurationLbl: "Durée",
    metaClient: "Solenne Studio", metaYear: "2026", metaRole: "Identité · Web · Éditorial", metaDuration: "12 semaines",
    s02eyebrow: "02 · RÉSULTATS", s02sub: "Ce qui a changé",
    s02title: "Les chiffres de", s02titleEm: "la première année.",
    s02measuredAt: "Mesurés à", s02measuredDays: "+90, +180, +365 jours après le lancement.",
    stats: [
      { num: "+180", suf: "%", lbl: "Demandes de projets",  cap: "Six premiers mois après le lancement, par rapport à la période précédente." },
      { num: "6",   suf: "",  lbl: "Sélections en concours", cap: "Concours d'architecture présentés en première année." },
      { num: "38",  suf: "",  lbl: "Parutions presse",       cap: "Dont Dezeen, Wallpaper* et El Croquis." },
    ],
    p03eyebrow: "03 · PROCESSUS", p03sub: "Comment nous avons travaillé",
    p03title: "Quatre étapes,", p03titleEm: "douze semaines.",
    p03from: "Du lancement", p03detail: "au déploiement public. Jalons hebdomadaires.",
    durationLbl: "Durée", outputLbl: "Livrable",
    steps: [
      {
        label: "Exploration",
        titleBefore: "Écouter, ", titleEm: "d'abord.",
        body: "Deux semaines de visites en agence, d'entretiens avec les architectes et d'une étude approfondie de la façon dont les cabinets leaders se présentent. Nous avons cartographié ce que Solenne représentait — et ce à quoi il refusait de renoncer.",
        duration: "2 semaines", output: "Note d'analyse",
        chips: ["Visites en agence", "Audit concurrentiel", "Entretiens", "Note d'analyse"],
        heroAlt: "Séance de travail ou visite de référence",
        pairAlt: ["Mood board / références", "Notes d'entretien"],
      },
      {
        label: "Stratégie",
        titleBefore: "Une ", titleEm: "position",
        body: "Solenne se situe entre le modernisme rigoureux et une chaleur ancrée dans l'honnêteté des matériaux et de l'artisanat. Nous avons défini le territoire — « retenue réfléchie » — et construit trois piliers de marque : précision, lumière et durabilité.",
        duration: "1 semaine", output: "Plateforme de marque",
        chips: ["Positionnement", "Naming", "Piliers", "Ton éditorial"],
        heroAlt: "Session stratégique ou mur d'idées",
        pairAlt: ["Carte de positionnement", "Diagrammes des piliers"],
        rev: true,
      },
      {
        label: "Design",
        titleBefore: "Signe, ", titleEm: "typographie,",
        body: "Un logotype minimaliste tracé selon les graisses de trait architecturaux. Un système à deux typographies associant un sans-sérif géométrique à une sérif raffinée pour les usages éditoriaux. Palette neutre fondée sur le béton brut, la pierre chaude et le lin pâle.",
        duration: "5 semaines", output: "Système d'identité",
        chips: ["Logotype", "Typographie", "Système couleur", "Papeterie", "Direction photo"],
        heroAlt: "Identité hero — logotype en contexte",
        pairAlt: ["Études du logotype", "Fiche couleur et typographie"],
      },
      {
        label: "Lancement",
        titleBefore: "Dans le ", titleEm: "monde.",
        body: "Un site portfolio conçu pour le silence — rapide, centré sur la projection, avec une photographie grand format en avant-scène. Nous avons soutenu le lancement avec des supports presse, un tournage éditorial en agence et un dossier de présentation que l'équipe utilise pour les concours.",
        duration: "4 semaines", output: "Package de lancement",
        chips: ["Site portfolio", "Kit presse", "Tournage éditorial", "Dossier de concours"],
        heroAlt: "Hero de lancement ou capture du site",
        pairAlt: ["Image éditoriale", "Détail du site"],
        rev: true,
      },
    ],
    g04eyebrow: "04 · GALERIE", g04sub: "Dans le monde",
    g04title: "Le système complet,", g04titleEm: "déployé.",
    g04stat: "Six projets", g04detail: "trois concours, une campagne éditoriale.",
    galAlts: ["Photographie de projet", "Détail matière", "Espace de l'agence", "Parution presse"],
  },

  ca: {
    eyebrow1: "CAS 01 · SOLENNE",
    eyebrow2: "Identitat de marca · 2026",
    tag1: "Barcelona", tag2: "Independent", tag3: "Nova pràctica",
    heroName: "Solenne", heroEm: "Studio",
    subBefore: "Un estudi de l'espai arquitectònic ", subEm: "considerat.", subAfter: "",
    lede: "Un nou estudi d'arquitectura de Barcelona — fundat sobre la contenció, la llum i els materials que envelleixen bé. Vam liderar la identitat de marca, la presència digital i la direcció editorial en un encàrrec de dotze setmanes.",
    metaClientLbl: "Client", metaYearLbl: "Any", metaRoleLbl: "Rol", metaDurationLbl: "Durada",
    metaClient: "Solenne Studio", metaYear: "2026", metaRole: "Identitat · Web · Editorial", metaDuration: "12 setmanes",
    s02eyebrow: "02 · RESULTATS", s02sub: "Què va canviar",
    s02title: "Números del", s02titleEm: "primer any.",
    s02measuredAt: "Mesurats als", s02measuredDays: "+90, +180, +365 dies del llançament.",
    stats: [
      { num: "+180", suf: "%", lbl: "Consultes de projecte",    cap: "Primers sis mesos després del llançament, en comparació al període previ." },
      { num: "6",   suf: "",  lbl: "Preseleccions en premis",   cap: "Concursos d'arquitectura presentats el primer any." },
      { num: "38",  suf: "",  lbl: "Aparicions en premsa",      cap: "Inclòs Dezeen, Wallpaper* i El Croquis." },
    ],
    p03eyebrow: "03 · PROCÉS", p03sub: "Com vam treballar",
    p03title: "Quatre etapes,", p03titleEm: "dotze setmanes.",
    p03from: "De l'inici", p03detail: "al llançament públic. Fites setmanals.",
    durationLbl: "Durada", outputLbl: "Lliurable",
    steps: [
      {
        label: "Recerca",
        titleBefore: "Escoltar, ", titleEm: "primer.",
        body: "Dues setmanes de visites a l'estudi, entrevistes amb els arquitectes i un estudi detallat de com els estudis capdavanters es presenten al món. Vam traçar el que Solenne representava — i el que no estava disposat a comprometre.",
        duration: "2 setmanes", output: "Informe d'anàlisi",
        chips: ["Visites a l'estudi", "Auditoria de competidors", "Entrevistes", "Informe d'anàlisi"],
        heroAlt: "Sessió de treball o visita de referència",
        pairAlt: ["Mood board / referències", "Notes d'entrevista"],
      },
      {
        label: "Estratègia",
        titleBefore: "Una ", titleEm: "posició",
        body: "Solenne se situa entre el modernisme rigorós i la calidesa arrelada en l'honestedat dels materials i l'artesania. Vam definir el territori — contenció considerada — i vam construir tres pilars de marca: precisió, llum i longevitat.",
        duration: "1 setmana", output: "Plataforma de marca",
        chips: ["Posicionament", "Naming", "Pilars", "To de veu"],
        heroAlt: "Sessió d'estratègia o mur d'idees",
        pairAlt: ["Mapa de posicionament", "Diagrames de pilars"],
        rev: true,
      },
      {
        label: "Disseny",
        titleBefore: "Marca, ", titleEm: "tipografia,",
        body: "Un logotip minimalista traçat amb el gruix de línia de l'arquitectura. Un sistema de dues tipografies que combina una sans geomètrica amb una serif refinada per a ús editorial. Paleta neutra basada en el formigó cru, la pedra càlida i el lli pàl·lid.",
        duration: "5 setmanes", output: "Sistema d'identitat",
        chips: ["Logotip", "Tipografia", "Sistema de color", "Papereria", "Direcció fotogràfica"],
        heroAlt: "Identitat hero — logotip en context",
        pairAlt: ["Estudis de logotip", "Full de color i tipografia"],
      },
      {
        label: "Llançament",
        titleBefore: "Al ", titleEm: "món.",
        body: "Un lloc de portfolio construït per al silenci — ràpid, centrat en la projecció, amb fotografia de gran format en primer pla. Vam donar suport al llançament amb materials de premsa, un reportatge editorial a l'estudi i un dossier que l'equip utilitza als concursos.",
        duration: "4 setmanes", output: "Paquet de llançament",
        chips: ["Web de portfolio", "Kit de premsa", "Reportatge editorial", "Dossier de concurs"],
        heroAlt: "Hero de llançament o captura del lloc",
        pairAlt: ["Imatge editorial", "Detall del lloc"],
        rev: true,
      },
    ],
    g04eyebrow: "04 · GALERIA", g04sub: "Al món",
    g04title: "El sistema complet,", g04titleEm: "desplegat.",
    g04stat: "Sis projectes", g04detail: "tres concursos, una campanya editorial.",
    galAlts: ["Fotografia de projecte", "Detall de material", "Espai de l'estudi", "Aparició en premsa"],
  },
};

export default function SolenneCaseStudy({ locale }: { locale: string }) {
  const t = CONTENT[locale] ?? CONTENT.en;

  return (
    <>
      {/* ── Section 1: Hero ─────────────────────────── */}
      <section className="cs-hero">
        <div className="glow tr" />
        <div className="glow bl very-faint" />
        <div className="cs-inner">

          <div className="cs-hero-top">
            <div className="eyebrow">
              <span className="led" />
              <span>{t.eyebrow1}</span>
              <span className="esep">/</span>
              <span>{t.eyebrow2}</span>
            </div>
            <p className="cs-hero-tags">
              {t.tag1}<span className="dot"> · </span>
              {t.tag2}<span className="dot"> · </span>
              {t.tag3}
            </p>
          </div>

          <h1 className="cs-hero-title">
            {t.heroName} <span className="em">{t.heroEm}</span>
            <span className="cs-hero-subtitle">
              {t.subBefore}<span className="em">{t.subEm}</span>{t.subAfter}
            </span>
          </h1>

          <p className="cs-hero-lede">{t.lede}</p>

          <div className="cs-hero-img">
            <div className="cs-ph" role="img" aria-label="Hero — studio or project photography" />
          </div>

          <div className="cs-meta-strip">
            {[
              { lbl: t.metaClientLbl,   val: t.metaClient },
              { lbl: t.metaYearLbl,     val: t.metaYear },
              { lbl: t.metaRoleLbl,     val: t.metaRole },
              { lbl: t.metaDurationLbl, val: t.metaDuration },
            ].map(({ lbl, val }) => (
              <div key={lbl} className="cs-meta-col">
                <span className="lbl">{lbl}</span>
                <span className="val">{val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 2: Stats ────────────────────────── */}
      <section className="cs-stats">
        <div className="cs-inner">
          <header className="sec-head">
            <div className="sec-head-left">
              <div className="eyebrow">
                <span className="led" />
                <span>{t.s02eyebrow}</span>
                <span className="esep">/</span>
                <span>{t.s02sub}</span>
              </div>
              <h2 className="cs-title-lg">
                {t.s02title}<br /><span className="em">{t.s02titleEm}</span>
              </h2>
            </div>
            <p className="head-meta">
              <span className="v">{t.s02measuredAt}</span>{" "}{t.s02measuredDays}
            </p>
          </header>

          <div className="cs-stats-grid">
            {t.stats.map(({ num, suf, lbl, cap }) => (
              <div key={lbl} className="cs-stat">
                <div className="cs-stat-num">
                  {num}
                  {suf && <span className="cs-stat-suf">{suf}</span>}
                </div>
                <span className="cs-stat-lbl">{lbl}</span>
                <p className="cs-stat-cap">{cap}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Process ──────────────────────── */}
      <section className="cs-process">
        <div className="glow tl very-faint" />
        <div className="cs-inner">
          <header className="sec-head">
            <div className="sec-head-left">
              <div className="eyebrow">
                <span className="led" />
                <span>{t.p03eyebrow}</span>
                <span className="esep">/</span>
                <span>{t.p03sub}</span>
              </div>
              <h2 className="cs-title-lg">
                {t.p03title}<br /><span className="em">{t.p03titleEm}</span>
              </h2>
            </div>
            <p className="head-meta">
              <span className="v">{t.p03from}</span>{" "}{t.p03detail}
            </p>
          </header>

          <div className="cs-steps">
            {t.steps.map((step, i) => (
              <article key={i} className="cs-step">
                <div className={`cs-step-row${step.rev ? " rev" : ""}`}>
                  <div className="cs-step-text">
                    <div className="cs-step-num">
                      <span className="n">0{i + 1}</span>
                      <span className="l">{step.label}</span>
                    </div>
                    <h3 className="cs-title-md">
                      {step.titleBefore}<span className="em">{step.titleEm}</span>
                    </h3>
                    <p className="cs-step-body">{step.body}</p>
                    <div className="cs-step-meta">
                      <div>
                        <span className="lbl">{t.durationLbl}</span>
                        <span className="val">{step.duration}</span>
                      </div>
                      <div>
                        <span className="lbl">{t.outputLbl}</span>
                        <span className="val">{step.output}</span>
                      </div>
                    </div>
                    <div className="cs-chip-row">
                      {step.chips.map((chip) => (
                        <span key={chip} className="cs-chip">{chip}</span>
                      ))}
                    </div>
                  </div>

                  <div className="cs-step-art">
                    <div className="cs-step-hero-img">
                      <div className="cs-ph" role="img" aria-label={step.heroAlt} />
                    </div>
                    <div className="cs-step-pair">
                      <div className="cs-step-sq">
                        <div className="cs-ph" role="img" aria-label={step.pairAlt[0]} />
                      </div>
                      <div className="cs-step-sq">
                        <div className="cs-ph" role="img" aria-label={step.pairAlt[1]} />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Gallery ──────────────────────── */}
      <section className="cs-gallery">
        <div className="cs-inner">
          <header className="sec-head">
            <div className="sec-head-left">
              <div className="eyebrow">
                <span className="led" />
                <span>{t.g04eyebrow}</span>
                <span className="esep">/</span>
                <span>{t.g04sub}</span>
              </div>
              <h2 className="cs-title-lg">
                {t.g04title}<br /><span className="em">{t.g04titleEm}</span>
              </h2>
            </div>
            <p className="head-meta">
              <span className="v">{t.g04stat}</span>{" "}{t.g04detail}
            </p>
          </header>

          <div className="cs-mosaic">
            <div className="cs-ph a" role="img" aria-label={t.galAlts[0]} />
            <div className="cs-ph b" role="img" aria-label={t.galAlts[1]} />
            <div className="cs-ph c" role="img" aria-label={t.galAlts[2]} />
            <div className="cs-ph d" role="img" aria-label={t.galAlts[3]} />
          </div>
        </div>
      </section>
    </>
  );
}
