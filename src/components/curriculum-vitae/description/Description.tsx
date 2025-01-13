import { useI18nContext } from "@/i18n/i18n-react";
import "./description.scss";

export default function Description() {
  const { LL } = useI18nContext();

  return <p id="description">{LL.cv.description()}</p>;
}
