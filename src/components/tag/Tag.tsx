import type { ReactNode } from "react";
import "./tag.scss";
import { useSettingsStore } from "@/stores/settings.store";
import Image from "next/image";
import type { StackType } from "../stack/stack";

export default function Tag({
  children,
  icon,
  stack,
}: { children: ReactNode; icon?: string; stack?: StackType }) {
  const theme = useSettingsStore((state) => state.activeTheme);

  let iconUrl = icon;
  if (stack) {
    iconUrl = theme === "light" ? stack.styles.iconLight || stack.styles.icon : stack.styles.icon;
  }

  let filter = undefined;
  if (
    (stack && theme === "dark" && stack.styles.invert === "black") ||
    (stack && theme === "light" && stack.styles.invert === "white")
  ) {
    filter = "invert(1)";
  }

  return (
    <span className="tag">
      {iconUrl && (
        <Image src={iconUrl} alt={`${children} icon`} width={16} height={16} style={{ filter }} />
      )}
      {children}
    </span>
  );
}
