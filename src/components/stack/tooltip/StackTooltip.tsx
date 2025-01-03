import { IconAlertTriangle, IconLivePhoto, IconWritingSign } from "@tabler/icons-react";
import type { StackType } from "../stack";
import "./stack-tooltip.scss";
import StackIcon from "../icon/StackIcon";

const ICON_SIZE = 18;

export default function StackTooltip({ stack }: { stack: StackType }) {
  return (
    <>
      <h3>
        <StackIcon stack={stack} size={22} />
        {stack.name}
      </h3>
      <p>{stack.description}</p>

      <div className="icon-info">
        {stack.tags.includes("active") && (
          <p>
            <IconLivePhoto
              color="DeepSkyBlue"
              size={ICON_SIZE}
              key="active"
              title="Used on this website"
            />
            Used on this website
          </p>
        )}
        {stack.tags.includes("learning") && (
          <p>
            <IconWritingSign
              color="MediumSeaGreen"
              size={ICON_SIZE}
              key="love"
              title="Actually learning"
            />
            Actually learning
          </p>
        )}
        {stack.replacement && (
          <p>
            <IconAlertTriangle
              size={ICON_SIZE}
              color="orange"
              key="replacement"
              title={`Replaced by ${stack.replacement.name} because "${stack.replacement.reason}"`}
            />
            Replaced by {stack.replacement.name} because "{stack.replacement.reason}"
          </p>
        )}
      </div>
    </>
  );
}
