import useSectionObserver from "@/hooks/useSectionObserver.hook";
import Article from "../article/Article";
import TimelineElement from "./element/TimelineElement";
import { timelineList } from "./timeline-data";
import "./timeline.scss";
import { useI18nContext } from "@/i18n/i18n-react";

export default function Timeline() {
  const ref = useSectionObserver("timeline");
  const { LL } = useI18nContext();

  const durations = timelineList.map((element) =>
    calculateDurationInMonths(element.startDate, element.endDate ?? new Date().toISOString())
  );

  const maxDuration = Math.max(...durations);

  return (
    <Article
      title={LL.section.timeline.title()}
      description={LL.section.timeline.description()}
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
