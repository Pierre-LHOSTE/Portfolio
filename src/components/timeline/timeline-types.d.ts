interface BaseTimelineElement {
  name: string;
  startDate: string;
  location: string;
  school: string;
  endDate?: string;
}

interface GraduatedTimelineElement extends BaseTimelineElement {
  status: "graduated";
  endDate: string;
}

interface InProgressTimelineElement extends BaseTimelineElement {
  status: "in-progress";
}

export type TimelineElementType =
  | GraduatedTimelineElement
  | InProgressTimelineElement;
