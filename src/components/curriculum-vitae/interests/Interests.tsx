import { IconDeviceNintendo } from "@tabler/icons-react";
import Section from "../section/Section";
import "./interests.scss";
import { useI18nContext } from "@/i18n/i18n-react";

const ICON_SIZE = 24;

export default function Interests() {
  const { LL } = useI18nContext();

  return (
    <Section title={LL.cv.interests()} id="interests" Icon={IconDeviceNintendo}>
      <p>
        {LL.cv.interest.game()}, {LL.cv.interest.collection()}, {LL.cv.interest.technology()},{" "}
        {LL.cv.interest.art()}
      </p>
    </Section>
  );
}
