import "./element.scss";
import { useI18nContext } from "@/i18n/i18n-react";
import Image from "next/image";
import type { ExperienceIdType, ExperienceType } from "../type";

export default function ExperienceElement({
  experience,
  id,
}: {
  experience: ExperienceType;
  id: ExperienceIdType;
}) {
  const { locale, LL } = useI18nContext();
  const activeLocale = locale === "fr" ? "fr" : "en";

  return (
    <div className="experience-element">
      <div className="date">
        <span>{experience.endDate}</span>
        <span>{experience.startDate}</span>
      </div>
      <div className="experience">
        <div>
          <span className="type">
            <Image
              src={experience.logo}
              alt={experience.name[activeLocale]}
              width={16}
              height={16}
            />
            {LL.cv.experiences[id].company()}
          </span>
          <h3>{LL.cv.experiences[id].name()}</h3>
          <span className="type">
            {LL.cv.fromTo({
              from: experience.startDate,
              to: experience.endDate,
            })}{" "}
            — {LL.cv.experiences[id].location()}
          </span>
          <ul className="details">
            {Object.values(LL.cv.experiences[id].tasks).map((task, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <li key={index}>{task()}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
