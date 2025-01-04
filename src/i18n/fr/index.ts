import {
  generateProjectTranslations,
  generateStackTranslations,
  generateTimelineTranslations,
} from "../../utils/generateTranslations";
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
      sentence: "{french: string}, {passionate: string} et {responsible: string}",
    },
    title: {
      developer: "Développeur",
      designer: "Designer",
      sentence: "Un {developer: string} & {designer: string} web",
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
      graduated: "Diplômé",
      inProgress: "En cours",
    },
    projects: {
      title: "Mes projets",
      description:
        "Découvrez une sélection non exhaustive de projets open source sur lesquels j'ai travaillé, choisis pour représenter mes compétences actuelles. Chaque projet est accompagné de son repo distant, ainsi que de la liste des outils et technologies utilisés.",
      visitButton: "Visiter",
      repositoryButton: "Dépôt distant",
    },
    contact: {
      title: "Me contacter",
      description:
        'Pour me contacter, utilisez le formulaire ci-dessous en cliquant sur "Envoyer un message", ou contactez-moi directement par mail ou via les réseaux sociaux. À titre d\'information, je privilégie les mails pour une première prise de contact',
      pros: "Avantages",
      cons: "Inconvénients",
    },
  },
  projects: generateProjectTranslations("fr"),
  timelines: generateTimelineTranslations("fr"),
  stacks: generateStackTranslations("fr"),
  contact: {
    form: {
      title: "Formulaire",
      description: "Le moyen le plus simple de me joindre directement sur ce site",
      actionTitle: "Envoyer un message",
      pros: ["Rapide & simple"],
      cons: ["Moins professionnel", "Flexibilité limitée", "Uniquement pour des messages simples"],
    },
    mail: {
      title: "Email",
      description: "Le meilleur moyen de me contacter pour n'importe quelle demande",
      actionTitle: "Envoyer un email",
      pros: [
        "Professionnel & crédible",
        "Notifications instantanées",
        "Facile à utiliser",
        "Suivi facile & support des pièces jointes",
      ],
      cons: ["Aucun"],
    },
    socialNetworks: {
      title: "LinkedIn",
      description: "Connectez-vous avec moi sur LinkedIn ou consultez mon profil",
      actionTitle: "Voir le profil",
      pros: ["Personnel & relationnel", "Rapide et direct"],
      cons: ["Peut ne pas être vérifié souvent"],
    },
  },
  form: {
    title: "Envoyer un message",
    description:
      "Une question ou une demande particulière ? Contactez-moi via ce formulaire. Nom et email sont facultatifs pour un message anonyme.",
    optional: "facultatif",
    name: "Nom",
    namePlaceholder: "Votre nom",
    email: "Email",
    emailPlaceholder: "Votre email",
    message: "Message",
    messagePlaceholder: "Votre message",
    send: "Envoyer",
    success: "Message envoyé avec succès !",
  },
  footer: {
    actions: {
      title: "Actions",
      lang: "Langue",
      theme: "Thème",
    },
    profile:
      "Je suis un développeur et designer web français passionné et responsable, qui aime créer des sites web esthétiques et fonctionnels ♥︎",
    contact: {
      title: "Contact",
      social1: "Profil LinkedIn",
      social2: "Profil Bluesky",
    },
    build: {
      title: "Conçu et construit",
      from: "À partir de zéro",
      with: "Avec Next.js",
      and: "et bien d'autres",
      hosted: "Hébergé sur Vercel",
    },
  },
  locale: {
    en: "English",
    fr: "Français",
    debug: "▩▩▩▩▩",
    auto: "Auto",
  },
  theme: {
    dark: "Sombre",
    light: "Clair",
    auto: "Auto",
  },
  chat: {
    title: "Discutez avec l'IA-MOI !",
    search: "Rechercher",
    today: "Aujourd'hui",
    yesterday: "Hier",
    assistant: "Assistant",
    user: "Moi",
    type: "Entrez votre message...",
    newChat: "Nouvelle discussion",
  },
  stack: {
    language: "Langages",
    framework: "Frameworks",
    libraries: "Librairies",
    tools: "Outils",
    database: "Bases de données",
    backend: "Backend",
    frontend: "Frontend",
    deployment: "Hébergement & Déploiement",
    replaced: 'Remplacé par {name: string} car "{reason: string}"',
    learning: "Récemment expérimenté",
    active: "Utilisé sur ce site",
    love: "Coup de cœur",
  },
} satisfies BaseTranslation;

export default fr;
