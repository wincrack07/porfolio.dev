import { jsPDF } from "jspdf"

import { getTranslations, type Lang } from "@/i18n/translations"

const profile = {
  name: "JULIO EMILIO SALDAÑA QUINTERO",
  locationEs: "Panama, Panama",
  locationEn: "Panama City, Panama",
  phone: "+507 6195-0196",
  email: "contacto@juliosaldana.com",
  linkedIn: "linkedin.com/in/juliosaldanaq",
}

const cvContent = {
  es: {
    summaryLabel: "Resumen Profesional",
    summary:
      "Software Engineer con experiencia en desarrollo full-stack, integraciones de sistemas y plataformas digitales. Enfoque en automatizacion, escalabilidad, CI/CD, DevOps y desarrollo asistido por IA para acelerar entregas y mejorar la calidad del software.",
    competenciesLabel: "Competencias",
    competencies: [
      "Full Stack: React, Flutter, Node.js",
      "API Design & Integrations: REST, JSON",
      "CI/CD, DevOps y GitHub",
      "Arquitectura, escalabilidad y automatizacion",
      "Metodologias Agile: Scrum, Kanban",
      "Vibe coding y prompt engineering",
    ],
    educationLabel: "Educacion",
    education: [
      {
        degree: "Ingenieria de Software (en progreso)",
        school: "Universidad Interamericana de Panama",
      },
      {
        degree: "Licenciatura en Publicidad",
        school: "Universidad Autonoma de Chiriqui",
      },
    ],
    experienceLabel: "Experiencia Laboral",
    experience: [
      {
        title: "Developer",
        date: "Ago 2024 - Presente",
        company: "CLAU.IO",
        bullets: [
          "Desarrollo e integracion de plataformas e-commerce y loyalty con React.",
          "Construccion y mantenimiento de soluciones movil/web con Flutter.",
          "Integraciones API, automatizacion y uso de IA para acelerar delivery.",
        ],
      },
      {
        title: "CEO - Panama Division",
        date: "Jul 2023 - Jul 2025",
        company: "Geek Tech Sol",
        bullets: [
          "Lidere implementaciones de software, ERP y plataformas web.",
          "Disene soluciones escalables y optimice entornos de hosting.",
          "Automaticé procesos y gestione el ciclo end-to-end hasta despliegue.",
        ],
      },
      {
        title: "IT & E-commerce",
        date: "Experiencia previa",
        company: "Super Remate",
        bullets: [
          "Implemente Odoo ERP para mejorar flujos operativos y confiabilidad.",
          "Optimice la plataforma e-commerce logrando un aumento del 30% en ventas.",
          "Mejore la infraestructura aumentando la eficiencia en aproximadamente 15%.",
        ],
      },
    ],
    certificationLabel: "Certificacion",
    certification: "Vibe Coding with GitHub Copilot.",
    languagesLabel: "Idiomas",
    languages: "Espanol (nativo) | Ingles (professional working)",
  },
  en: {
    summaryLabel: "Professional Summary",
    summary:
      "Software Engineer experienced in full-stack development, system integrations, and digital platforms. Strong focus on automation, scalability, CI/CD, DevOps, and AI-assisted development to speed up delivery and improve software quality.",
    competenciesLabel: "Core Qualifications",
    competencies: [
      "Full Stack: React, Flutter, Node.js",
      "API Design & Integrations: REST, JSON",
      "CI/CD, DevOps, and GitHub",
      "Architecture, scalability, and automation",
      "Agile methodologies: Scrum, Kanban",
      "Vibe coding and prompt engineering",
    ],
    educationLabel: "Education",
    education: [
      {
        degree: "Software Engineering (in progress)",
        school: "Interamerican University of Panama",
      },
      {
        degree: "Bachelor's Degree in Advertising",
        school: "Autonomous University of Chiriqui",
      },
    ],
    experienceLabel: "Work Experience",
    experience: [
      {
        title: "Developer",
        date: "Aug 2024 - Present",
        company: "CLAU.IO",
        bullets: [
          "Developed and integrated e-commerce and loyalty platforms using React.",
          "Built and maintained cross-platform mobile and web solutions with Flutter.",
          "Delivered API integrations, automation flows, and AI-assisted development practices.",
        ],
      },
      {
        title: "CEO - Panama Division",
        date: "Jul 2023 - Jul 2025",
        company: "Geek Tech Sol",
        bullets: [
          "Led software implementations including ERP systems and web platforms.",
          "Designed scalable solutions and optimized hosting environments.",
          "Automated operations and managed end-to-end delivery through deployment.",
        ],
      },
      {
        title: "IT & E-commerce",
        date: "Previous experience",
        company: "Super Remate",
        bullets: [
          "Implemented Odoo ERP to improve operational workflows and reliability.",
          "Increased e-commerce sales by 30% through platform optimization.",
          "Improved infrastructure efficiency by approximately 15% through system enhancements.",
        ],
      },
    ],
    certificationLabel: "Certification",
    certification: "Vibe Coding with GitHub Copilot.",
    languagesLabel: "Languages",
    languages: "Spanish (Native) | English (Professional working)",
  },
} satisfies Record<Lang, any>

export async function downloadCvPdf(lang: Lang, fileName?: string) {
  const t = getTranslations(lang)
  const content = cvContent[lang]
  const pdf = new jsPDF({ unit: "pt", format: "a4" })
  const pageWidth = pdf.internal.pageSize.getWidth()
  const pageHeight = pdf.internal.pageSize.getHeight()
  const marginX = 30
  const labelWidth = lang === "en" ? 168 : 116
  const gap = 18
  const contentX = marginX + labelWidth + gap
  const contentWidth = pageWidth - contentX - marginX
  let cursorY = 38

  const blue = "#1884d1"
  const dark = "#1f2937"
  const muted = "#4b5563"

  const addWrappedText = (
    text: string,
    x: number,
    y: number,
    maxWidth: number,
    lineHeight = 13,
  ) => {
    const lines = pdf.splitTextToSize(text, maxWidth)
    pdf.text(lines, x, y)
    return y + lines.length * lineHeight
  }

  const ensurePage = (nextY: number) => {
    if (nextY <= pageHeight - 26) return
    pdf.addPage()
    cursorY = 38
  }

  const drawRule = (y: number) => {
    pdf.setDrawColor(24, 132, 209)
    pdf.setLineWidth(1.5)
    pdf.line(marginX, y, pageWidth - marginX, y)
  }

  const drawLabel = (label: string, y: number) => {
    pdf.setTextColor(blue)
    pdf.setFont("helvetica", "bold")
    pdf.setFontSize(10.5)
    pdf.text(label.toUpperCase(), marginX, y)
  }

  const drawParagraph = (text: string, y: number, size = 10.5, lineHeight = 12.5) => {
    pdf.setTextColor(dark)
    pdf.setFont("helvetica", "normal")
    pdf.setFontSize(size)
    return addWrappedText(text, contentX, y, contentWidth, lineHeight)
  }

  const drawBullets = (items: string[], y: number, columns = 1) => {
    pdf.setTextColor(dark)
    pdf.setFont("helvetica", "normal")
    pdf.setFontSize(10)

    if (columns === 2) {
      const colGap = 20
      const colWidth = (contentWidth - colGap) / 2
      const leftItems = items.filter((_, index) => index % 2 === 0)
      const rightItems = items.filter((_, index) => index % 2 === 1)

      const drawColumn = (columnItems: string[], x: number) => {
        let columnY = y
        columnItems.forEach((item) => {
          const text = `• ${item}`
          const lines = pdf.splitTextToSize(text, colWidth)
          pdf.text(lines, x, columnY)
          columnY += lines.length * 11 + 4
        })
        return columnY
      }

      const leftY = drawColumn(leftItems, contentX)
      const rightY = drawColumn(rightItems, contentX + colWidth + colGap)
      return Math.max(leftY, rightY)
    }

    let nextY = y
    items.forEach((item) => {
      const text = `• ${item}`
      const lines = pdf.splitTextToSize(text, contentWidth)
      pdf.text(lines, contentX, nextY)
      nextY += lines.length * 11 + 3
    })
    return nextY
  }

  const section = (label: string, render: () => number, topGap = 26, bottomGap = 14) => {
    ensurePage(cursorY + topGap + 40)
    drawRule(cursorY)
    const labelY = cursorY + 20
    drawLabel(label, labelY)
    const endY = render()
    cursorY = endY + bottomGap
  }

  pdf.setFillColor(24, 132, 209)
  pdf.rect(0, 0, pageWidth, 108, "F")

  pdf.setTextColor("#ffffff")
  pdf.setFont("helvetica", "bold")
  pdf.setFontSize(27)
  pdf.text(profile.name, pageWidth / 2, 40, { align: "center" })

  pdf.setFont("helvetica", "bold")
  pdf.setFontSize(8.7)
  const location = lang === "en" ? profile.locationEn : profile.locationEs
  pdf.text(
    `${location}  •  ${profile.phone}  •  ${profile.email}  •  ${profile.linkedIn}`,
    pageWidth / 2,
    79,
    { align: "center" },
  )

  cursorY = 136

  section(content.summaryLabel, () => drawParagraph(content.summary, cursorY + 22, 10.6, 13))

  section(content.competenciesLabel, () => drawBullets(content.competencies, cursorY + 22, 2), 22, 10)

  section(content.educationLabel, () => {
    let nextY = cursorY + 22
    content.education.forEach((item) => {
      pdf.setTextColor(dark)
      pdf.setFont("helvetica", "bold")
      pdf.setFontSize(10.6)
      nextY = addWrappedText(item.degree, contentX, nextY, contentWidth, 12)
      pdf.setFont("helvetica", "normal")
      pdf.setFontSize(10.2)
      nextY = addWrappedText(item.school, contentX, nextY, contentWidth, 12)
      nextY += 6
    })
    return nextY - 2
  })

  section(content.experienceLabel, () => {
    let nextY = cursorY + 22
    content.experience.forEach((item) => {
      pdf.setTextColor(dark)
      pdf.setFont("helvetica", "bold")
      pdf.setFontSize(10.8)
      nextY = addWrappedText(`${item.title} | ${item.date}`, contentX, nextY, contentWidth, 12)
      pdf.setFontSize(10.2)
      nextY = addWrappedText(item.company, contentX, nextY, contentWidth, 12)
      pdf.setTextColor(muted)
      pdf.setFont("helvetica", "normal")
      item.bullets.forEach((bullet) => {
        const lines = pdf.splitTextToSize(`• ${bullet}`, contentWidth)
        pdf.text(lines, contentX, nextY)
        nextY += lines.length * 10.6 + 2
      })
      nextY += 8
    })
    return nextY - 4
  }, 22, 10)

  section(content.certificationLabel, () => drawParagraph(content.certification, cursorY + 22, 10.4, 12), 20, 10)

  section(content.languagesLabel, () => drawParagraph(content.languages, cursorY + 22, 10.4, 12), 20, 8)

  pdf.save(fileName ?? t.hero.cvFileName)
}