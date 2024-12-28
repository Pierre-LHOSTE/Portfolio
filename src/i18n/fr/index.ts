import generateProjectTranslations from "../../utils/generateProjectTranslations";
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
      french: "",
      sentence: "{french: string}{passionate: string} et {responsible: string} en tant que",
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
  section: {
    stacks: {
      title: "Ma stack technique",
      description:
        "Retrouvez ici les langages, frameworks, librairies et outils qui composent ma stack technique quotidienne. Certains ont été directement intégrés dans la création de ce portfolio, d’autres ont été remplacés au fil du temps pour s’adapter à mes valeurs et de mes préférences et d’autres que j’expérimente actuellement.",
    },
    timeline: {
      title: "Mon parcours",
      description:
        "Une présentation chronologique de mon parcours professionnel, mes expériences, mes compétences et mes formations accompagnée de quelques informations bonus. La durée de chaque étape est représentée de manière proportionnelle.",
    },
    projects: {
      title: "Mes projets",
      description:
        "Découvrez une sélection non exhaustive de projets open source sur lesquels j'ai travaillé, choisis pour représenter mes compétences actuelles. Chaque projet est accompagné de son repo distant, ainsi que de la liste des outils et technologies utilisés.",
    },
    contact: {
      title: "Me contacter",
      description:
        'Pour me contacter, utilisez le formulaire ci-dessous en cliquant sur "Envoyer un message", ou contactez-moi directement par mail ou via les réseaux sociaux. À titre d\'information, je privilégie les mails pour une première prise de contact',
    },
  },
  projects: generateProjectTranslations("fr"),
} satisfies BaseTranslation;

console.log(fr);

export default fr;
