import type { TimelineElementType } from "./timeline-types";

export const bac: TimelineElementType = {
  name: "Bac scientifique",
  status: "graduated",
  startDate: "2015",
  endDate: "2019",
  location: "Salon-de-Provence",
  school: "Lycée de l’Emperi",
};

export const dut: TimelineElementType = {
  name: "DUT Génie Électrique et Informatique Industrielle",
  status: "graduated",
  startDate: "2019",
  endDate: "2022",
  location: "Salon-de-Provence",
  school: "UIT Aix-Marseille",
};

export const fsd: TimelineElementType = {
  name: "Formation Développeur / Intégrateur Web",
  status: "graduated",
  startDate: "2022",
  endDate: "2024",
  location: "Remote",
  school: "3W Academy",
};

export const app: TimelineElementType = {
  name: "Apprentissage",
  status: "in-progress",
  startDate: "2024",
  endDate: "2025",
  location: "Remote",
  school: "3W Academy",
};

export const timelineList: TimelineElementType[] = [bac, dut, fsd, app];
