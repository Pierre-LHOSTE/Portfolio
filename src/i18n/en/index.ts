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
} satisfies Translation;

export default en;
