import type { StackIdType } from "../stack/stack";
import type { projectsList } from "./list";

export type ProjectIdType = keyof typeof projectsList;

export type ProjectType = {
  name: {
    en: string;
    fr: string;
  };
  description: {
    en: string;
    fr: string;
  };
  technologies: StackIdType[];
  endDate: string;
  images: string[];
  thumbnail: string;
  url: string;
  repo: string;
  tags: string[];
};
