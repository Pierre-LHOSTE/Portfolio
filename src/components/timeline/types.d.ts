import type { timelineElementList } from "./data";

export interface TimelineElementType {
  type: {
    en: string;
    fr: string;
  };
  name: {
    en: string;
    fr: string;
  };
  startDate: string;
  endDate: string;
  location: {
    en: string;
    fr: string;
  };
  school: {
    en: string;
    fr: string;
  };
  status: "graduated" | "in-progress" | "attended";
}

export type TimelineIdType = keyof typeof timelineElementList;
