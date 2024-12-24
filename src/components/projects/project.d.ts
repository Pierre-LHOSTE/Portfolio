import type { StackIdType } from "../stack/stack";

export type ProjectType = {
  name: string;
  description: string;
  technologies: StackIdType[];
  endDate: string;
  images: string[];
  thumbnail: string;
  url: string;
  repo: string;
  tags: string[];
};
