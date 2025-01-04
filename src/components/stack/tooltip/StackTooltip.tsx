import { IconAlertTriangle, IconLivePhoto, IconWritingSign } from "@tabler/icons-react";
import type { ReplacementType, StackIdType, StackType } from "../stack";
import "./stack-tooltip.scss";
import Tag from "@/components/tag/Tag";
import { useI18nContext } from "@/i18n/i18n-react";
import { stackItem } from "../data";
import StackIcon from "../icon/StackIcon";

const ICON_SIZE = 18;

export default function StackTooltip({ stack, id }: { stack: StackType; id: StackIdType }) {
  const { LL } = useI18nContext();

  let replacedStack: ReplacementType | null = null;
  let replacedReason = "";
  if (stack.replacement) {
    replacedStack = stackItem[stack.replacement.name as StackIdType];
    replacedReason = LL.stacks[id].replacement();
  }

  return (
    <>
      <h3>
        <StackIcon stack={stack} size={22} />
        {stack.name}
      </h3>
      <p>{LL.stacks[id].description()}</p>

      <div>
        <Tag>
          <a href={stack.homepage} target="_blank" rel="noreferrer">
            {stack.homepage}
          </a>
        </Tag>
      </div>

      {stack.tags.includes("active") || stack.tags.includes("learning") || stack.replacement ? (
        <div className="icon-info">
          {stack.tags.includes("active") && (
            <p>
              <IconLivePhoto
                color="DeepSkyBlue"
                size={ICON_SIZE}
                key="active"
                title={LL.stack.active()}
              />
              {LL.stack.active()}
            </p>
          )}
          {stack.tags.includes("learning") && (
            <p>
              <IconWritingSign
                color="MediumSeaGreen"
                size={ICON_SIZE}
                key="love"
                title={LL.stack.learning()}
              />
              {LL.stack.learning()}
            </p>
          )}
          {replacedStack && (
            <p>
              <IconAlertTriangle
                size={ICON_SIZE}
                color="orange"
                key="replacement"
                title={LL.stack.replaced({
                  name: replacedStack.name,
                  reason: replacedReason,
                })}
              />
              {LL.stack.replaced({
                name: replacedStack.name,
                reason: replacedReason,
              })}
            </p>
          )}
        </div>
      ) : null}
    </>
  );
}
