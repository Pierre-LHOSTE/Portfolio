// la liste des compétences

interface SkillType {
  en: string;
  fr: string;
}

export const skillsList = [
  {
    fr: "Création et intégration de designs UI/UX intuitifs et attrayants",
    en: "Creation and integration of intuitive and attractive UI/UX designs",
  },
  {
    fr: "Développement d’API et gestion de bases de données sécurisées",
    en: "API development and secure database management",
  },
  {
    fr: "Analyse des besoins et gestion de projets avec méthodologies agiles",
    en: "Needs analysis and project management with agile methodologies",
  },
] as const;
