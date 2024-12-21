import { IconProgress, IconRosetteDiscountCheckFilled } from "@tabler/icons-react";
import "./element.scss";
import { timelineList } from "../timeline-data";
import type { TimelineElementType } from "../timeline-types";

export default function TimelineElement({
  element,
  height,
}: {
  element: TimelineElementType;
  height: number;
}) {
  const getStatus = (status: string) => {
    switch (status) {
      case "graduated":
        return (
          <>
            <IconRosetteDiscountCheckFilled />
            <span>Graduated</span>
          </>
        );
      case "in-progress":
        return (
          <>
            <IconProgress />
            <span>In Progress</span>
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
          <h3>{element.name}</h3>
          <p className="status">{status}</p>
          <p>
            {element.school} • {element.location}
          </p>
        </div>
      </div>
      <div className="dates">
        <span>{element.startDate}</span>
        <span>{element.endDate ?? "Now"}</span>
      </div>
    </div>
  );
}
