import { IconAlertSquareRounded, IconLivePhoto, IconWritingSign } from "@tabler/icons-react";
import StackIcon from "../icon/StackIcon";
import type { StackType } from "../stack.d";
import "./element.scss";
import type { ReactElement } from "react";
import { stackItem } from "../list";

const ICON_SIZE = 18;

export default function Stack({
  stack,
}: {
  stack: StackType;
}) {
  const icons: ReactElement[] = [];

  if (stack.tags?.includes("learning"))
    icons.push(<IconWritingSign size={ICON_SIZE} key="love" title="Actually learning" />);

  if (stack.tags?.includes("active"))
    icons.push(<IconLivePhoto size={ICON_SIZE} key="active" title="Used on this website" />);

  if (stack.replacement) {
    const replacement = stackItem[stack.replacement.name as keyof typeof stackItem];
    icons.push(
      <IconAlertSquareRounded
        size={ICON_SIZE}
        key="replacement"
        title={`Replaced by ${replacement.name} because "${stack.replacement.reason}"`}
      />
    );
  }

  return (
    <div className="stack">
      <div>
        <StackIcon stack={stack} />
        <div className="content">
          <h4>
            <span className="name">{stack.name}</span>
            {icons.length > 0 ? <span className="icons">{icons.map((icon) => icon)}</span> : null}
          </h4>
          <p>{stack.reason}</p>
        </div>
      </div>
    </div>
  );
}
