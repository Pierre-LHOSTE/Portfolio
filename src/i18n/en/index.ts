import {
  generateProjectTranslations,
  generateTimelineTranslations,
} from "../../utils/generateProjectTranslations";
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
      graduated: "Graduated",
      inProgress: "In progress",
    },
    projects: {
      title: "My projects",
      description:
        "Discover a non-exhaustive selection of open source projects I've worked on, chosen to represent my current skills. Each project is accompanied by its remote repo, as well as a list of the tools and technologies used.",
      visitButton: "Visit",
      repositoryButton: "Remote repository",
    },
    contact: {
      title: "Contact me",
      description:
        "To contact me, use the form below by clicking on ‘Send a message’, or contact me directly by email or via social networks. For your information, I prefer email for an initial contact.",
      pros: "Pros",
      cons: "Cons",
    },
  },
  projects: generateProjectTranslations("en"),
  timelines: generateTimelineTranslations("en"),
  contact: {
    form: {
      title: "Form",
      description: "The simplest way to reach me directly on this site",
      actionTitle: "Send a message",
      pros: ["Quick & simple"],
      cons: ["Less professional", "Limited flexibility", "Only for simple messages"],
    },
    mail: {
      title: "Email",
      description: "The best way to contact me for any request",
      actionTitle: "Send email",
      pros: [
        "Professional & credible",
        "Instant notifications",
        "Easy to use",
        "Easy follow-up & attachment support",
      ],
      cons: ["None"],
    },
    socialNetworks: {
      title: "LinkedIn",
      description: "Connect with me on LinkedIn or check out my profile",
      actionTitle: "Visit profile",
      pros: ["Personal & relational", "Fast and direct"],
      cons: ["May not be checked often"],
    },
  },
  footer: {
    actions: {
      title: "Actions",
      lang: "Language",
      theme: "Theme",
    },
    profile:
      "I'm a passionate and responsible french web developer and designer who loves to create beautiful and functional websites ♥︎",
    build: {
      title: "Designed and built",
      from: "From scratch",
      with: "With Next.js",
      and: "and many more",
      hosted: "Hosted on Vercel",
    },
    contact: {
      title: "Contact",
      social1: "LinkedIn profile",
      social2: "Bluesky profile",
    },
  },
  locale: {
    en: "English",
    fr: "Français",
    debug: "▩▩▩▩▩",
    auto: "Auto",
  },

  theme: {
    dark: "Dark",
    light: "Light",
    auto: "Auto",
  },
  chat: {
    title: "Chat with AI-ME!",
    search: "Search",
    today: "Today",
    yesterday: "yesterday",
    assistant: "Assistant",
    user: "Me",
    type: "Type your message...",
  },
  stack: {
    language: "Languages",
    framework: "Frameworks",
    libraries: "Libraries",
    tools: "Tools",
    database: "Databases",
    backend: "Backend",
    frontend: "Frontend",
    deployment: "Hosting & Deployment",
  },
} satisfies Translation;

export default en;
