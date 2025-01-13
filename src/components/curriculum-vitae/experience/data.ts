import type { ExperienceType } from "./type";

export const ExperienceList = {
  coopcycle: {
    name: {
      en: "UI/UX Designer and Fullstack Developer",
      fr: "UI/UX Designer et Développeur Fullstack",
    },
    logo: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/assets/coopcycle-gray.svg",
    company: {
      en: "CoopCycle",
      fr: "CoopCycle",
    },
    startDate: "2024",
    endDate: "2025",
    location: {
      en: "Remote",
      fr: "Distanciel",
    },
    tasks: [
      {
        fr: "Conception d'interfaces utilisateur sur Figma",
        en: "User interfaces design on Figma",
      },
      {
        fr: "Implémentation du design dans l'application mobile en React Native",
        en: "Implementation of the design in the mobile application using React Native",
      },
      {
        fr: "Ajout de nouvelles fonctionnalités à l'application mobile",
        en: "Added new features to the mobile application",
      },
      {
        fr: "Petites améliorations et fonctionnalités ajoutées au site web sur PHP et Twig",
        en: "Minor improvements and feature additions to the website using PHP and Twig",
      },
    ],
  },
} as const satisfies Record<string, ExperienceType>;
