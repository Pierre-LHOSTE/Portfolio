import { IconAlertTriangle, IconLivePhoto, IconWritingSign } from "@tabler/icons-react";
import StackIcon from "../icon/StackIcon";
import type { StackIdType, StackType } from "../stack.d";
import "./element.scss";
import Tooltip from "@/components/tooltip/Tooltip";
import { type ReactElement, useState } from "react";
import { stackItem } from "../list";

const ICON_SIZE = 18;

export default function Stack({
  stack,
}: {
  stack: StackType;
}) {
  const icons: ReactElement[] = [];
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }

  if (stack.tags?.includes("learning"))
    icons.push(
      <IconWritingSign
        color="MediumSeaGreen"
        size={ICON_SIZE}
        key="love"
        title="Actually learning"
      />
    );

  if (stack.tags?.includes("active"))
    icons.push(
      <IconLivePhoto
        color="DeepSkyBlue"
        size={ICON_SIZE}
        key="active"
        title="Used on this website"
      />
    );

  if (stack.replacement) {
    const replacement = stackItem[stack.replacement.name as StackIdType];
    icons.push(
      <IconAlertTriangle
        size={ICON_SIZE}
        color="orange"
        key="replacement"
        title={`Replaced by ${replacement.name} because "${stack.replacement.reason}"`}
      />
    );
  }

  return (
    <Tooltip
      content={
        <>
          <h3>{stack.name}</h3>
          <p>{stack.description}</p>
        </>
      }
      forceOpen={open}
      setForceOpen={setOpen}
    >
      {/* biome-ignore lint/nursery/noStaticElementInteractions: <explanation> */}
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div className="stack" onClick={handleOpen}>
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
    </Tooltip>
  );
}
