
import React from 'react';
import { Experience, SkillCategory, Interest } from './types';

export const CV_DATA = {
  name: "Théophile Tokré",
  title: "IA & DATA Expert",
  profile: "Expert en écosystèmes digitaux, je fusionne l’ingénierie mathématique, l’analyse de données et le marketing de haute performance. Spécialiste du GIO (Generative Engine Optimization) et de l'Automation, je conçois des structures scalables basées sur la logique fractale.",
  experiences: [
    {
      company: "CARRI Systems",
      role: "Responsable Marketing & Analyste SQL",
      period: "2024 – 2026",
      type: "Alternance",
      description: [
        "GIO & SEO IA : Pilotage de la stratégie de visibilité sur les moteurs de réponse (Perplexity, SearchGPT, Gemini).",
        "Data Analysis : Extraction et traitement via SQL complexe pour pilotage ROI.",
        "Automation : Workflows Power Automate & Google Apps Script pour Salesforce.",
        "Infrastructure : Conseil technique stations HPC NVIDIA pour Deep Learning."
      ]
    },
    {
      company: "CARRI Systems",
      role: "Webmaster, Analyste SQL & Designer",
      period: "2023 – 2024",
      type: "CDI",
      description: [
        "Web : Refonte WordPress avec snippets personnalisés et Elementor.",
        "CRM : Maintenance bases de données CEGID 14 & 16.",
        "Design : Identité visuelle print/digitale via Adobe & Affinity."
      ]
    },
    {
      company: "Les Jardins Numériques",
      role: "Designer UX/UI & Formateur",
      period: "2020 – 2023",
      type: "Alternance",
      description: [
        "Conception : Prototypes haute fidélité et interfaces UX/UI.",
        "3D Artist : Modélisation et rendu Blender.",
        "Pédagogie : Enseignement expert suites Adobe et Microsoft Office."
      ]
    }
  ] as Experience[],
  skills: [
    { title: "Languages", skills: ["SQL (Expert)", "Python", "HTML/PHP", "Java", "C++", "Apps Script"] },
    { title: "IA Tools", skills: ["Claude", "Gemini", "ChatGPT", "Copilot", "Prompt Engineering"] },
    { title: "Data & Marketing", skills: ["Salesforce", "Semrush", "GA4", "GSC", "Buffer"] },
    { title: "Creative", skills: ["Adobe Suite", "Affinity", "DaVinci Resolve", "Blender"] }
  ] as SkillCategory[],
  interests: [
    { title: "Bodybuilding", description: "Amateur (Pro Qualified) - Discipline et résilience.", icon: "💪" },
    { title: "Sciences", description: "Mathématiques fondamentales et Astrophysique.", icon: "🔭" },
    { title: "Warhammer 40k", description: "Stratégie de systèmes complexes.", icon: "⚔️" },
    { title: "Exploration", description: "Immersion culturelle : Europe, Afrique, Amérique.", icon: "🌍" }
  ] as Interest[]
};

export const CHAT_SYSTEM_INSTRUCTION = `
You are the AI version of Théophile Tokré. 
Use the following information to answer user questions about your professional profile:
${JSON.stringify(CV_DATA, null, 2)}

Your tone should be professional, innovative, and data-driven. 
You are an expert in GIO (Generative Engine Optimization) and math-driven marketing.
Always speak in French unless the user asks in another language.
Be concise but impactful.
`;
