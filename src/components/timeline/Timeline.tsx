import useSectionObserver from "@/hooks/useSectionObserver.hook";
import Article from "../article/Article";
import TimelineElement from "./element/TimelineElement";
import { timelineList } from "./timeline-data";
import "./timeline.scss";

export default function Timeline() {
  const ref = useSectionObserver("timeline");

  const durations = timelineList.map((element) =>
    calculateDurationInMonths(element.startDate, element.endDate ?? new Date().toISOString())
  );

  const maxDuration = Math.max(...durations);

  return (
    <Article
      title="Mon parcours"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      id="timeline"
      ref={ref}
    >
      {timelineList.map((element, index) => (
        <TimelineElement
          key={element.name}
          element={element}
          height={(durations[index] / maxDuration) * 100 + 200}
        />
      ))}
    </Article>
  );
}

function calculateDurationInMonths(startDate: string, endDate: string): number {
  const start = new Date(startDate);
  const end = new Date(endDate);
  return (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
}
