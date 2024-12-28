import ListItem from "./item/HeaderItem";
import "./header.scss";
import { useSettingsStore } from "@/stores/settings.store";
import { useEffect } from "react";
import type { LabelType } from "./type";

const list: LabelType[] = ["home", "chat", "stacks", "timeline", "projects", "contact"];

export default function Header() {
  const activeSection = useSettingsStore((state) => state.activeSection);

  useEffect(() => {
    console.log("Active section is", activeSection);
  }, [activeSection]);

  return (
    <header id="header">
      <nav>
        <ul>
          {list.map((item) => {
            return <ListItem active={activeSection === item} key={item} label={item} />;
          })}
        </ul>
      </nav>
    </header>
  );
}
