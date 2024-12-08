import type { ForwardRefExoticComponent, RefAttributes } from "react";
import "./button.scss";
import type { Icon, IconProps } from "@tabler/icons-react";

export default function Button({
  text,
  Icon,
  type = "primary",
  ...props
}: {
  text?: string;
  // biome-ignore lint/style/useNamingConvention: <explanation>
  Icon?: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
  type?: "primary" | "secondary";
  props?: unknown;
}) {
  return (
    <button className={`button ${type}`} type="button" {...props}>
      <span>
        {Icon && <Icon size={18} strokeWidth={3} />}
        {text}
      </span>
    </button>
  );
}
