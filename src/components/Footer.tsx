import FooterClock from "./FooterClock";

type FooterT = {
  description: string;
  colStudio: string; colConnect: string; colVisit: string;
  navAbout: string; navServices: string; navWork: string; navJournal: string;
  copyright: string; open: string; closed: string;
  legal1: string; legal2: string; legal3: string;
};

const T: Record<string, FooterT> = {
  en: {
    description: "An independent design studio bringing brands out of the shadow and into the spotlight.",
    colStudio: "Studio", colConnect: "Connect", colVisit: "Visit",
    navAbout: "About", navServices: "Services", navWork: "Work", navJournal: "Journal",
    copyright: "© 2026 Lumiq Studio · All rights reserved",
    open: "Open", closed: "Closed",
    legal1: "Privacy", legal2: "Terms", legal3: "Cookies",
  },
  es: {
    description: "Un estudio de diseño independiente que saca a las marcas de la sombra y las pone en el centro.",
    colStudio: "Estudio", colConnect: "Conecta", colVisit: "Visita",
    navAbout: "Sobre nosotros", navServices: "Servicios", navWork: "Proyectos", navJournal: "Blog",
    copyright: "© 2026 Lumiq Studio · Todos los derechos reservados",
    open: "Abierto", closed: "Cerrado",
    legal1: "Privacidad", legal2: "Condiciones", legal3: "Cookies",
  },
  fr: {
    description: "Un studio de design indépendant qui sort les marques de l'ombre pour les mettre en lumière.",
    colStudio: "Studio", colConnect: "Contact", colVisit: "Adresse",
    navAbout: "À propos", navServices: "Services", navWork: "Projets", navJournal: "Journal",
    copyright: "© 2026 Lumiq Studio · Tous droits réservés",
    open: "Ouvert", closed: "Fermé",
    legal1: "Confidentialité", legal2: "Mentions légales", legal3: "Cookies",
  },
  ca: {
    description: "Un estudi de disseny independent que treu les marques de l'ombra i les posa en el focus.",
    colStudio: "Estudi", colConnect: "Connecta", colVisit: "Visita",
    navAbout: "Sobre nosaltres", navServices: "Serveis", navWork: "Projectes", navJournal: "Blog",
    copyright: "© 2026 Lumiq Studio · Tots els drets reservats",
    open: "Obert", closed: "Tancat",
    legal1: "Privacitat", legal2: "Condicions", legal3: "Galetes",
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Footer({ locale, content: _content }: { locale?: string; content?: any }) {
  const t = T[locale ?? "en"] ?? T.en;

  return (
    <footer className="ft-footer">
      <div className="ft-inner">
        <div className="ft-grid">
          <div className="ft-brand">
            <img src="/images/logo-lumiq.svg" alt="Lumiq Studio" className="ft-logo" />
            <p>{t.description}</p>
          </div>

          <div className="ft-col">
            <h4>{t.colStudio}</h4>
            <ul>
              <li><a href="#">{t.navAbout}</a></li>
              <li><a href="#services">{t.navServices}</a></li>
              <li><a href="#work">{t.navWork}</a></li>
              <li><a href="#">{t.navJournal}</a></li>
            </ul>
          </div>

          <div className="ft-col">
            <h4>{t.colConnect}</h4>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Are.na</a></li>
              <li><a href="mailto:hello@lumiq.studio">hello@lumiq.studio</a></li>
            </ul>
          </div>

          <div className="ft-col">
            <h4>{t.colVisit}</h4>
            <ul>
              <li><span>Calle Serrano 41</span></li>
              <li><span>28001 Madrid</span></li>
              <li><span>Spain</span></li>
            </ul>
          </div>
        </div>

        <div className="ft-bottom">
          <span className="ft-bottom-text">{t.copyright}</span>
          <FooterClock openLabel={t.open} closedLabel={t.closed} />
          <div className="ft-legal">
            <a href="#">{t.legal1}</a>
            <a href="#">{t.legal2}</a>
            <a href="#">{t.legal3}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
