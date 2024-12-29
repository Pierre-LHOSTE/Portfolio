import generateProjectTranslations from "../../utils/generateProjectTranslations";
import type { Translation } from "../i18n-types";

const en = {
  navigation: {
    home: "Home",
    chat: "Chat",
    stacks: "Stacks",
    timeline: "Timeline",
    projects: "Projects",
    contact: "Contact",
  },
  message: "Available for hire — ready to contribute!",
  hero: {
    subtitle: {
      passionate: "Passionate",
      responsible: "Responsible",
      french: "French",
      sentence: "A {passionate} and {responsible} {french}",
    },
    title: {
      developer: "Developer",
      designer: "Designer",
      sentence: "Web {developer} & {designer}",
    },
    details: {
      key: {
        p1: "Press",
        p2: "to instantly print or save the latest version of my CV as a PDF",
      },
      download: {
        p1: "Prefer a direct download? Feel free to",
        p2: "a pre-saved version",
        button: "Download",
      },
    },
  },
  scroll: "Scroll down to chat with AI-ME!",
  section: {
    stacks: {
      title: "My tech stack",
      description:
        "Here you can find the languages, frameworks, libraries, and tools that make up my daily technical stack. Some have been directly integrated into the creation of this portfolio, others have been replaced over time to adapt to my values and preferences, and others that I am currently experimenting with.",
    },
    timeline: {
      title: "My journey",
      description:
        "A chronological presentation of my career path, experience, skills and training, along with some bonus information. The duration of each stage is represented proportionally.",
    },
    projects: {
      title: "My projects",
      description:
        "Discover a non-exhaustive selection of open source projects I've worked on, chosen to represent my current skills. Each project is accompanied by its remote repo, as well as a list of the tools and technologies used.",
    },
    contact: {
      title: "Contact me",
      description:
        "To contact me, use the form below by clicking on ‘Send a message’, or contact me directly by email or via social networks. For your information, I prefer email for an initial contact.",
    },
  },
  projects: generateProjectTranslations("en"),
} satisfies Translation;

export default en;
