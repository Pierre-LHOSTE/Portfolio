import type { ReactNode } from "react";
import "./key.scss";
import { IconCommand } from "@tabler/icons-react";

export default function Key({
  k,
}: {
  k: ReactNode;
}) {
  if (k === "⌘") {
    k = <IconCommand size={22} />;
  }

  return (
    <kbd>
      <span>
        <span>{k}</span>
      </span>
    </kbd>
  );
}
