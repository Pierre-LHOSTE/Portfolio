import useSectionObserver from "@/hooks/useSectionObserver.hook";
import Article from "../article/Article";
import { timelineElementList, timelineList } from "./data";
import TimelineElement from "./element/TimelineElement";
import "./timeline.scss";
import { useI18nContext } from "@/i18n/i18n-react";
import type { TimelineIdType } from "./types";

export default function Timeline({ id }: { id: string }) {
  const ref = useSectionObserver(id);
  const { LL } = useI18nContext();

  const durations = timelineList.map((element) => {
    const endDate = element.endDate?.trim() || new Date().toISOString();
    return calculateDurationInMonths(element.startDate, endDate);
  });

  const maxDuration = Math.max(...durations);

  return (
    <Article
      title={LL.section.timeline.title()}
      description={LL.section.timeline.description()}
      id={id}
      ref={ref}
    >
      {(Object.keys(timelineElementList) as TimelineIdType[]).map((timelineId, index) => (
        <TimelineElement
          key={timelineElementList[timelineId].name.en}
          element={timelineElementList[timelineId]}
          height={(durations[index] / maxDuration) * 100 + 200}
          id={timelineId}
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
