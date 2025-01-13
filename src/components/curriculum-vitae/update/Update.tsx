import { useI18nContext } from "@/i18n/i18n-react";
import "./update.scss";

export default function Update() {
  const { LL } = useI18nContext();
  return (
    <div id="update-date">
      <span>
        {LL.cv.updated({
          date: new Date().toLocaleDateString(),
        })}
      </span>
    </div>
  );
}
