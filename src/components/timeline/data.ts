import type { TimelineElementType } from "./types";

export const timelineElementList = {
  bac: {
    type: {
      fr: "",
      en: "",
    },
    name: {
      fr: "Bac scientifique",
      en: "Scientific Baccalaureate",
    },
    status: "graduated",
    startDate: "2015",
    endDate: "2019",
    location: {
      fr: "Salon-de-Provence",
      en: "Salon-de-Provence (France)",
    },
    school: {
      fr: "Lycée de l’Emperi",
      en: "Lycée de l’Emperi (High School)",
    },
  },
  dut: {
    type: {
      fr: "Diplôme Universitaire de Technologie (DUT)",
      en: "BTEC Higher National Diploma French equivalent",
    },
    name: {
      fr: "Génie Électrique et Informatique Industrielle",
      en: "Electrical Engineering and Industrial Computing",
    },
    status: "graduated",
    startDate: "2019",
    endDate: "2022",
    location: {
      fr: "Salon-de-Provence",
      en: "Salon-de-Provence (France)",
    },
    school: {
      fr: "UIT Aix-Marseille",
      en: "UIT Aix-Marseille (University)",
    },
  },
  fsd: {
    type: {
      fr: "RNCP 37273 — Alternance",
      en: "RNCP 37273 — Work-study",
    },
    name: {
      fr: "Développeur Web Full Stack",
      en: "Full Stack Web Developer",
    },
    status: "graduated",
    startDate: "2022",
    endDate: "2024",
    location: {
      fr: "Distanciel",
      en: "Remote",
    },
    school: {
      fr: "3W Academy",
      en: "3W Academy",
    },
  },
  app: {
    type: {
      fr: "RNCP 36490 — Alternance",
      en: "RNCP 36490 — Work-study",
    },
    name: {
      fr: "Concepteur développeur d'applications",
      en: "Application designer and developer",
    },
    status: "in-progress",
    startDate: "2024",
    endDate: "",
    location: {
      fr: "Distanciel",
      en: "Remote",
    },
    school: {
      fr: "3W Academy",
      en: "3W Academy",
    },
  },
} as const satisfies Record<string, TimelineElementType>;

export const timelineList = Object.values(timelineElementList);
