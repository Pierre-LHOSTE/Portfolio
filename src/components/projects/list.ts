import { stackItem } from "../stack/list";
import type { StackType } from "../stack/stack";
import type { ProjectType } from "./project";

export const projectsList = {
  portfolio: {
    name: { en: "Actual Portfolio", fr: "Portfolio actuel" },
    technologies: Object.keys(stackItem).filter((stackName) => {
      const stack: StackType = stackItem[stackName as keyof typeof stackItem];
      return stack.tags.includes("active");
    }) as (keyof typeof stackItem)[],
    description: {
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      fr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    images: [
      "https://qg007gk6n2popinf.public.blob.vercel-storage.com/project-thumbnail/portfolio/main.png",
    ],
    thumbnail:
      "https://qg007gk6n2popinf.public.blob.vercel-storage.com/project-thumbnail/portfolio/main.png",
    url: "",
    repo: "",
    tags: ["portfolio", "fullstack"],
    endDate: "2025",
  },

  "212-colors": {
    name: { en: "212-Colors", fr: "212-Colors" },
    description: {
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      fr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    technologies: [
      "react",
      "dartSass",
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

  "first-portfolio": {
    name: { en: "Old Portfolio", fr: "Ancien Portfolio" },
    description: {
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      fr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    technologies: [
      "html",
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
