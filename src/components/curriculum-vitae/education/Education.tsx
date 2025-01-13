import { timelineElementList } from "@/components/timeline/data";
import type { TimelineIdType } from "@/components/timeline/types";
import { useI18nContext } from "@/i18n/i18n-react";
import { IconCertificate } from "@tabler/icons-react";
import Section from "../section/Section";
import EducationElement from "./element/EducationElement";

export default function Education() {
  const { LL } = useI18nContext();

  const data = (Object.keys(timelineElementList) as TimelineIdType[])
    .map((key) => {
      return {
        key,
        ...timelineElementList[key],
      };
    })
    .sort((a, b) => {
      return a.startDate < b.startDate ? 1 : -1;
    });

  return (
    <Section title={LL.cv.education()} id="education" Icon={IconCertificate}>
      {data.map((d) => {
        return <EducationElement key={d.key} education={d} id={d.key} />;
      })}
    </Section>
  );
}
