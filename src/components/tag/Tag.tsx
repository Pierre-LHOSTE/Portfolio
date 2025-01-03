import type { ReactNode } from "react";
import "./tag.scss";
import { useSettingsStore } from "@/stores/settings.store";
import Image from "next/image";

export default function Tag({
  children,
  icon,
  iconLight,
  invert,
}: { children: ReactNode; icon?: string; iconLight?: string; invert?: "black" | "white" }) {
  const theme = useSettingsStore((state) => state.activeTheme);
  const baseIcon = theme === "light" ? iconLight || icon : icon;

  let filter = undefined;
  if ((theme === "dark" && invert === "black") || (theme === "light" && invert === "white")) {
    filter = "invert(1)";
  }

  return (
    <span className="tag">
      {baseIcon && (
        <Image src={baseIcon} alt={`${children} icon`} width={16} height={16} style={{ filter }} />
      )}
      {children}
    </span>
  );
}
