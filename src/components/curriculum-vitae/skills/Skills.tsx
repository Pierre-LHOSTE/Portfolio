import { IconBrandCraft } from "@tabler/icons-react";
import Section from "../section/Section";
import "./skills.scss";
import { useI18nContext } from "@/i18n/i18n-react";

export default function Skills() {
  const { LL } = useI18nContext();

  console.log("skills", Object.values(LL.skills)[0]());

  return (
    <Section title={LL.cv.skills()} id="cv-skills" Icon={IconBrandCraft}>
      <div>
        <div>
          <ul>
            {Object.values(LL.skills).map((skill, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <li key={index} className="cv-skill">
                {skill()}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
