export interface TimelineElementType {
  name: string;
  status: "graduated" | "in-progress";
  startDate: string;
  endDate: string;
  location: string;
  school: string;
}
