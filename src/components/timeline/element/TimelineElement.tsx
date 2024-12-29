import {
  IconBuildingCommunity,
  IconMapPin,
  IconProgress,
  IconRosetteDiscountCheckFilled,
} from "@tabler/icons-react";
import "./element.scss";
import { useI18nContext } from "@/i18n/i18n-react";
import { timelineList } from "../data";
import type { TimelineElementType, TimelineIdType } from "../types";

export default function TimelineElement({
  element,
  height,
  id,
}: {
  element: TimelineElementType;
  height: number;
  id: TimelineIdType;
}) {
  const { LL } = useI18nContext();
  const getStatus = (status: string) => {
    switch (status) {
      case "graduated":
        return (
          <>
            <IconRosetteDiscountCheckFilled />
            <span>{LL.section.timeline.graduated()}</span>
          </>
        );
      case "in-progress":
        return (
          <>
            <IconProgress />
            <span>{LL.section.timeline.inProgress()}</span>
          </>
        );
      case "failed":
        throw new Error("Failure is not an option here");
      default:
        return null;
    }
  };

  const isLast = element === timelineList[timelineList.length - 1];

  const status = getStatus(element.status);

  return (
    <div className={`timeline-element${isLast ? " last" : ""}`} style={{ height }}>
      <div className="content">
        <div>
          {LL.timelines[id].type().trim() ? <span>{LL.timelines[id].type()}</span> : null}
          <h3 className="mono">{LL.timelines[id].name()}</h3>
          <div className="details">
            <IconBuildingCommunity size={18} />
            {LL.timelines[id].school()}
          </div>
          <div className="details">
            <IconMapPin size={18} />
            {LL.timelines[id].location()}
          </div>
          <div className={`status ${element.status}`}>{status}</div>
        </div>
      </div>
      <div className="dates">
        <span>{element.startDate}</span>
        <span>{element.endDate ?? "Now"}</span>
      </div>
    </div>
  );
}
