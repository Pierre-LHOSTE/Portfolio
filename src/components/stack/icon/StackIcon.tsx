import Image from "next/image";
import "./icon.scss";
import { useSettingsStore } from "@/stores/settings.store";
import type { StackType } from "../stack.d";

export default function StackIcon({
  stack,
}: {
  stack: StackType;
}) {
  const {
    name,
    styles: { icon, iconLight, background, transform, iconHovered, invert },
  } = stack;
  console.log("🚀 ~ invert:", invert);
  const theme = useSettingsStore((state) => state.activeTheme);
  console.log("🚀 ~ theme:", theme);
  const baseIcon = theme === "light" ? iconLight || icon : icon;

  let filter = undefined;
  if ((theme === "dark" && invert === "black") || (theme === "light" && invert === "white")) {
    filter = "invert(1)";
  }

  return (
    <div className="stack-icon">
      <Image src={baseIcon} alt={`${name} icon`} width={128} height={128} style={{ filter }} />
    </div>
  );
}
