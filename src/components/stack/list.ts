import { IconBraces, IconBrush, IconServer, IconSettings } from "@tabler/icons-react";
import type { StackGroupType, StackType } from "./stack.d";

export const stackItem = {
  figma: {
    name: "Figma",
    description:
      "Figma is the leading collaborative design tool for building meaningful products. Seamlessly design, prototype, develop, and collect feedback in a single platform.",
    reason: "Lorem ipsum dolor sit amet",
    category: "tools",
    homepage: "https://www.figma.com/",
    tags: ["active"],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/figma.svg",
      color: "#0acf83",
      background: "#24272f",
    },
  },

  nextJs: {
    name: "Next.js",
    description: "A full-stack React framework for the web.",
    reason: "Lorem ipsum dolor sit amet",
    category: "framework",
    homepage: "https://nextjs.org/",
    tags: ["active", "love"],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/nextjs.svg",
      color: "#000",
      background: "#fff",
      // invert: "black",
    },
  },

  antDesign: {
    name: "Ant Design",
    description:
      "An enterprise-class UI design language and React UI library with a set of high-quality React components, one of best React UI library for enterprises.",
    reason: "Lorem ipsum dolor sit amet",
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
    description:
      "A build tool that aims to provide a faster and leaner development experience for modern web projects.",
    reason: "Lorem ipsum dolor sit amet",
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
    description:
      "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript. React is designed to let you seamlessly combine components written by independent people, teams, and organizations.",
    reason: "Lorem ipsum dolor sit amet",
    category: "frontend",
    homepage: "https://react.dev/",
    tags: ["active", "love"],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/react.svg",
      color: "#61dbfb",
      background: "#18212b",
    },
  },

  prisma: {
    name: "Prisma",
    description:
      "Intuitive data model, type-safety, automated migrations, connection pooling, caching, and real-time database subscriptions.",
    reason: "Lorem ipsum dolor sit amet",
    category: "backend",
    homepage: "https://www.prisma.io/",
    tags: ["love"],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/prisma.svg",
      color: "#4c51bf",
      iconLight: "https://github.com/prisma/presskit/raw/main/Assets/Prisma-DarkSymbol.svg",
      background: "#2d3748",
      // invert: "white",
    },
  },

  zod: {
    name: "Zod",
    description: "TypeScript-first schema validation with static type inference",
    reason: "Lorem ipsum dolor sit amet",
    category: "backend",
    homepage: "https://zod.dev/",
    tags: ["love"],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/zod.svg",
      color: "#3068b7",
      background: "#22334f",
    },
  },

  zustand: {
    name: "Zustand",
    description:
      "A small, fast, and scalable bearbones state management solution. Zustand has a comfy API based on hooks. It isn't boilerplatey or opinionated, but has enough convention to be explicit and flux-like.",
    reason: "Lorem ipsum dolor sit amet",
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
    description:
      "A modern, lightweight, performant, accessible and extensible drag & drop toolkit for React.",
    reason: "Lorem ipsum dolor sit amet",
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
    description:
      "5790 free and open source SVG icons. Customizable size, color and stroke. Available for React, SolidJS, Vue, Figma and more for free!",
    reason: "Lorem ipsum dolor sit amet",
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
    description: "Format, lint, and more in a fraction of a second.",
    reason: "Lorem ipsum dolor sit amet",
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
    description: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.",
    reason: "Lorem ipsum dolor sit amet",
    category: "language",
    homepage: "https://www.typescriptlang.org/",
    tags: ["active", "love"],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/typescript.svg",
      color: "#3178c6",
      background: "#313131",
    },
  },

  javascript: {
    name: "JavaScript",
    description:
      "JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification.",
    reason: "Lorem ipsum dolor sit amet",
    category: "language",
    homepage: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    replacement: { name: "typescript", reason: "For better type safety" },
    tags: [],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/javascript.svg",
      color: "#f0dc4e",
      background: "#313131",
    },
  },

  css: {
    name: "CSS",
    description:
      "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.",
    reason: "Lorem ipsum dolor sit amet",
    category: "language",
    homepage: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    replacement: { name: "dartSass", reason: "For better maintainability" },
    tags: [],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/css.svg",
      color: "#214ce5",
      background: "#313131",
    },
  },

  html: {
    name: "HTML",
    description:
      "Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser.",
    reason: "Lorem ipsum dolor sit amet",
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
    description:
      "A Dart implementation of Sass, the most mature, stable, and powerful professional grade CSS extension language in the world.",
    reason: "Lorem ipsum dolor sit amet",
    category: "language",
    homepage: "https://sass-lang.com/dart-sass/",
    tags: ["active"],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/dart-sass.svg",
      color: "#c6538c",
      background: "#313131",
    },
  },

  typesafeI18n: {
    name: "Typesafe-i18n",
    description:
      "A fully type-safe and lightweight internationalization library for all your TypeScript and JavaScript projects.",
    reason: "Lorem ipsum dolor sit amet",
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
    description: "Fast and low overhead web framework, for Node.js",
    reason: "Lorem ipsum dolor sit amet",
    category: "framework",
    homepage: "https://fastify.dev/",
    replacement: { name: "nextJs", reason: "Integrated backend" },
    tags: [],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/fastify.svg",
      color: "#000",
      background: "#fff",
      invert: "white",
    },
  },

  authJs: {
    name: "Auth.js",
    description: "Authentication library for the Web.",
    reason: "Lorem ipsum dolor sit amet",
    category: "backend",
    homepage: "https://authjs.dev/",
    tags: [],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/authjs.png",
      color: "#000",
      background: "#fff",
    },
  },

  bcrypt: {
    name: "bcrypt",
    description:
      "A bcrypt library for NodeJS.. Latest version: 5.1.1, last published: a year ago. Start using bcrypt in your project by running `npm i bcrypt`. There are 7259 other projects in the npm registry using bcrypt.",
    reason: "Lorem ipsum dolor sit amet",
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
    description:
      "A new tool that blends your everyday work apps into one. It's the all-in-one workspace for you and your team.",
    reason: "Lorem ipsum dolor sit amet",
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
    description:
      "Vercel's Frontend Cloud gives developers the frameworks, workflows, and infrastructure to build a faster, more personalized web.",
    reason: "Lorem ipsum dolor sit amet",
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
    description: "Free/Libre Open Source Software Binaries of VSCode",
    reason: "Lorem ipsum dolor sit amet",
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
    description:
      "Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications.",
    reason: "Lorem ipsum dolor sit amet",
    category: "tools",
    homepage: "https://code.visualstudio.com/",
    replacement: { name: "vscodium", reason: "Open-source and debloated" },
    tags: [],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/vscode.svg",
      color: "#007acc",
      background: "#1e1e1e",
    },
  },

  git: {
    name: "Git",
    description:
      "Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.",
    reason: "Lorem ipsum dolor sit amet",
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
    description:
      "GitHub is where people build software. More than 100 million people use GitHub to discover, fork, and contribute to over 420 million projects.",
    reason: "Lorem ipsum dolor sit amet",
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
    description: "Helps you create requests faster, saving precious time on development.",
    reason: "Lorem ipsum dolor sit amet",
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
    description:
      "Accelerate API development with Postman's all-in-one platform. Streamline collaboration and simplify the API lifecycle for faster, better results. Learn more.",
    reason: "Lorem ipsum dolor sit amet",
    category: "tools",
    homepage: "https://www.postman.com/",
    replacement: { name: "hoppscotch", reason: "Open-source" },
    tags: [],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/postman.svg",
      color: "#ff6c37",
      background: "#fff",
    },
  },

  mongodb: {
    name: "MongoDB",
    description:
      "Get your ideas to market faster with a developer data platform built on the leading modern database. MongoDB makes working with data easy.",
    reason: "Lorem ipsum dolor sit amet",
    category: "database",
    homepage: "https://www.mongodb.com/",
    replacement: { name: "prisma", reason: "Feels better" },
    tags: [],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/mongodb.png",
      color: "#4db33d",
      background: "#fff",
    },
  },

  postgresql: {
    name: "PostgreSQL",
    description: "An advanced open source database",
    reason: "Lorem ipsum dolor sit amet",
    category: "database",
    homepage: "https://www.postgresql.org/",
    tags: [],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/postgresql.png",
      color: "#336791",
      background: "#fff",
    },
  },

  storybook: {
    name: "Storybook",
    description:
      "Storybook is a frontend workshop for building UI components and pages in isolation. Thousands of teams use it for UI development, testing, and documentation. It's open source and free.",
    reason: "Lorem ipsum dolor sit amet",
    category: "tools",
    homepage: "https://storybook.js.org/",
    tags: ["active"],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/storybook.svg",
      color: "#ff4785",
      background: "#fff",
    },
  },

  motion: {
    name: "Motion",
    description:
      "Motion is built on native browser APIs for a tiny filesize and superfast performance. It uses hardware acceleration for smooth and eco-friendly animations. Previously Framer Motion.",
    reason: "Lorem ipsum dolor sit amet",
    category: "frontend",
    homepage: "https://motion.dev/",
    tags: ["active", "love", "learning"],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/motion.png",
      color: "#000",
      background: "#fff",
    },
  },

  chatgpt: {
    name: "ChatGPT",
    description:
      "ChatGPT helps you get answers, find inspiration and be more productive. It is free to use and easy to try. Just ask and ChatGPT can help with writing, learning, brainstorming and more.",
    reason: "Lorem ipsum dolor sit amet",
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
    description:
      "A javascript scrollbar plugin that hides the native scrollbars, provides custom styleable overlay scrollbars, and preserves the native functionality and feel.",
    reason: "Lorem ipsum dolor sit amet",
    category: "frontend",
    homepage: "https://kingsora.github.io/OverlayScrollbars/",
    tags: ["love"],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/overlayscrollbars.svg",
      color: "#000",
      background: "#fff",
    },
  },

  localForage: {
    name: "localForage",
    description:
      "localForage is a JavaScript library that improves the offline experience of your web app by using an asynchronous data store with a simple, localStorage-like API.",
    reason: "Lorem ipsum dolor sit amet",
    category: "frontend",
    homepage: "https://localforage.github.io/localForage/",
    tags: ["learning"],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/localforage.svg",
      color: "#000",
      background: "#fff",
    },
  },

  recharts: {
    name: "Recharts",
    description: "Recharts - Re-designed charting library built with React and D3.",
    reason: "Lorem ipsum dolor sit amet",
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
    description:
      "The AI SDK is the TypeScript toolkit designed to help developers build AI-powered applications with React, Next.js, Vue, Svelte, Node.js, and more.",
    reason: "Lorem ipsum dolor sit amet",
    category: "backend",
    homepage: "https://sdk.vercel.ai/",
    tags: ["active", "love", "learning"],

    styles: {
      icon: "https://qg007gk6n2popinf.public.blob.vercel-storage.com/stack-icon/ai-sdk.svg",
      color: "#000",
      background: "#fff",
    },
  },
} as const satisfies Record<string, StackType>;

export const stackGroup = {
  language: {
    name: "Language",
    stack: Object.values(stackItem).filter((item) => item.category === "language"),
    icon: IconBraces,
  },
  frontend: {
    name: "Frontend",
    stack: Object.values(stackItem).filter((item) => item.category === "frontend"),
    icon: IconBrush,
  },
  backend: {
    name: "Backend",
    stack: Object.values(stackItem).filter((item) => item.category === "backend"),
    icon: IconServer,
  },
  tools: {
    name: "Tools",
    stack: Object.values(stackItem).filter((item) => item.category === "tools"),
    icon: IconSettings,
  },
  frameworks: {
    name: "Frameworks",
    stack: Object.values(stackItem).filter((item) => item.category === "framework"),
    icon: IconBrush,
  },
  deployment: {
    name: "Hosting & Deployment",
    stack: Object.values(stackItem).filter((item) => item.category === "deployment"),
    icon: IconServer,
  },
  database: {
    name: "Database",
    stack: Object.values(stackItem).filter((item) => item.category === "database"),
    icon: IconServer,
  },
} as const satisfies Record<string, StackGroupType>;

export const stackList = (() => {
  const stacks = Object.values(stackGroup);

  const sortedStacks = stacks.sort((a, b) => b.stack.length - a.stack.length);

  const columns = Array.from({ length: 4 }, () => ({
    stacks: [] as StackGroupType[],
    total: 0,
  }));

  for (const stack of sortedStacks) {
    const smallestColumn = columns.reduce((min, col) => (col.total < min.total ? col : min));
    smallestColumn.stacks.push(stack);
    smallestColumn.total += stack.stack.length;
  }

  // change the order of the columns to 2, 1, 3, 0,
  const columnsCopy = [...columns];
  columnsCopy[0] = columns[2];
  columnsCopy[1] = columns[1];
  columnsCopy[2] = columns[3];
  columnsCopy[3] = columns[0];

  return columnsCopy.map((col) => col.stacks);
})();
