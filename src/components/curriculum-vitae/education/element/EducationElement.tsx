import type { TimelineElementType, TimelineIdType } from "@/components/timeline/types";
import "./element.scss";
import { useI18nContext } from "@/i18n/i18n-react";
import {
  IconBuildingCommunity,
  IconCircleDashedCheck,
  IconMapPin,
  IconProgress,
  IconRosetteDiscountCheckFilled,
} from "@tabler/icons-react";

export default function EducationElement({
  education,
  id,
}: {
  education: TimelineElementType;
  id: TimelineIdType;
}) {
  const { LL } = useI18nContext();

  const getStatus = (status: string) => {
    switch (status) {
      case "graduated":
        return (
          <>
            <IconRosetteDiscountCheckFilled size={18} />
            <span>{LL.section.timeline.graduated()}</span>
          </>
        );
      case "in-progress":
        return (
          <>
            <IconProgress size={18} />
            <span>{LL.section.timeline.inProgress()}</span>
          </>
        );
      case "attended":
        return (
          <>
            <IconCircleDashedCheck />
            <span>{LL.section.timeline.attended()}</span>
          </>
        );
      case "failed":
        throw new Error("Failure is not an option here");
      default:
        return null;
    }
  };
  const status = getStatus(education.status);

  const L = LL.timelines[id];

  return (
    <div className="education-element">
      <div className="date">
        <span>{education.endDate}</span>
        {/* <span>{education.startDate}</span> */}
      </div>
      <div className="education">
        <div>
          {L.type().trim() ? <span className="type">{L.type()}</span> : null}
          <h3>{L.name()}</h3>
          <div className="details">
            <div>
              <IconBuildingCommunity size={16} />
              {L.school()}
            </div>
            <div>
              <IconMapPin size={16} />
              {L.location()}
            </div>
          </div>
          <div className={`status ${education.status}`}>{status}</div>
        </div>
      </div>
    </div>
  );
}
