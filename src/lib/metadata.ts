import type { Locale } from "@/i18n/routing";

export type MetaPageKey = "home" | "services" | "work" | "contact" | "score";

export interface PageMetaContent {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
}

export const pageMetadata: Record<MetaPageKey, Record<Locale, PageMetaContent>> = {
  home: {
    en: {
      title: "Lumiq Studios — Branding & Web Design Studio",
      description:
        "An independent studio building identities and digital experiences for ambitious teams. Branding, web design, and marketing that brings brands out of the dark into the spotlight.",
      ogTitle: "Lumiq Studios — Bringing brands from dark into light",
      ogDescription:
        "An independent design studio building identities and digital experiences for ambitious teams. Branding, web design, and marketing.",
      twitterTitle: "Lumiq Studios — Bringing brands from dark into light",
      twitterDescription:
        "Independent design studio. Branding, web design & marketing for ambitious teams.",
    },
    es: {
      title: "Lumiq Studios — Estudio de Branding y Diseño Web",
      description:
        "Estudio independiente que construye identidades y experiencias digitales para equipos ambiciosos. Branding, diseño web y marketing que saca marcas de la oscuridad al foco.",
      ogTitle: "Lumiq Studios — Sacamos marcas de la oscuridad al foco",
      ogDescription:
        "Estudio independiente de diseño. Identidades visuales y experiencias digitales para equipos ambiciosos. Branding, web y marketing.",
      twitterTitle: "Lumiq Studios — Sacamos marcas de la oscuridad al foco",
      twitterDescription:
        "Estudio de diseño independiente. Branding, diseño web y marketing para equipos ambiciosos.",
    },
    fr: {
      title: "Lumiq Studios — Studio de Branding et Design Web",
      description:
        "Studio independant construisant des identites et experiences digitales pour des equipes ambitieuses. Branding, web design et marketing qui fait sortir les marques de l'ombre.",
      ogTitle: "Lumiq Studios — Faire sortir les marques de l'ombre",
      ogDescription:
        "Studio de design independant. Identites visuelles et experiences digitales pour equipes ambitieuses. Branding, web design et marketing.",
      twitterTitle: "Lumiq Studios — Faire sortir les marques de l'ombre",
      twitterDescription:
        "Studio de design independant. Branding, web design et marketing pour equipes ambitieuses.",
    },
    ca: {
      title: "Lumiq Studios — Estudi de Branding i Disseny Web",
      description:
        "Estudi independent que construeix identitats i experiencies digitals per a equips ambiciosos. Branding, disseny web i marketing que treu marques de la foscor al focus.",
      ogTitle: "Lumiq Studios — Treure marques de la foscor al focus",
      ogDescription:
        "Estudi independent de disseny. Identitats visuals i experiencies digitals per a equips ambiciosos. Branding, web i marketing.",
      twitterTitle: "Lumiq Studios — Treure marques de la foscor al focus",
      twitterDescription:
        "Estudi de disseny independent. Branding, disseny web i marketing per a equips ambiciosos.",
    },
  },

  services: {
    en: {
      title: "Services — Branding, Web Design & Marketing | Lumiq Studios",
      description:
        "Brand identity, web design, and marketing from an independent studio. Three disciplines, one team, end-to-end ownership from strategy to launch.",
      ogTitle: "Crafted for brands that want to be seen — Lumiq Studios",
      ogDescription:
        "Three disciplines. One studio. Brand identity, web design, and marketing built to convert and last. End-to-end ownership from strategy to launch.",
      twitterTitle: "Crafted for brands that want to be seen — Lumiq Studios",
      twitterDescription:
        "Brand identity, web design & marketing. One studio, end-to-end ownership from strategy to launch.",
    },
    es: {
      title: "Servicios — Branding, Diseño Web y Marketing | Lumiq Studios",
      description:
        "Identidad de marca, diseño web y marketing de un estudio independiente. Tres disciplinas, un equipo, responsabilidad de extremo a extremo desde la estrategia al lanzamiento.",
      ogTitle: "Diseñado para marcas que quieren ser vistas — Lumiq Studios",
      ogDescription:
        "Tres disciplinas. Un estudio. Identidad de marca, diseño web y marketing para convertir y durar. De la estrategia al lanzamiento.",
      twitterTitle: "Diseñado para marcas que quieren ser vistas — Lumiq Studios",
      twitterDescription:
        "Branding, diseño web y marketing. Un estudio, responsabilidad completa de estrategia a lanzamiento.",
    },
    fr: {
      title: "Services — Branding, Web Design et Marketing | Lumiq Studios",
      description:
        "Identite de marque, web design et marketing d'un studio independant. Trois disciplines, une equipe, responsabilite de bout en bout de la strategie au lancement.",
      ogTitle: "Concu pour les marques qui veulent etre vues — Lumiq Studios",
      ogDescription:
        "Trois disciplines. Un studio. Identite de marque, web design et marketing construits pour convertir et durer. De la strategie au lancement.",
      twitterTitle: "Concu pour les marques qui veulent etre vues — Lumiq Studios",
      twitterDescription:
        "Branding, web design et marketing. Un studio, responsabilite complete de la strategie au lancement.",
    },
    ca: {
      title: "Serveis — Branding, Disseny Web i Marketing | Lumiq Studios",
      description:
        "Identitat de marca, disseny web i marketing d'un estudi independent. Tres disciplines, un equip, responsabilitat de cap a cap des de l'estrategia fins al llancament.",
      ogTitle: "Dissenyat per a marques que volen ser vistes — Lumiq Studios",
      ogDescription:
        "Tres disciplines. Un estudi. Identitat de marca, disseny web i marketing per convertir i durar. De l'estrategia al llancament.",
      twitterTitle: "Dissenyat per a marques que volen ser vistes — Lumiq Studios",
      twitterDescription:
        "Branding, disseny web i marketing. Un estudi, responsabilitat completa de l'estrategia al llancament.",
    },
  },

  work: {
    en: {
      title: "Work — Selected Projects | Lumiq Studios",
      description:
        "Brand identities, web experiences, and campaigns for ambitious teams. A selection of recent projects from across the world.",
      ogTitle: "Recent work, from across the world — Lumiq Studios",
      ogDescription:
        "Brand identities, web experiences, and campaigns. A selection of recent projects from Lumiq Studios.",
      twitterTitle: "Recent work, from across the world — Lumiq Studios",
      twitterDescription:
        "Brand identities, web experiences and campaigns. Selected recent projects from Lumiq Studios.",
    },
    es: {
      title: "Proyectos — Trabajo seleccionado | Lumiq Studios",
      description:
        "Identidades de marca, experiencias web y campañas para equipos ambiciosos. Una seleccion de proyectos recientes de todo el mundo.",
      ogTitle: "Trabajo reciente, de todo el mundo — Lumiq Studios",
      ogDescription:
        "Identidades de marca, experiencias web y campañas. Una seleccion de proyectos recientes de Lumiq Studios.",
      twitterTitle: "Trabajo reciente, de todo el mundo — Lumiq Studios",
      twitterDescription:
        "Identidades de marca, experiencias web y campañas. Proyectos recientes de Lumiq Studios.",
    },
    fr: {
      title: "Projets — Travaux selectionnes | Lumiq Studios",
      description:
        "Identites de marque, experiences web et campagnes pour des equipes ambitieuses. Une selection de projets recents aux quatre coins du monde.",
      ogTitle: "Travaux recents, du monde entier — Lumiq Studios",
      ogDescription:
        "Identites de marque, experiences web et campagnes. Une selection de projets recents de Lumiq Studios.",
      twitterTitle: "Travaux recents, du monde entier — Lumiq Studios",
      twitterDescription:
        "Identites de marque, experiences web et campagnes. Projets recents de Lumiq Studios.",
    },
    ca: {
      title: "Projectes — Treball seleccionat | Lumiq Studios",
      description:
        "Identitats de marca, experiencies web i campanyes per a equips ambiciosos. Una seleccio de projectes recents d'arreu del mon.",
      ogTitle: "Treball recent, d'arreu del mon — Lumiq Studios",
      ogDescription:
        "Identitats de marca, experiencies web i campanyes. Una seleccio de projectes recents de Lumiq Studios.",
      twitterTitle: "Treball recent, d'arreu del mon — Lumiq Studios",
      twitterDescription:
        "Identitats de marca, experiencies web i campanyes. Projectes recents de Lumiq Studios.",
    },
  },

  contact: {
    en: {
      title: "Start a Project — Get in Touch | Lumiq Studios",
      description:
        "Ready to bring your brand into the light? Tell us about your project. We reply within one workday.",
      ogTitle: "Got something worth bringing to light? — Lumiq Studios",
      ogDescription:
        "Tell us about your project. First conversations are free and frank. We reply within one workday. hello@lumiq.studio",
      twitterTitle: "Got something worth bringing to light? — Lumiq Studios",
      twitterDescription:
        "Tell us about your project. We reply within one workday. hello@lumiq.studio",
    },
    es: {
      title: "Empieza un proyecto — Contacto | Lumiq Studios",
      description:
        "¿Listo para sacar tu marca a la luz? Cuentanos tu proyecto. Respondemos en un dia laboral.",
      ogTitle: "Tienes algo que merece salir a la luz? — Lumiq Studios",
      ogDescription:
        "Cuentanos tu proyecto. Las primeras conversaciones son libres y francas. Respondemos en un dia laboral. hello@lumiq.studio",
      twitterTitle: "Tienes algo que merece salir a la luz? — Lumiq Studios",
      twitterDescription:
        "Cuentanos tu proyecto. Respondemos en un dia laboral. hello@lumiq.studio",
    },
    fr: {
      title: "Demarrer un projet — Contact | Lumiq Studios",
      description:
        "Pret a faire sortir votre marque de l'ombre? Parlez-nous de votre projet. Nous repondons sous un jour ouvre.",
      ogTitle: "Avez-vous quelque chose qui merite d'etre vu? — Lumiq Studios",
      ogDescription:
        "Parlez-nous de votre projet. Les premieres conversations sont libres et franches. Reponse sous un jour ouvre. hello@lumiq.studio",
      twitterTitle: "Avez-vous quelque chose qui merite d'etre vu? — Lumiq Studios",
      twitterDescription:
        "Parlez-nous de votre projet. Reponse sous un jour ouvre. hello@lumiq.studio",
    },
    ca: {
      title: "Comenca un projecte — Contacte | Lumiq Studios",
      description:
        "Llest per treure la teva marca a la llum? Explica'ns el teu projecte. Responem en un dia laborable.",
      ogTitle: "Tens alguna cosa que val la pena treure a la llum? — Lumiq Studios",
      ogDescription:
        "Explica'ns el teu projecte. Les primeres converses son lliures i franques. Responem en un dia laborable. hello@lumiq.studio",
      twitterTitle: "Tens alguna cosa que val la pena treure a la llum? — Lumiq Studios",
      twitterDescription:
        "Explica'ns el teu projecte. Responem en un dia laborable. hello@lumiq.studio",
    },
  },

  score: {
    en: {
      title: "Visibility Score — How visible is your brand? | Lumiq Studios",
      description:
        "Grade your brand across four pillars — Findability, Positioning, Trust, and Memorability. 60 seconds. Free PDF report. Find out what's stopping you from being seen.",
      ogTitle: "Find out exactly how visible your brand is — Lumiq Studios",
      ogDescription:
        "The Visibility Score grades your brand across four pillars buyers use to find, trust, and remember you. 60 seconds. Free. No email gate to start.",
      twitterTitle: "Find out exactly how visible your brand is — Lumiq Studios",
      twitterDescription:
        "60 seconds. 4 pillars. Free PDF report. Find out what's stopping your brand from being seen.",
    },
    es: {
      title: "Visibility Score — ¿Cuan visible es tu marca? | Lumiq Studios",
      description:
        "Califica tu marca en cuatro pilares: Encontrabilidad, Posicionamiento, Confianza y Memorabilidad. 60 segundos. Informe PDF gratuito. Descubre que te frena.",
      ogTitle: "Descubre exactamente cuan visible es tu marca — Lumiq Studios",
      ogDescription:
        "El Visibility Score califica tu marca en los cuatro pilares que los compradores usan para encontrarte, confiar en ti y recordarte. 60 segundos. Gratis.",
      twitterTitle: "Descubre exactamente cuan visible es tu marca — Lumiq Studios",
      twitterDescription:
        "60 segundos. 4 pilares. Informe PDF gratuito. Descubre que frena a tu marca de ser vista.",
    },
    fr: {
      title: "Visibility Score — Quelle est la visibilite de votre marque? | Lumiq",
      description:
        "Evaluez votre marque sur quatre piliers: Trouvabilite, Positionnement, Confiance et Memorabilite. 60 secondes. Rapport PDF gratuit. Decouvrez ce qui vous freine.",
      ogTitle: "Decouvrez exactement la visibilite de votre marque — Lumiq Studios",
      ogDescription:
        "Le Visibility Score evalue votre marque sur les quatre piliers que les acheteurs utilisent pour vous trouver, vous faire confiance et se souvenir de vous. 60 secondes.",
      twitterTitle: "Decouvrez exactement la visibilite de votre marque — Lumiq Studios",
      twitterDescription:
        "60 secondes. 4 piliers. Rapport PDF gratuit. Decouvrez ce qui empeche votre marque d'etre vue.",
    },
    ca: {
      title: "Visibility Score — Quina visibilitat te la teva marca? | Lumiq Studios",
      description:
        "Puntua la teva marca en quatre pilars: Trobabilitat, Posicionament, Confianca i Memorabilitat. 60 segons. Informe PDF gratuit. Descobreix que et frena.",
      ogTitle: "Descobreix exactament la visibilitat de la teva marca — Lumiq Studios",
      ogDescription:
        "El Visibility Score puntua la teva marca en els quatre pilars que els compradors utilitzen per trobar-te, confiar en tu i recordar-te. 60 segons. Gratuit.",
      twitterTitle: "Descobreix exactament la visibilitat de la teva marca — Lumiq Studios",
      twitterDescription:
        "60 segons. 4 pilars. Informe PDF gratuit. Descobreix que impedeix que la teva marca sigui vista.",
    },
  },
};
