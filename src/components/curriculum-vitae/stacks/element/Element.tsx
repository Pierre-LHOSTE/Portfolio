import StackIcon from "@/components/stack/icon/StackIcon";
import type { StackIdType, StackType } from "@/components/stack/stack";
import {} from "@tabler/icons-react";
import type { ReactElement } from "react";
import "./element.scss";

const ICON_SIZE = 16;

export default function Stack({
  stack,
  id,
}: {
  stack: StackType;
  id: StackIdType;
}) {
  const icons: ReactElement[] = [];

  return (
    <div className="cv-stack">
      <StackIcon stack={stack} size={ICON_SIZE} forcedTheme="light" />
      <div className="content">
        <h4>
          <span className="name">{stack.name}</span>
          {icons.length > 0 ? <span className="icons">{icons.map((icon) => icon)}</span> : null}
        </h4>
      </div>
    </div>
  );
}
