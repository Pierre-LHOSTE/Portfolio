import { useSettingsStore } from "@/stores/settings.store";
import "./header-item.scss";

export default function HeaderItem({
  label,
  active,
}: {
  label: string;
  active: boolean;
}) {
  const setActiveSection = useSettingsStore((state) => state.setActiveSection);
  const children = label.charAt(0).toUpperCase() + label.slice(1);

  function scrollToSection() {
    if (label === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection(label);
      return;
    }

    const section = document.getElementById(`${label}-section`);

    if (section) {
      setActiveSection(label);
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
