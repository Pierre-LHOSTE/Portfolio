import {
  IconBrandMinecraft,
  IconBrandTypescript,
  IconCards,
  IconDeviceNintendo,
  IconPalette,
} from "@tabler/icons-react";
import Section from "../section/Section";
import "./interests.scss";
import { useI18nContext } from "@/i18n/i18n-react";

const ICON_SIZE = 24;

export default function Interests() {
  const { LL } = useI18nContext();

  return (
    <Section title={LL.cv.interests()} id="interests" Icon={IconDeviceNintendo}>
      <ul>
        <li>
          <IconBrandMinecraft size={ICON_SIZE} /> {LL.cv.interest.game()}
        </li>
        <li>
          <IconCards size={ICON_SIZE} /> {LL.cv.interest.collection()}
        </li>
        <li>
          <IconBrandTypescript size={ICON_SIZE} /> {LL.cv.interest.technology()}
        </li>
        <li>
          <IconPalette size={ICON_SIZE} /> {LL.cv.interest.art()}
        </li>
      </ul>
    </Section>
  );
}
