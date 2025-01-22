import { useSettingsStore } from "@/stores/settings.store";
import "./header-item.scss";
import { useI18nContext } from "@/i18n/i18n-react";
import type { LabelType } from "../type";

export default function HeaderItem({
  label,
  active,
}: {
  label: LabelType;
  active: boolean;
}) {
  const setActiveSection = useSettingsStore((state) => state.setActiveSection);
  const { LL } = useI18nContext();
  const children = LL.navigation[label]();

  function scrollToSection() {
    if (label === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const section = document.getElementById(`${label}-section`);

    if (section) {
      const yOffset = -192;
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }

  return (
    <li className={`header-item ${active ? "active" : ""}`}>
      <button type="button" onClick={scrollToSection}>
        {children}
      </button>
    </li>
  );
}
