import { stackItem } from "../stack/data";
import type { StackType } from "../stack/stack";
import type { ProjectType } from "./project";

export const projectsList = {
  rectifaid: {
    name: { en: "Rectifaid", fr: "Rectifaid" },
    description: {
      fr: "Il s’agit d’un petit SaaS sous la forme d’une web-app dédiée à la correction et à l'amélioration de texte par intelligence artificielle.",
      en: "This is a small SaaS in the form of a web app dedicated to correcting and improving text using artificial intelligence.",
    },
    technologies: [
      "react",
      "ai",
      "antDesign",
      "typescript",
      "nextJs",
      "betterAuth",
      "storybook",
      "vscodium",
      "git",
      "github",
      "overlayscrollbars",
      "zustand",
      "biome",
      "css",
      "figma",
      "prisma",
      "vercel",
    ],
    thumbnail:
      "https://qg007gk6n2popinf.public.blob.vercel-storage.com/project-thumbnail/rectifaid/thumbnail.png",
    images: [],
    url: "https://rectifaid.vercel.app/",
    tags: ["web-app", "saas", "fullstack"],
  },

  portfolio: {
    name: { en: "Actual Portfolio", fr: "Portfolio actuel" },
    technologies: Object.keys(stackItem).filter((stackName) => {
      const stack: StackType = stackItem[stackName as keyof typeof stackItem];
      return stack.tags.includes("active");
    }) as (keyof typeof stackItem)[],
    description: {
      en: "My old portfolio no longer reflected my current skills or really appealed to me, so I decided to create a new one. I wanted to incorporate all my expertise down to the last detail, without compromise, with a particular focus on design. To meet the challenge, I deliberately chose not to rely on Ant Design, the component library I usually use.",
      fr: "Ne reflétant plus mes compétences actuelles et ne me plaisant plus vraiment, mon ancien portfolio m’a poussé à en créer un nouveau. J’ai voulu y intégrer tout mon savoir-faire dans les moindres détails, sans compromis, avec une attention particulière sur le design. Pour relever le défi, j’ai délibérément choisi de ne pas m’appuyer sur Ant Design, la librairie de composants que j’utilise habituellement.",
    },
    images: [
      "https://qg007gk6n2popinf.public.blob.vercel-storage.com/project-thumbnail/portfolio/main.png",
    ],
    thumbnail:
      "https://qg007gk6n2popinf.public.blob.vercel-storage.com/project-thumbnail/portfolio/main.png",
    url: "https://pierre-lhoste.vercel.app/",
    repo: "https://github.com/Pierre-LHOSTE/Portfolio",
    tags: ["portfolio", "fullstack"],
    endDate: "2025",
  },

  "212-colors": {
    name: { en: "212-Colors", fr: "212-Colors" },
    description: {
      en: "This training project was developed throughout my work-study period and presented at my diploma examination session. It introduced me to technologies such as Next.js, Postgres, Prisma, TypeScript and many others. It lets you store colors and create themes. Its concept grew out of my personal need to organise the color palettes that I reuse in each of my projects.",
      fr: "Ce projet de formation a été développé tout au long de mon alternance et présenté lors de ma session d'examen pour l'obtention du diplôme. J'y ai découvert des technologies comme Next.js, Postgres, Prisma, TypeScript et bien d’autres. Il permet de stocker des couleurs et de créer des thèmes. Son concept est né de mon besoin personnel d’organiser les palettes de couleurs que je réutilise dans chacun de mes projets.",
    },
    technologies: [
      "react",
      "dartSass",
      "scss",
      "ai",
      "antDesign",
      "authJs",
      "dndKit",
      "prisma",
      "postgresql",
      "tablerIcons",
      "vercel",
      "bcrypt",
      "motion",
      "nextJs",
      "overlayscrollbars",
      "typesafeI18n",
      "zod",
      "zustand",
      "typescript",
      "storybook",
      "biome",
      "figma",
      "git",
      "github",
      "notion",
      "chatgpt",
      "vscodium",
    ],
    images: [
      "https://qg007gk6n2popinf.public.blob.vercel-storage.com/project-thumbnail/212-colors/themes-section.png",
      "https://qg007gk6n2popinf.public.blob.vercel-storage.com/project-thumbnail/212-colors/themes-section-dark.png",
      "https://qg007gk6n2popinf.public.blob.vercel-storage.com/project-thumbnail/212-colors/colors-section.png",
      "https://qg007gk6n2popinf.public.blob.vercel-storage.com/project-thumbnail/212-colors/colors-section-dark.png",
    ],
    thumbnail:
      "https://qg007gk6n2popinf.public.blob.vercel-storage.com/project-thumbnail/212-colors/thumbnail.png",
    url: "https://212-colors.vercel.app/",
    repo: "https://github.com/Pierre-LHOSTE/212-colors",
    endDate: "2024-10-31",
    tags: ["web-app", "for-school", "fullstack"],
  },

  "212-collections": {
    name: { en: "212-Collections", fr: "212-Collections" },
    description: {
      fr: "C’était un projet personnel que j’ai réalisé pour m’entraîner et découvrir le développement fullstack. Mon objectif était de créer une application avec Electron, entièrement respectueuse de la vie privée, en intégrant le backend directement et en laissant l’utilisateur créer et gérer sa base de données. Je me suis cependant rendu compte que je ne maîtrisais pas tout. J’ai donc mis ce projet de côté pour en commencer un autre dans le cadre de l’école que je venais de rejoindre, bien que l’application fonctionnait malgré tout.",
      en: "It was a personal project that I carried out to train myself and discover fullstack development. My aim was to create an application with Electron that was completely privacy-friendly, integrating the backend directly and letting the user create and manage their own database. However, I realised that I hadn't mastered everything. So I put that project on hold to start another at the school I'd just joined, although the application still worked.",
    },
    technologies: [
      "antDesign",
      "dndKit",
      "reactRedux",
      "react",
      "scss",
      "dartSass",
      "typescript",
      "fastify",
      "mongodb",
      "electron",
    ],
    images: [],
    thumbnail:
      "https://qg007gk6n2popinf.public.blob.vercel-storage.com/project-thumbnail/212-collections/thumbnail.png",
    url: "https://github.com/212-Collections/212-Collections",
    repo: "https://github.com/212-Collections/212-Collections",
    endDate: "2023-10-13",
    tags: ["for-training", "web-app", "fullstack"],
  },

  "first-portfolio": {
    name: { en: "Old Portfolio", fr: "Ancien Portfolio" },
    description: {
      fr: "Voici mon tout premier portfolio, réalisé avec React et imaginé sous la forme d'un système d'exploitation. Il s'agit d'un site statique hébergé sur GitHub Pages. Malheureusement, seul le code source du fichier build est accessible pour le moment.",
      en: "This is my very first portfolio, created with React and imagined in the form of an operating system. It's a static site hosted on GitHub Pages. Unfortunately, only the source code of the build file is available at the moment.",
    },
    technologies: [
      "html",
      "scss",
      "dartSass",
      "javascript",
      "git",
      "github",
      "vscodium",
      "react",
      "tablerIcons",
    ],
    images: [
      "https://qg007gk6n2popinf.public.blob.vercel-storage.com/project-thumbnail/first-portfolio/main.png",
    ],
    thumbnail:
      "https://qg007gk6n2popinf.public.blob.vercel-storage.com/project-thumbnail/first-portfolio/thumbnail.png",
    url: "https://pierre-lhoste.github.io/",
    repo: "https://github.com/Pierre-LHOSTE/Pierre-LHOSTE.github.io",
    tags: ["portfolio", " static"],
    endDate: "2022-12-17",
  },
} as const satisfies Record<string, ProjectType>;
