import { IconAlertTriangle, IconLivePhoto, IconWritingSign } from "@tabler/icons-react";
import StackIcon from "../icon/StackIcon";
import type { ReplacementType, StackIdType, StackType } from "../stack.d";
import "./element.scss";
import Tooltip from "@/components/tooltip/Tooltip";
import { useI18nContext } from "@/i18n/i18n-react";
import { type ReactElement, useState } from "react";
import { stackItem } from "../data";
import StackTooltip from "../tooltip/StackTooltip";

const ICON_SIZE = 18;

export default function Stack({
  stack,
  id,
}: {
  stack: StackType;
  id: StackIdType;
}) {
  const icons: ReactElement[] = [];
  const [open, setOpen] = useState(false);
  const { LL } = useI18nContext();

  let replacedStack: ReplacementType | null = null;
  let replacedReason = "";
  if (stack.replacement) {
    replacedStack = stackItem[stack.replacement.name as StackIdType];
    replacedReason = LL.stacks[id].replacement();
  }

  function handleOpen() {
    setOpen(true);
  }

  if (stack.tags?.includes("learning"))
    icons.push(
      <IconWritingSign
        color="MediumSeaGreen"
        size={ICON_SIZE}
        key="love"
        title={LL.stack.learning()}
      />
    );

  if (stack.tags?.includes("active"))
    icons.push(
      <IconLivePhoto color="DeepSkyBlue" size={ICON_SIZE} key="active" title={LL.stack.active()} />
    );

  if (replacedStack) {
    icons.push(
      <IconAlertTriangle
        size={ICON_SIZE}
        color="orange"
        key="replacement"
        title={LL.stack.replaced({
          name: replacedStack.name,
          reason: replacedReason,
        })}
      />
    );
  }

  return (
    <Tooltip
      content={<StackTooltip stack={stack} id={id} />}
      forceOpen={open}
      setForceOpen={setOpen}
    >
      {/* biome-ignore lint/nursery/noStaticElementInteractions: <explanation> */}
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div className={`stack${open ? " opened" : ""}`} onClick={handleOpen}>
        <div>
          <StackIcon stack={stack} />
          <div className="content">
            <h4>
              <span className="name">{stack.name}</span>
              {icons.length > 0 ? <span className="icons">{icons.map((icon) => icon)}</span> : null}
            </h4>
            <p>{LL.stacks[id].reason()}</p>
          </div>
        </div>
      </div>
    </Tooltip>
  );
}
