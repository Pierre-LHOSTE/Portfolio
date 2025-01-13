import type { ExperienceList } from "./data";

export interface ExperienceType {
  name: {
    en: string;
    fr: string;
  };
  logo: string;
  company: {
    en: string;
    fr: string;
  };
  startDate: string;
  endDate: string;
  location: {
    en: string;
    fr: string;
  };
  tasks: {
    en: string;
    fr: string;
  }[];
}

export type ExperienceIdType = keyof typeof ExperienceList;
