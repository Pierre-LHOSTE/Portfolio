import { IconBraces, IconBrush, IconServer, IconSettings } from "@tabler/icons-react";
import type { StackGroupType, StackIdType, StackType } from "./stack";

export const stackItem = {
  figma: {
    name: "Figma",
    description: {
      en: "Figma is a web-based design tool for creating interfaces, prototypes, and collecting feedback, enabling teams to collaborate in real time across a single platform.",
      fr: "Figma est un outil de conception en ligne permettant de créer des interfaces, des prototypes et de collaborer en temps réel sur une plateforme unique.",
    },
    reason: {
      en: "A modern, complete, and highly efficient design tool",
      fr: "Un outil de design moderne, complet et performant",
    },
    category: "tools",
    homepage: "https://www.figma.com/",
    tags: ["active", "important"],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/figma.svg",
      color: "#0acf83",
      background: "#24272f",
    },
  },

  nextJs: {
    name: "Next.js",
    description: {
      en: "Next.js is a React-based framework that supports server-side rendering, static site generation, and full-stack capabilities for building fast, scalable web applications.",
      fr: "Next.js est un framework basé sur React, offrant le rendu côté serveur, la génération de sites statiques et des fonctionnalités full-stack pour des applications web performantes.",
    },
    reason: {
      en: "A modern React framework with full-stack and deployment ecosystem",
      fr: "Un framework moderne React, full-stack avec écosystème de déploiement",
    },
    category: "framework",
    homepage: "https://nextjs.org/",
    tags: ["active", "love", "important"],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/nextjs.svg",
      color: "#000",
      background: "#fff",
      // invert: "black",
    },
  },

  antDesign: {
    name: "Ant Design",
    description: {
      en: "Ant Design is a React UI library offering a collection of polished components and design tools tailored for building professional and enterprise-level web applications.",
      fr: "Ant Design est une bibliothèque UI React proposant des composants raffinés et des outils de design adaptés à la création d'applications web professionnelles et d'entreprise.",
    },
    reason: {
      en: "A modern, customizable, complete, and sleek React UI library",
      fr: "Une bibliothèque React moderne, complète, jolie et personnalisable",
    },
    category: "frontend",
    homepage: "https://ant.design/",
    tags: ["love"],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/ant-design.svg",
      color: "#1677ff",
      iconHovered:
        "https://cdn-images-1.medium.com/v2/resize:fit:92/1*xYRy51BleLq0QtKwBvgDHA@2x.png",
      background: "#0062be",
    },
  },

  vite: {
    name: "Vite",
    description: {
      en: "Vite is a modern build tool focused on delivering fast development and optimized builds for web applications using an efficient module-based approach.",
      fr: "Vite est un outil de build moderne conçu pour offrir un développement rapide et des builds optimisés pour les applications web grâce à une approche modulaire efficace.",
    },
    reason: {
      en: "An ultra-fast frontend build tool and dev server",
      fr: "Un outil de build et serveur ultra-rapide frontend",
    },
    category: "tools",
    homepage: "https://vite.dev/",
    tags: [],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/vite.svg",
      // color: "radial-gradient(circle farthest-corner at 50% 0%, #ffc31bff 0%, #8778feff 66% 100%)",
      color: "#ffc31b",
      background: "#3B2A62",
      transform: "translateY(4px)",
    },
  },

  react: {
    name: "React",
    description: {
      en: "React is a JavaScript library for building dynamic user interfaces using reusable components, designed to facilitate collaboration across individuals, teams, and organizations.",
      fr: "React est une bibliothèque JavaScript pour créer des interfaces utilisateur dynamiques à l'aide de composants réutilisables, conçue pour faciliter la collaboration entre individus, équipes et organisations.",
    },
    reason: {
      en: "A modern, evolving, flexible library for building UI with JSX",
      fr: "Une bibliothèque moderne, évolutive et flexible pour créer des interfaces",
    },
    category: "frontend",
    homepage: "https://react.dev/",
    tags: ["active", "love", "important"],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/react.svg",
      color: "#61dbfb",
      background: "#18212b",
    },
  },

  prisma: {
    name: "Prisma",
    description: {
      en: "Prisma is a database toolkit providing an intuitive data model, type safety, automated migrations, and support for features like caching and real-time subscriptions.",
      fr: "Prisma est un outil pour bases de données offrant un modèle de données intuitif, la sécurité des types, des migrations automatisées et des fonctionnalités comme le caching et les abonnements en temps réel.",
    },
    reason: {
      en: "An efficient, type-safe, modern ORM for database management in TS",
      fr: "Un ORM efficace, type-safe et moderne pour gérer les bases en TS",
    },
    category: "backend",
    homepage: "https://www.prisma.io/",
    tags: ["love", "important"],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/prisma.svg",
      color: "#4c51bf",
      iconLight:
        "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/prisma-light.svg",
      background: "#2d3748",
      // invert: "white",
    },
  },

  zod: {
    name: "Zod",
    description: {
      en: "Zod is a TypeScript-first library for schema validation, enabling static type inference to ensure data integrity at compile time.",
      fr: "Zod est une bibliothèque axée sur TypeScript pour la validation de schémas, permettant une inférence de types statique pour garantir l'intégrité des données à la compilation.",
    },
    reason: {
      en: "A simple and efficient schema validation library",
      fr: "Une bibliothèque de validation de schémas simple et efficace",
    },
    category: "backend",
    homepage: "https://zod.dev/",
    tags: ["love", "important"],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/zod.svg",
      color: "#3068b7",
      background: "#22334f",
    },
  },

  zustand: {
    name: "Zustand",
    description: {
      en: "Zustand is a lightweight state management library for JavaScript applications, built with a hook-based API, offering flexibility and simplicity for managing application state without unnecessary complexity.",
      fr: "Zustand est une bibliothèque légère de gestion d'état pour les applications JavaScript, avec une API basée sur les hooks, permettant une gestion flexible et simple de l'état des applications sans complexité superflue.",
    },
    reason: {
      en: "A modern, lightweight, and simple state management library",
      fr: "Une bibliothèque moderne, légère et simple pour gérer l'état",
    },
    category: "frontend",
    homepage: "https://zustand-demo.pmnd.rs/",
    tags: ["active", "love"],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/zustand.png",
      color: "#6f6862",
      background: "#56293d",
    },
  },

  dndKit: {
    name: "dnd-kit",
    description: {
      en: "dnd-kit is a React library for creating drag-and-drop interfaces, designed to be lightweight, accessible, and customizable while ensuring high performance in user interactions.",
      fr: "dnd-kit est une bibliothèque React pour créer des interfaces de glisser-déposer, conçue pour être légère, accessible et personnalisable tout en garantissant des performances élevées lors des interactions utilisateur.",
    },
    reason: {
      en: "A modern, lightweight, complete, and performant drag-and-drop library",
      fr: "Une bibliothèque moderne, légère, complète et performante de drag-and-drop",
    },
    category: "frontend",
    homepage: "https://dndkit.com/",
    tags: ["love"],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/dnd-kit.svg",
      color: "#fff",
      background: "#000000",
    },
  },

  tablerIcons: {
    name: "Tabler icons",
    description: {
      en: "Tabler Icons is an open-source collection of 5790 SVG icons, customizable in size, color, and stroke, with compatibility across frameworks like React, SolidJS, Vue, and design tools like Figma.",
      fr: "Tabler Icons est une collection open-source de 5790 icônes SVG, personnalisables en taille, couleur et trait, compatibles avec des frameworks comme React, SolidJS, Vue et des outils comme Figma.",
    },
    reason: {
      en: "Beautiful, modern, complete, and original icon library",
      fr: "Une bibliothèque d'icônes magnifique, moderne, complète et originale",
    },
    category: "frontend",
    homepage: "https://tabler.io/icons",
    tags: ["active", "love"],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/tabler-icons.svg",
      color: "#1289f8",
      background: "#1e2734",
    },
  },

  biome: {
    name: "Biome",
    description: {
      en: "Biome is a fast tool for formatting, linting, and additional code quality tasks, designed to improve developer productivity by executing operations in a fraction of a second.",
      fr: "Biome est un outil rapide pour le formatage, le linting et d'autres tâches liées à la qualité du code, conçu pour améliorer la productivité des développeurs en exécutant les opérations en un temps très court.",
    },
    reason: {
      en: "A modern, fast alternative combining linting and formatting tools",
      fr: "Une alternative moderne et rapide combinant linting et formatage",
    },
    category: "tools",
    homepage: "https://biomejs.dev/",
    tags: ["active", "love"],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/biome.svg",
      color: "#60a5fa",
      background: "#24272f",
    },
  },

  typescript: {
    name: "TypeScript",
    description: {
      en: "TypeScript is a programming language that extends JavaScript with static typing, enabling developers to catch errors early and compile code into standard JavaScript for broader compatibility.",
      fr: "TypeScript est un langage de programmation qui étend JavaScript avec un typage statique, permettant de détecter les erreurs en amont et de compiler du code en JavaScript standard pour une compatibilité étendue.",
    },
    reason: {
      en: "A type-safe and powerful JavaScript superset",
      fr: "Un sur-ensemble type-safe et puissant de JavaScript",
    },
    category: "language",
    homepage: "https://www.typescriptlang.org/",
    tags: ["active", "love", "important"],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/typescript.svg",
      color: "#3178c6",
      background: "#313131",
    },
  },

  javascript: {
    name: "JavaScript",
    description: {
      en: "JavaScript is a versatile, high-level programming language that follows the ECMAScript standard and is primarily used to create interactive and dynamic web applications.",
      fr: "JavaScript est un langage de programmation polyvalent et de haut niveau, conforme à la norme ECMAScript, principalement utilisé pour créer des applications web interactives et dynamiques.",
    },
    reason: {
      en: "A sleek, flexible, and versatile programming language",
      fr: "Un langage de programmation élégant, flexible et polyvalent",
    },
    category: "language",
    homepage: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    replacement: {
      name: "typescript",
      reason: {
        en: "Stronger type enforcement",
        fr: "Renforcement des types",
      },
    },
    tags: [],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/javascript.svg",
      color: "#f0dc4e",
      background: "#313131",
    },
  },

  css: {
    name: "CSS",
    description: {
      en: "CSS is a style sheet language that defines the visual appearance and layout of documents created with markup languages like HTML, enabling better design and user experience on the web.",
      fr: "CSS est un langage de feuille de style qui définit l'apparence visuelle et la mise en page des documents créés avec des langages de balisage comme HTML, permettant d'améliorer le design et l'expérience utilisateur sur le web.",
    },
    reason: {
      en: "A simple and versatile styling language",
      fr: "Un langage de style simple et polyvalent",
    },
    category: "language",
    homepage: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    replacement: {
      name: "sass",
      reason: {
        en: "Improved code maintainability",
        fr: "Meilleure maintenabilité du code",
      },
    },
    tags: ["important"],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/css.svg",
      color: "#214ce5",
      background: "#313131",
    },
  },

  html: {
    name: "HTML",
    description: {
      en: "HTML is the standard markup language used to structure and display content in web browsers, serving as the backbone of web pages by organizing text, images, and other elements.",
      fr: "HTML est le langage de balisage standard utilisé pour structurer et afficher le contenu dans les navigateurs web, servant de base aux pages web en organisant textes, images et autres éléments.",
    },
    reason: {
      en: "A simple and versatile markup language",
      fr: "Un langage de balisage simple et polyvalent",
    },
    category: "language",
    homepage: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    tags: ["active"],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/html.svg",
      color: "#e54c21",
      background: "#313131",
    },
  },

  dartSass: {
    name: "Dart Sass",
    description: {
      en: "Dart Sass is a powerful and stable extension for CSS, enabling features like nesting, variables, and mixins to enhance stylesheet development.",
      fr: "Dart Sass est une extension puissante et stable pour le CSS, offrant des fonctionnalités comme l'imbrication, les variables et les mixins pour améliorer le développement des feuilles de style.",
    },
    reason: {
      en: "A practical and powerful CSS preprocessor",
      fr: "Un préprocesseur CSS pratique et puissant",
    },
    category: "frontend",
    homepage: "https://sass-lang.com/dart-sass/",
    tags: ["active"],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/dart-sass.svg",
      color: "#c6538c",
      background: "#313131",
    },
  },

  scss: {
    name: "SCSS",
    description: {
      en: "SCSS is a modern and CSS-compatible syntax for Sass, offering features like variables, nesting, and mixins to streamline and enhance stylesheet creation.",
      fr: "Le SCSS est une syntaxe moderne et compatible avec Sass, offrant des fonctionnalités telles que les variables, l'imbrication et les mixins pour simplifier et enrichir la création de feuilles de style.",
    },
    reason: {
      en: "A flexible and CSS-compatible syntax for advanced styling",
      fr: "Une syntaxe flexible et compatible avec le CSS pour un style avancé",
    },
    category: "language",
    homepage: "https://sass-lang.com/",
    tags: ["active", "important"],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/dart-sass.svg",
      color: "#c6538c",
      background: "#313131",
    },
  },

  typesafeI18n: {
    name: "Typesafe-i18n",
    description: {
      en: "Typesafe-i18n is a lightweight library for internationalization in TypeScript and JavaScript projects, ensuring full type safety to reduce errors and improve consistency in translations.",
      fr: "Typesafe-i18n est une bibliothèque légère pour l'internationalisation des projets TypeScript et JavaScript, garantissant une sécurité de typage complète pour réduire les erreurs et améliorer la cohérence des traductions.",
    },
    reason: {
      en: "A simple, efficient, and type-safe i18n library",
      fr: "Une bibliothèque i18n simple, efficace et type-safe",
    },
    homepage: "https://github.com/ivanhofer/typesafe-i18n",
    category: "frontend",
    tags: ["active"],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/typesafe-i18n.svg",
      color: "#000",
      background: "#fff",
    },
  },

  fastify: {
    name: "Fastify",
    description: {
      en: "Fastify is a high-performance web framework for Node.js, designed to deliver fast development and low overhead, suitable for building scalable and efficient server-side applications.",
      fr: "Fastify est un framework web performant pour Node.js, conçu pour offrir un développement rapide avec une faible surcharge, adapté à la création d'applications côté serveur évolutives et efficaces.",
    },
    reason: {
      en: "A modern, fast, and low-overhead web framework",
      fr: "Un framework web moderne, rapide et peu gourmand",
    },
    category: "framework",
    homepage: "https://fastify.dev/",
    replacement: {
      name: "nextJs",
      reason: { en: "Integrated backend and ecosystem", fr: "Backend intégré et écosystème" },
    },
    tags: ["important"],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/fastify.svg",
      iconLight:
        "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/fastify-light.svg",
      color: "#000",
      background: "#fff",
      invert: "white",
    },
  },

  authJs: {
    name: "Auth.js",
    description: {
      en: "Auth.js is a flexible authentication library designed for web applications, providing tools to implement secure user authentication across various platforms and frameworks.",
      fr: "Auth.js est une bibliothèque d'authentification flexible pour les applications web, offrant des outils pour implémenter une authentification sécurisée des utilisateurs sur diverses plateformes et frameworks.",
    },
    reason: {
      en: "A simple, efficient, and modern authentication library",
      fr: "Une bibliothèque d'authentification simple, efficace et moderne",
    },
    replacement: {
      name: "betterAuth",
      reason: {
        en: "More features and better documentation",
        fr: "Plus de fonctionnalités et meilleure documentation",
      },
    },
    category: "backend",
    homepage: "https://authjs.dev/",
    tags: ["learning"],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/authjs.png",
      color: "#000",
      background: "#fff",
    },
  },

  bcrypt: {
    name: "bcrypt",
    description: {
      en: "bcrypt is a Node.js library used to hash passwords securely, helping developers implement robust user authentication mechanisms. It is widely adopted and available via npm for integration in projects.",
      fr: "bcrypt est une bibliothèque Node.js utilisée pour hasher les mots de passe de manière sécurisée, aidant les développeurs à mettre en place des mécanismes d'authentification robustes. Elle est largement utilisée et disponible via npm.",
    },
    reason: {
      en: "A simple, efficient, and secure password hashing library",
      fr: "Une bibliothèque de hachage de mot de passe simple, efficace et sécurisée",
    },
    category: "backend",
    homepage: "https://www.bcrypt.io/",
    tags: [],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/bcrypt.svg",
      color: "#000",
      background: "#fff",
    },
  },

  notion: {
    name: "Notion",
    description: {
      en: "Notion is a productivity application that integrates tools for note-taking, task management, and collaboration, offering an all-in-one workspace for individuals and teams to organize their work efficiently.",
      fr: "Notion est une application de productivité intégrant des outils de prise de notes, gestion de tâches et collaboration, offrant un espace de travail tout-en-un pour organiser efficacement le travail des individus et des équipes.",
    },
    reason: {
      en: "A modern, clean, and powerful all-in-one workspace",
      fr: "Un espace de travail moderne, épuré et puissant",
    },
    category: "tools",
    homepage: "https://www.notion.com/",
    tags: [],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/notion.svg",
      color: "#000",
      background: "#fff",
    },
  },

  vercel: {
    name: "Vercel",
    description: {
      en: "Vercel is a platform providing developers with tools, frameworks, and hosting infrastructure to create fast, scalable, and personalized web applications with ease.",
      fr: "Vercel est une plateforme offrant aux développeurs des outils, frameworks et une infrastructure d'hébergement pour créer des applications web rapides, évolutives et personnalisées en toute simplicité.",
    },
    reason: {
      en: "A modern platform with a vast ecosystem for deployment",
      fr: "Une plateforme moderne avec un vaste écosystème pour le déploiement",
    },
    category: "deployment",
    homepage: "https://vercel.com/",
    tags: ["active", "love"],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/vercel.png",
      color: "#000",
      background: "#fff",
    },
  },

  vscodium: {
    name: "VSCodium",
    description: {
      en: "VSCodium is an open-source version of Visual Studio Code, providing binaries built without Microsoft's proprietary components while retaining the core features of the original editor.",
      fr: "VSCodium est une version open source de Visual Studio Code, offrant des binaires sans les composants propriétaires de Microsoft tout en conservant les fonctionnalités principales de l'éditeur original.",
    },
    reason: {
      en: "A debloated, open-source version of Visual Studio Code",
      fr: "Une version épurée et open source de Visual Studio Code",
    },
    category: "tools",
    homepage: "https://vscodium.com/",
    tags: ["love"],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/vscodium.svg",
      color: "#000",
      background: "#fff",
    },
  },

  vscode: {
    name: "VSCode",
    description: {
      en: "Visual Studio Code is a lightweight, versatile code editor designed for modern web and cloud development, offering robust tools for coding, debugging, and extensions to enhance productivity.",
      fr: "Visual Studio Code est un éditeur de code léger et polyvalent conçu pour le développement moderne web et cloud, avec des outils puissants pour coder, déboguer et des extensions pour améliorer la productivité.",
    },
    reason: {
      en: "A powerful code editor with a large community",
      fr: "Un éditeur de code puissant avec une grande communauté",
    },
    category: "tools",
    homepage: "https://code.visualstudio.com/",
    replacement: {
      name: "vscodium",
      reason: {
        en: "Open-source and debloated",
        fr: "Open source et épuré",
      },
    },
    tags: [],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/vscode.svg",
      color: "#007acc",
      background: "#1e1e1e",
    },
  },

  git: {
    name: "Git",
    description: {
      en: "Git is a free, open-source distributed version control system that efficiently tracks and manages changes in projects of all sizes, facilitating collaboration and version history.",
      fr: "Git est un système de contrôle de version distribué, gratuit et open source, permettant de gérer efficacement les modifications dans des projets de toute taille et de faciliter la collaboration.",
    },
    reason: {
      en: "The essential, open-source version control system",
      fr: "Le système de gestion de version open source incontournable",
    },
    category: "tools",
    homepage: "https://git-scm.com/",
    tags: ["active"],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/git.svg",
      color: "#f34f29",
      background: "#313131",
    },
  },

  github: {
    name: "GitHub",
    description: {
      en: "GitHub is a cloud-based platform for hosting and collaborating on code, providing tools for version control, issue tracking, and project management for millions of developers worldwide.",
      fr: "GitHub est une plateforme cloud pour héberger et collaborer sur du code, offrant des outils de contrôle de version, suivi des problèmes et gestion de projet pour des millions de développeurs dans le monde.",
    },
    reason: {
      en: "The most popular platform for hosting code",
      fr: "La plateforme la plus populaire pour l'hébergement de code",
    },
    category: "deployment",
    homepage: "https://github.com/",
    tags: ["active"],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/github.svg",
      invert: "black",
      color: "#000",
      background: "#fff",
    },
  },

  hoppscotch: {
    name: "Hoppscotch",
    description: {
      en: "Hoppscotch is a web-based tool for testing APIs, enabling developers to create and execute requests quickly, streamlining the debugging and development process.",
      fr: "Hoppscotch est un outil en ligne pour tester des APIs, permettant aux développeurs de créer et exécuter des requêtes rapidement, simplifiant ainsi le débogage et le développement.",
    },
    reason: {
      en: "A modern, open-source, and efficient API development tool",
      fr: "Un outil de développement d'API moderne, open-source et efficace",
    },
    category: "tools",
    homepage: "https://hoppscotch.io/",
    tags: [],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/hoppscotch.svg",
      color: "#000",
      background: "#fff",
      invert: "white",
    },
  },

  postman: {
    name: "Postman",
    description: {
      en: "Postman is a comprehensive platform for API development, offering tools to design, test, and manage APIs while enhancing team collaboration and speeding up the development process.",
      fr: "Postman est une plateforme complète pour le développement d'APIs, proposant des outils pour concevoir, tester et gérer des APIs tout en facilitant la collaboration en équipe et accélérant le processus de développement.",
    },
    reason: {
      en: "The most popular API development tool",
      fr: "L'outil de développement d'API le plus populaire",
    },
    category: "tools",
    homepage: "https://www.postman.com/",
    replacement: {
      name: "hoppscotch",
      reason: {
        en: "Fully open-source alternative",
        fr: "Alternative entièrement open-source",
      },
    },
    tags: [],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/postman.svg",
      color: "#ff6c37",
      background: "#fff",
    },
  },

  mongodb: {
    name: "MongoDB",
    description: {
      en: "MongoDB is a modern, document-based database platform designed to simplify data management, offering developers the flexibility and scalability needed to build and deploy applications quickly.",
      fr: "MongoDB est une plateforme de base de données moderne basée sur des documents, conçue pour simplifier la gestion des données et offrir flexibilité et évolutivité pour développer et déployer des applications rapidement.",
    },
    reason: {
      en: "A models based NoSQL database and a cloud platform",
      fr: "Une base de données NoSQL basée sur des modèles et une plateforme cloud",
    },
    category: "database",
    homepage: "https://www.mongodb.com/",
    replacement: {
      name: "prisma",
      reason: { en: "Improved developer experience", fr: "Meilleure expérience développeur" },
    },
    tags: ["important"],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/mongodb.png",
      color: "#4db33d",
      background: "#fff",
    },
  },

  postgresql: {
    name: "PostgreSQL",
    description: {
      en: "PostgreSQL is a robust, open-source relational database system known for its advanced features, reliability, and support for complex queries and scalability in data management.",
      fr: "PostgreSQL est un système de base de données relationnelle open source, reconnu pour ses fonctionnalités avancées, sa fiabilité et son support des requêtes complexes et de l'évolutivité dans la gestion des données.",
    },
    reason: {
      en: "A powerful, open-source, and efficient relational database",
      fr: "Une base de données relationnelle puissante, open-source et efficace",
    },
    category: "database",
    homepage: "https://www.postgresql.org/",
    tags: ["important"],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/postgresql.png",
      color: "#336791",
      background: "#fff",
    },
  },

  storybook: {
    name: "Storybook",
    description: {
      en: "Storybook is an open-source tool for developing, testing, and documenting UI components and pages in isolation, helping teams streamline frontend workflows and improve design consistency.",
      fr: "Storybook est un outil open source pour développer, tester et documenter des composants et pages UI de manière isolée, aidant les équipes à optimiser les workflows frontend et à améliorer la cohérence du design.",
    },
    reason: {
      en: "A modern, complete, simple, and efficient UI documentation tool",
      fr: "Un outil de documentation UI moderne, complet, simple et efficace",
    },
    category: "tools",
    homepage: "https://storybook.js.org/",
    tags: ["active", "important"],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/storybook.svg",
      color: "#ff4785",
      background: "#fff",
    },
  },

  motion: {
    name: "Motion",
    description: {
      en: "Motion is an animation library based on native browser APIs, offering a small file size and efficient performance with hardware acceleration for smooth and optimized animations. Previously known as Framer Motion.",
      fr: "Motion est une bibliothèque d'animations basée sur les API natives des navigateurs, proposant une taille réduite et des performances optimisées grâce à l'accélération matérielle pour des animations fluides. Anciennement Framer Motion.",
    },
    reason: {
      en: "A modern, simple, and powerful animation library for React",
      fr: "Une bibliothèque d'animations moderne, simple et puissante pour React",
    },
    category: "frontend",
    homepage: "https://motion.dev/",
    tags: ["active", "love", "learning", "important"],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/motion.png",
      color: "#000",
      background: "#fff",
    },
  },

  chatgpt: {
    name: "ChatGPT",
    description: {
      en: "ChatGPT is an AI-powered language model designed to assist with writing, learning, and brainstorming, providing answers, ideas, and productivity support across various tasks. It's free and simple to use.",
      fr: "ChatGPT est un modèle de langage alimenté par l'IA, conçu pour aider à l'écriture, l'apprentissage et le brainstorming, offrant des réponses, des idées et un soutien pour diverses tâches. Gratuit et facile à utiliser.",
    },
    reason: {
      en: "The most advanced and affordable AI assistant available",
      fr: "L'IA la plus avancée et la moins chère disponible",
    },
    category: "tools",
    homepage: "https://chat.openai.com/",
    tags: ["love"],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/chatgpt.svg",
      color: "#000",
      background: "#fff",
      invert: "black",
    },
  },

  overlayscrollbars: {
    name: "OverlayScrollbars",
    description: {
      en: "OverlayScrollbars is a JavaScript plugin that replaces native scrollbars with customizable overlay scrollbars while maintaining the original scrolling functionality and user experience.",
      fr: "OverlayScrollbars est un plugin JavaScript qui remplace les barres de défilement natives par des barres superposées personnalisables tout en conservant la fonctionnalité et l'expérience utilisateur d'origine.",
    },
    reason: {
      en: "A simple, modern, and customizable scrollbar library",
      fr: "Une bibliothèque de scrollbars simple, moderne et personnalisable",
    },
    category: "frontend",
    homepage: "https://kingsora.github.io/OverlayScrollbars/",
    tags: ["love"],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/overlayscrollbars.svg",
      color: "#000",
      background: "#fff",
    },
  },

  reactRedux: {
    name: "React Redux",
    description: {
      en: "React Redux is a JavaScript library for managing global application state in a predictable and consistent way, designed to work seamlessly with React for scalable state management.",
      fr: "React Redux est une bibliothèque JavaScript pour gérer l'état global d'une application de manière prévisible et cohérente, conçue pour s'intégrer facilement avec React pour une gestion d'état évolutive.",
    },
    reason: {
      en: "A modern, complete, and efficient state management library",
      fr: "Une bibliothèque de gestion d'état moderne, complète et efficace",
    },
    category: "frontend",
    homepage: "https://react-redux.js.org/",
    tags: ["important"],
    replacement: {
      name: "zustand",
      reason: {
        en: "Simpler state management",
        fr: "Gestion d'état simplifiée",
      },
    },

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/react-redux.svg",
      iconLight:
        "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/react-redux-light.svg",
      invert: "white",
      color: "#764abc",
      background: "#fff",
    },
  },

  electron: {
    name: "Electron",
    description: {
      en: "Electron is a framework for building cross-platform desktop applications using web technologies like JavaScript, HTML, and CSS, enabling developers to create native-like apps for multiple operating systems.",
      fr: "Electron est un framework permettant de créer des applications de bureau multiplateformes en utilisant des technologies web comme JavaScript, HTML et CSS, offrant des applications proches du natif sur plusieurs systèmes d'exploitation.",
    },
    reason: {
      en: "The most popular framework for building desktop web apps",
      fr: "Le framework le plus populaire pour créer des apps desktop",
    },
    category: "framework",
    homepage: "https://www.electronjs.org/",
    tags: [],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/electron.svg",
      color: "#47848f",
      background: "#fff",
    },
  },

  localForage: {
    name: "localForage",
    description: {
      en: "localForage is a JavaScript library providing an asynchronous data storage solution with a localStorage-like API, designed to enhance the offline capabilities of web applications.",
      fr: "localForage est une bibliothèque JavaScript offrant une solution de stockage de données asynchrone avec une API similaire à localStorage, conçue pour améliorer les fonctionnalités hors ligne des applications web.",
    },
    reason: {
      en: "A library for storing data locally using IndexedDB effectively",
      fr: "Une bibliothèque pour stocker des données localement avec IndexedDB",
    },
    category: "frontend",
    homepage: "https://localforage.github.io/localForage/",
    tags: ["learning", "active"],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/localforage.svg",
      color: "#000",
      background: "#fff",
    },
  },

  recharts: {
    name: "Recharts",
    description: {
      en: "Recharts is a charting library built with React and D3, designed for creating customizable and responsive data visualizations in web applications.",
      fr: "Recharts est une bibliothèque de graphiques basée sur React et D3, conçue pour créer des visualisations de données personnalisables et adaptatives dans les applications web.",
    },
    reason: {
      en: "A modern, complete, and efficient charting library",
      fr: "Une bibliothèque de graphiques moderne, complète et efficace",
    },
    category: "frontend",
    homepage: "https://recharts.org/",
    tags: ["love"],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/recharts.svg",
      color: "#000",
      background: "#fff",
    },
  },

  ai: {
    name: "AI SDK",
    description: {
      en: "AI SDK is a TypeScript toolkit enabling developers to create AI-powered applications, compatible with frameworks like React, Next.js, Vue, Svelte, and Node.js.",
      fr: "AI SDK est un outil TypeScript permettant aux développeurs de créer des applications alimentées par l'IA, compatible avec des frameworks tels que React, Next.js, Vue, Svelte et Node.js.",
    },
    reason: {
      en: "An SDK to easily integrate AI into your projects",
      fr: "Un SDK pour intégrer l'IA facilement dans vos projets",
    },
    category: "backend",
    homepage: "https://sdk.vercel.ai/",
    tags: ["active", "love", "learning", "important"],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/ai-sdk.svg",
      color: "#000",
      background: "#fff",
    },
  },

  illustrator: {
    name: "Illustrator",
    description: {
      en: "Illustrator is a vector graphics editor used for creating logos, icons, typography, and complex illustrations with precision and flexibility.",
      fr: "Illustrator est un éditeur de graphiques vectoriels utilisé pour créer des logos, des icônes, de la typographie et des illustrations complexes avec précision et flexibilité.",
    },
    reason: {
      en: "The most popular vector graphics editor",
      fr: "L'éditeur de graphiques vectoriels le plus populaire",
    },
    category: "tools",
    homepage: "https://www.adobe.com/products/illustrator.html",
    tags: ["important"],
    replacement: {
      name: "affinityDesigner",
      reason: {
        fr: "Meilleure alternative aussi puissante et moins chère",
        en: "Better alternative as powerful and cheaper",
      },
    },

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/illustrator.svg",
      color: "#ff9a00",
      background: "#1f1f1f",
    },
  },

  photoshop: {
    name: "Photoshop",
    description: {
      en: "Photoshop is a powerful image editing software offering advanced features for photo manipulation, graphic design, and digital art creation.",
      fr: "Photoshop est un logiciel de retouche d'image puissant offrant des fonctionnalités avancées pour la manipulation de photos, la conception graphique et la création d'art numérique.",
    },
    reason: {
      en: "The most popular and powerful image editing software",
      fr: "Le logiciel de retouche d'image le plus populaire et le plus puissant",
    },
    category: "tools",
    homepage: "https://www.adobe.com/products/photoshop.html",
    tags: ["important"],
    replacement: {
      name: "affinityPhoto",
      reason: {
        en: "Better alternative as powerful and cheaper",
        fr: "Meilleure alternative aussi puissante et moins chère",
      },
    },

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/photoshop.svg",
      color: "#31a8ff",
      background: "#001d26",
    },
  },

  affinityDesigner: {
    name: "Affinity Designer",
    description: {
      en: "Affinity Designer is a vector graphic design software offering precise tools for creating illustrations, branding, and UI/UX designs with speed and flexibility.",
      fr: "Affinity Designer est un logiciel de conception graphique vectorielle offrant des outils précis pour créer des illustrations, du branding et des designs UI/UX avec rapidité et flexibilité.",
    },
    reason: {
      en: "A modern, complete, and efficient vector graphic design tool",
      fr: "Un outil de conception graphique vectorielle moderne, complet et efficace",
    },
    category: "tools",
    homepage: "https://affinity.serif.com/en-us/designer/",
    tags: [],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/affinity-designer.svg",
      color: "#1b72be",
      background: "#1f1f1f",
    },
  },

  affinityPhoto: {
    name: "Affinity Photo",
    description: {
      en: "Affinity Photo is a professional photo editing software offering advanced tools for retouching, editing, and enhancing images with precision and speed.",
      fr: "Affinity Photo est un logiciel de retouche photo professionnel offrant des outils avancés pour retoucher, éditer et améliorer des images avec précision et rapidité.",
    },
    reason: {
      en: "A modern, complete, and efficient photo editing tool",
      fr: "Un outil de retouche photo moderne, complet et efficace",
    },
    category: "tools",
    homepage: "https://affinity.serif.com/en-us/photo/",
    tags: [],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/affinity-photo.svg",
      color: "#7e3bb1",
      background: "#1f1f1f",
    },
  },

  betterAuth: {
    name: "better-auth",
    description: {
      en: "better-auth is a TypeScript library for implementing authentication in web applications, providing a simple and efficient way to manage user sessions and permissions.",
      fr: "better-auth est une bibliothèque TypeScript pour implémenter l'authentification dans les applications web, offrant un moyen simple et efficace de gérer les sessions et les autorisations des utilisateurs.",
    },
    reason: {
      en: "A simple, efficient, and modern authentication library",
      fr: "Une bibliothèque d'authentification simple, efficace et moderne",
    },
    category: "backend",
    homepage: "https://better-auth.vercel.app/",
    tags: ["love", "learning"],
    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/better-auth-light.svg",
      color: "#000",
      background: "#fff",
      invert: "black",
    },
  },

  jest: {
    name: "Jest",
    description: {
      en: "Jest is a JavaScript testing framework designed for simplicity and speed, providing a zero-config setup and powerful features for unit and integration testing.",
      fr: "Jest est un framework de test JavaScript conçu pour la simplicité et la rapidité, offrant une configuration zéro et des fonctionnalités puissantes pour les tests unitaires et d'intégration.",
    },
    reason: {
      en: "The most popular testing framework for JavaScript",
      fr: "Le framework de test le plus populaire pour JavaScript",
    },
    category: "tools",
    homepage: "https://jestjs.io/",
    tags: [],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/jest.svg",
      color: "#000",
      background: "#fff",
      invert: "black",
    },
  },
} as const satisfies Record<string, StackType>;

function getStackByCategory(group: string) {
  return (Object.keys(stackItem) as StackIdType[]).filter(
    (item) => stackItem[item].category === group
  );
}

export const stackGroup = {
  language: {
    name: "Language",
    stacks: getStackByCategory("language"),
    icon: IconBraces,
  },
  frontend: {
    name: "Frontend",
    stacks: getStackByCategory("frontend"),
    icon: IconBrush,
  },
  backend: {
    name: "Backend",
    stacks: getStackByCategory("backend"),
    icon: IconServer,
  },
  tools: {
    name: "Tools",
    stacks: getStackByCategory("tools"),
    icon: IconSettings,
  },
  frameworks: {
    name: "Framework",
    stacks: getStackByCategory("framework"),
    icon: IconBrush,
  },
  deployment: {
    name: "deployment",
    stacks: getStackByCategory("deployment"),
    icon: IconServer,
  },
  database: {
    name: "Database",
    stacks: getStackByCategory("database"),
    icon: IconServer,
  },
} as const satisfies Record<string, StackGroupType>;

export const stackList = (() => {
  const stacks = Object.values(stackGroup);

  const sortedStacks = stacks.sort((a, b) => b.stacks.length - a.stacks.length);

  const columns = Array.from({ length: 4 }, () => ({
    stacks: [] as StackGroupType[],
    total: 0,
  }));

  for (const stack of sortedStacks) {
    const smallestColumn = columns.reduce((min, col) => (col.total < min.total ? col : min));
    smallestColumn.stacks.push(stack);
    smallestColumn.total += stack.stacks.length;
  }

  const columnsCopy = [...columns];
  columnsCopy[0] = columns[1];
  columnsCopy[1] = columns[3];
  columnsCopy[2] = columns[2];
  columnsCopy[3] = columns[0];

  return columnsCopy.map((col) => col.stacks);
})();
