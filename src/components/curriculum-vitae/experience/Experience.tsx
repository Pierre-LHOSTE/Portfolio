import { useI18nContext } from "@/i18n/i18n-react";
import { IconGitBranch } from "@tabler/icons-react";
import Section from "../section/Section";
import { ExperienceList } from "./data";
import ExperienceElement from "./element/ExperienceElement";
import type { ExperienceIdType } from "./type";

export default function Experience() {
  const { LL } = useI18nContext();

  return (
    <Section title={LL.cv.experience()} id="experience" Icon={IconGitBranch}>
      {(Object.keys(ExperienceList) as ExperienceIdType[]).map((key) => {
        return <ExperienceElement key={key} experience={ExperienceList[key]} id={key} />;
      })}
    </Section>
  );
}
