import Image from "next/image";
import "./icon.scss";
import { useSettingsStore } from "@/stores/settings.store";
import type { StackType } from "../stack.d";

export default function StackIcon({
  stack,
  size = 48,
}: {
  stack: StackType;
  size?: number;
}) {
  const {
    name,
    styles: { icon, iconLight, background, transform, iconHovered, invert },
  } = stack;
  const theme = useSettingsStore((state) => state.activeTheme);
  const baseIcon = theme === "light" ? iconLight || icon : icon;

  let filter = undefined;
  if ((theme === "dark" && invert === "black") || (theme === "light" && invert === "white")) {
    filter = "invert(1)";
  }

  return (
    <div className="stack-icon">
      <Image
        src={baseIcon}
        alt={`${name} icon`}
        width={size}
        height={size}
        style={{ filter, height: size, width: size }}
      />
    </div>
  );
}
