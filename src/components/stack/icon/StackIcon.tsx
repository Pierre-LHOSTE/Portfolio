import Image from "next/image";
import "./icon.scss";
import { useSettingsStore } from "@/stores/settings.store";
import type { StackType } from "../stack.d";

export default function StackIcon({
  stack,
  size = 48,
  forcedTheme,
}: {
  stack: StackType;
  size?: number;
  forcedTheme?: "light" | "dark";
}) {
  const {
    name,
    styles: { icon, iconLight, background, transform, iconHovered, invert },
  } = stack;
  const theme = useSettingsStore((state) => state.activeTheme);
  const themeResult = forcedTheme || theme;

  const baseIcon = themeResult === "light" ? iconLight || icon : icon;

  let filter = undefined;
  if (
    (themeResult === "dark" && invert === "black") ||
    (themeResult === "light" && invert === "white")
  ) {
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
