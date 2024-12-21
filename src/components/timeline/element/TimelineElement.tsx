import { IconProgress, IconRosetteDiscountCheckFilled } from "@tabler/icons-react";
import "./element.scss";
import type { TimelineElementType } from "../timeline-types";

export default function TimelineElement({
  element,
}: {
  element: TimelineElementType;
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

  const status = getStatus(element.status);

  return (
    <div className="timeline-element">
      <div>
        <div>
          <h3>{element.name}</h3>
          <p className="status">{status}</p>
          <p>
            {element.school} • {element.location}
          </p>
        </div>
      </div>
    </div>
  );
}
