import ContactForm, { type ContactLabels } from "./ContactForm";

type ContactT = {
  eyebrow: string; eyebrowSub: string;
  titleBefore: string; titleEm: string; titleAfter: string;
  metaBold: string; metaText: string;
  labelEmail: string; labelStudio: string; labelHours: string; labelFollow: string;
  studioLine: string; hours: string;
  labels: ContactLabels;
};

const T: Record<string, ContactT> = {
  en: {
    eyebrow: "07 · CONTACT", eyebrowSub: "Say hello",
    titleBefore: "Tell us ", titleEm: "what's", titleAfter: "on your mind.",
    metaBold: "We reply", metaText: "within one workday, Mon–Fri, CET.",
    labelEmail: "Email", labelStudio: "Studio", labelHours: "Hours", labelFollow: "Follow",
    studioLine: "Calle Serrano 41 · 28001 Madrid",
    hours: "Mon – Fri · 09:00 – 18:00 CET",
    labels: {
      fieldName: "Your name", fieldEmail: "Email", fieldCompany: "Company / project",
      fieldService: "Service needed", fieldBudget: "Budget", fieldMessage: "Tell us more",
      phName: "Adriana López", phEmail: "you@company.com",
      phCompany: "What we'll be working on",
      phMessage: "What you're building, when you're hoping to launch, and anything else useful.",
      selectDefault: "Select a service", optBranding: "Branding", optWeb: "Web design",
      optMarketing: "Marketing", optUnsure: "Not sure yet",
      budgetOptions: ["€10–25k", "€25–50k", "€50–100k", "€100k+", "Open"],
      submitNote: "We'll never share your info. Replies inside one workday.",
      submitButton: "Send enquiry", sending: "Sending…",
      successTitle: "Got it —", successText: "We'll reply within one workday.",
      errorText: "Something went wrong. Please try again or email us directly.",
    },
  },
  es: {
    eyebrow: "07 · CONTACTO", eyebrowSub: "Dinos hola",
    titleBefore: "Cuéntanos ", titleEm: "qué", titleAfter: "tienes en mente.",
    metaBold: "Respondemos", metaText: "en un día hábil, lun–vie, CET.",
    labelEmail: "Correo", labelStudio: "Estudio", labelHours: "Horario", labelFollow: "Síguenos",
    studioLine: "Calle Serrano 41 · 28001 Madrid",
    hours: "Lun – Vie · 09:00 – 18:00 CET",
    labels: {
      fieldName: "Tu nombre", fieldEmail: "Correo electrónico", fieldCompany: "Empresa / proyecto",
      fieldService: "Servicio necesario", fieldBudget: "Presupuesto", fieldMessage: "Cuéntanos más",
      phName: "Ana García", phEmail: "tu@empresa.com",
      phCompany: "En qué trabajaremos juntos",
      phMessage: "Qué estás construyendo, cuándo esperas lanzar y cualquier otra cosa útil.",
      selectDefault: "Selecciona un servicio", optBranding: "Branding", optWeb: "Diseño web",
      optMarketing: "Marketing", optUnsure: "Aún no estoy seguro",
      budgetOptions: ["€10–25k", "€25–50k", "€50–100k", "€100k+", "Abierto"],
      submitNote: "Nunca compartiremos tu información. Respuesta en un día hábil.",
      submitButton: "Enviar consulta", sending: "Enviando…",
      successTitle: "¡Recibido!", successText: "Te responderemos en un día hábil.",
      errorText: "Algo salió mal. Por favor inténtalo de nuevo o escríbenos directamente.",
    },
  },
  fr: {
    eyebrow: "07 · CONTACT", eyebrowSub: "Bonjour",
    titleBefore: "Parlez-nous de ", titleEm: "ce que", titleAfter: "vous avez en tête.",
    metaBold: "Nous répondons", metaText: "dans un jour ouvré, lun–ven, CET.",
    labelEmail: "Email", labelStudio: "Studio", labelHours: "Horaires", labelFollow: "Réseaux",
    studioLine: "Calle Serrano 41 · 28001 Madrid",
    hours: "Lun – Ven · 09h00 – 18h00 CET",
    labels: {
      fieldName: "Votre nom", fieldEmail: "Email", fieldCompany: "Entreprise / projet",
      fieldService: "Service souhaité", fieldBudget: "Budget", fieldMessage: "Dites-nous en plus",
      phName: "Sophie Martin", phEmail: "vous@entreprise.com",
      phCompany: "Sur quoi nous allons travailler",
      phMessage: "Ce que vous construisez, quand vous espérez lancer, et tout ce qui est utile.",
      selectDefault: "Sélectionnez un service", optBranding: "Branding", optWeb: "Design web",
      optMarketing: "Marketing", optUnsure: "Pas encore sûr",
      budgetOptions: ["€10–25k", "€25–50k", "€50–100k", "€100k+", "Ouvert"],
      submitNote: "Vos informations ne seront jamais partagées. Réponse dans un jour ouvré.",
      submitButton: "Envoyer la demande", sending: "Envoi en cours…",
      successTitle: "Bien reçu —", successText: "Nous vous répondrons dans un jour ouvré.",
      errorText: "Une erreur s'est produite. Réessayez ou écrivez-nous directement.",
    },
  },
  ca: {
    eyebrow: "07 · CONTACTE", eyebrowSub: "Digueu hola",
    titleBefore: "Expliqueu-nos ", titleEm: "què", titleAfter: "teniu al cap.",
    metaBold: "Responem", metaText: "en un dia hàbil, dl–dv, CET.",
    labelEmail: "Correu", labelStudio: "Estudi", labelHours: "Horari", labelFollow: "Seguiu-nos",
    studioLine: "Calle Serrano 41 · 28001 Madrid",
    hours: "Dl – Dv · 09:00 – 18:00 CET",
    labels: {
      fieldName: "El vostre nom", fieldEmail: "Correu electrònic", fieldCompany: "Empresa / projecte",
      fieldService: "Servei necessari", fieldBudget: "Pressupost", fieldMessage: "Expliqueu-nos més",
      phName: "Anna Puig", phEmail: "vosaltres@empresa.com",
      phCompany: "En què treballarem junts",
      phMessage: "Què esteu construint, quan espereu llançar i qualsevol altra cosa útil.",
      selectDefault: "Seleccioneu un servei", optBranding: "Branding", optWeb: "Disseny web",
      optMarketing: "Màrqueting", optUnsure: "Encara no estic segur",
      budgetOptions: ["€10–25k", "€25–50k", "€50–100k", "€100k+", "Obert"],
      submitNote: "Mai compartirem la vostra informació. Resposta en un dia hàbil.",
      submitButton: "Enviar consulta", sending: "Enviant…",
      successTitle: "Rebut!", successText: "Us respondrem en un dia hàbil.",
      errorText: "Alguna cosa ha anat malament. Torneu a intentar-ho o escriviu-nos directament.",
    },
  },
};

export default function Contact({ locale }: { locale: string }) {
  const t = T[locale] ?? T.en;

  return (
    <section id="contact" className="ct-section">
      <div className="glow bl very-faint" />
      <div className="ct-inner">
        <header className="sec-head">
          <div className="sec-head-left">
            <div className="eyebrow">
              <span className="led" />
              <span>{t.eyebrow}</span>
              <span className="esep">/</span>
              <span>{t.eyebrowSub}</span>
            </div>
            <h2 className="sec-title">
              {t.titleBefore}<span className="em">{t.titleEm}</span>
              <br />{t.titleAfter}
            </h2>
          </div>
          <p className="head-meta">
            <span className="v">{t.metaBold}</span>{" "}{t.metaText}
          </p>
        </header>

        <div className="ct-grid">
          <div className="ct-info">
            <div className="ct-line">
              <span className="lbl">{t.labelEmail}</span>
              <span className="v"><a href="mailto:hello@lumiq.studio">hello@lumiq.studio</a></span>
            </div>
            <div className="ct-line">
              <span className="lbl">{t.labelStudio}</span>
              <span className="v">{t.studioLine}</span>
            </div>
            <div className="ct-line">
              <span className="lbl">{t.labelHours}</span>
              <span className="v">{t.hours}</span>
            </div>
            <div className="ct-line">
              <span className="lbl">{t.labelFollow}</span>
              <span className="v">
                <a href="#">Instagram</a>{" · "}
                <a href="#">LinkedIn</a>{" · "}
                <a href="#">Are.na</a>
              </span>
            </div>
          </div>

          <ContactForm labels={t.labels} />
        </div>
      </div>
    </section>
  );
}
