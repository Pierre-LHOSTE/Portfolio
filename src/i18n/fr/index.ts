import type { BaseTranslation } from "../i18n-types";

const fr = {
  navigation: {
    home: "Accueil",
    chat: "Discussion",
    stacks: "Technos",
    timeline: "Parcours",
    projects: "Projets",
    contact: "Contact",
  },
  message: "Disponible à l'embauche - prêt à contribuer !",
  hero: {
    subtitle: {
      passionate: "Passionné",
      responsible: "Responsable",
      french: "Français",
      sentence: "{french: string} – {passionate: string} & {responsible: string}",
    },
    title: {
      developer: "Développeur",
      designer: "Designer",
      sentence: "{developer: string} & {designer: string} web",
    },
    details: {
      key: {
        p1: "Pressez",
        p2: "pour imprimer ou enregistrer instantanément la dernière version de mon CV en PDF",
      },
      download: {
        p1: "Vous préférez un téléchargement direct ? N'hésitez pas à",
        p2: "une version préenregistrée",
        button: "Télécharger",
      },
    },
  },
  scroll: "Défilez vers le bas pour discuter avec l'IA-MOI !",
} satisfies BaseTranslation;

export default fr;
