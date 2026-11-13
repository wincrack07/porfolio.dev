export const languages = {
  es: "Español",
  en: "English",
} as const

export type Lang = keyof typeof languages

export const defaultLang: Lang = "es"

type NavKey = "experience" | "about" | "contact" | "language"

export const translations = {
  es: {
    meta: {
      title: "Portfolio de Julio Emilio Saldaña — Software Engineer",
      description:
        "Software Engineer con experiencia en desarrollo full-stack, integraciones y plataformas digitales. Enfoque en automatización, escalabilidad, CI/CD, DevOps y desarrollo asistido por IA.",
    },
    nav: {
      experience: "Experiencia",
      about: "Sobre mí",
      contact: "Contacto",
      language: "Idioma",
    } satisfies Record<NavKey, string>,
    hero: {
      availability: "Disponible para trabajar",
      heading: "Hola, soy Julio Emilio Saldaña",
      taglineStrong:
        "Software Engineer | Automation | DevOps | AI-Driven Development",
      tagline:
        "Panamá, Panamá 🇵🇦. Experiencia en desarrollo full‑stack, integraciones y automatización con foco en escalabilidad y buenas prácticas modernas (CI/CD).",
      contactMe: "Contáctame",
      whatsapp: "WhatsApp",
      linkedIn: "LinkedIn",
      downloadCv: "Descargar CV",
      cvFileName: "julio-emilio-saldana-cv-es.pdf",
    },
    sections: {
      experienceTitle: "Experiencia laboral",
      aboutTitle: "Sobre mí",
    },
    about: {
      paragraphs: [
        "Soy Julio Emilio Saldaña Quintero, Software Engineer con experiencia en desarrollo full‑stack, integraciones de sistemas y plataformas digitales. Mi enfoque está en la automatización, la escalabilidad y prácticas modernas como CI/CD y DevOps.",
        "He trabajado con React, Flutter y Node.js, construyendo soluciones web/móvil e integrando servicios mediante APIs REST (JSON). Me interesa diseñar flujos y arquitectura que faciliten el mantenimiento y el crecimiento.",
        "También utilizo AI‑Assisted Development (vibe coding) y prompt engineering para acelerar entregas y mejorar la calidad del software.",
      ],
      facts: {
        competencies: {
          label: "Competencias",
          value:
            "Full Stack (React, Flutter, Node.js) · API Design & Integrations (REST/JSON) · CI/CD & DevOps · Git/GitHub · Arquitectura & Escalabilidad · Agile (Scrum/Kanban).",
        },
        education: {
          label: "Educación",
          value:
            "Ingeniería de Software (en progreso) — Universidad Interamericana de Panamá. Licenciatura en Publicidad — Universidad Autónoma de Chiriquí.",
        },
        certification: {
          label: "Certificación",
          value: "Vibe Coding with GitHub Copilot.",
        },
        languages: {
          label: "Idiomas",
          value: "Español (nativo) · Inglés (nivel profesional).",
        },
        contact: {
          label: "Contacto",
          value:
            "+507 6195‑0196 · contacto@juliosaldana.com · LinkedIn: juliosaldanaq.",
        },
      },
    },
    experience: {
      items: [
        {
          date: "Ago 2024 — Presente",
          title: "Developer",
          company: "CLAU.IO",
          description:
            "Desarrollo e integración de plataformas e-commerce y loyalty con React. Construcción y mantenimiento de soluciones móvil/web con Flutter. Diseño de integraciones API y flujos de automatización para mejorar eficiencia, escalabilidad y performance. Uso de desarrollo asistido por IA (vibe coding, prompt engineering) para acelerar delivery y reducir errores.",
        },
        {
          date: "Jul 2023 — Jul 2025",
          title: "CEO — Panama Division",
          company: "Geek Tech Sol",
          description:
            "Lideré implementaciones de software (ERP y plataformas web), diseñé soluciones escalables y optimicé entornos de hosting. Automaticé procesos operativos mejorando eficiencia y tiempos de entrega. Gestión end-to-end: concepto, ejecución y despliegue.",
        },
        {
          date: "Experiencia previa",
          title: "IT & E-commerce",
          company: "Super Remate",
          description:
            "Implementación de Odoo ERP para mejorar flujos operativos y confiabilidad. Optimización de la plataforma e-commerce logrando +30% en ventas. Mejoras de infraestructura aumentando eficiencia ~15% mediante optimizaciones del sistema.",
        },
      ],
    },
    footer: {
      rights: "Casi todos los derechos reservados",
      about: "Sobre mí",
      contact: "Contacto",
    },
  },
  en: {
    meta: {
      title: "Julio Emilio Saldaña — Software Engineer",
      description:
        "Software Engineer experienced in full-stack development, system integrations, and digital platforms. Focused on automation, scalability, CI/CD, DevOps, and AI-assisted development.",
    },
    nav: {
      experience: "Experience",
      about: "About",
      contact: "Contact",
      language: "Language",
    } satisfies Record<NavKey, string>,
    hero: {
      availability: "Available for work",
      heading: "Hi, I'm Julio Emilio Saldaña",
      taglineStrong:
        "Software Engineer | Automation | DevOps | AI-Driven Development",
      tagline:
        "Panama City, Panama 🇵🇦. Experienced in full‑stack development, integrations, and automation with a focus on scalability and modern engineering practices (CI/CD).",
      contactMe: "Contact",
      whatsapp: "WhatsApp",
      linkedIn: "LinkedIn",
      downloadCv: "Download CV",
      cvFileName: "julio-emilio-saldana-cv-en.pdf",
    },
    sections: {
      experienceTitle: "Work Experience",
      aboutTitle: "About",
    },
    about: {
      paragraphs: [
        "I'm Julio Emilio Saldaña Quintero, a Software Engineer with experience in full‑stack development, system integrations, and digital platforms. I focus on automation, scalability, and modern practices like CI/CD and DevOps.",
        "I’ve worked with React, Flutter, and Node.js, building web/mobile solutions and integrating services through REST APIs (JSON). I enjoy designing flows and architecture that make systems easier to maintain and scale.",
        "I also use AI‑assisted development (vibe coding) and prompt engineering to speed up delivery and improve software quality.",
      ],
      facts: {
        competencies: {
          label: "Core competencies",
          value:
            "Full Stack (React, Flutter, Node.js) · API Design & Integrations (REST/JSON) · CI/CD & DevOps · Git/GitHub · Architecture & Scalability · Agile (Scrum/Kanban).",
        },
        education: {
          label: "Education",
          value:
            "Software Engineering (in progress) — Interamerican University of Panama. Bachelor’s Degree in Advertising — Autonomous University of Chiriquí.",
        },
        certification: {
          label: "Certification",
          value: "Vibe Coding with GitHub Copilot.",
        },
        languages: {
          label: "Languages",
          value: "Spanish (Native) · English (Professional working).",
        },
        contact: {
          label: "Contact",
          value:
            "+507 6195‑0196 · contacto@juliosaldana.com · LinkedIn: juliosaldanaq.",
        },
      },
    },
    experience: {
      items: [
        {
          date: "Aug 2024 — Present",
          title: "Developer",
          company: "CLAU.IO",
          description:
            "Developed and integrated e-commerce and loyalty platforms using React and modern web technologies. Built and maintained cross-platform mobile/web solutions with Flutter. Designed API integrations and automation workflows to improve efficiency, scalability, and performance. Applied AI-assisted development (vibe coding, prompt engineering) to accelerate delivery and reduce errors.",
        },
        {
          date: "Jul 2023 — Jul 2025",
          title: "CEO — Panama Division",
          company: "Geek Tech Sol",
          description:
            "Led software implementations including ERP systems and web platforms. Designed scalable solutions and optimized hosting environments. Automated operational processes to improve efficiency and delivery timelines. Managed the end-to-end lifecycle from concept to deployment.",
        },
        {
          date: "Previous experience",
          title: "IT & E-commerce",
          company: "Super Remate",
          description:
            "Implemented Odoo ERP to improve operational workflows and system reliability. Increased e-commerce sales by 30% through platform optimization. Improved infrastructure efficiency by ~15% through system enhancements.",
        },
      ],
    },
    footer: {
      rights: "All rights reserved (almost)",
      about: "About",
      contact: "Contact",
    },
  },
} satisfies Record<Lang, any>

export function getTranslations(lang: Lang) {
  return translations[lang]
}
