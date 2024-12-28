import type { ForwardRefExoticComponent, RefAttributes } from "react";
import "./button.scss";
import { type Icon, IconExternalLink, type IconProps } from "@tabler/icons-react";

export default function Button({
  text,
  Icon,
  type = "primary",
  url,
  ...props
}: {
  text?: string;
  // biome-ignore lint/style/useNamingConvention: <explanation>
  Icon?: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
  type?: "primary" | "secondary" | "submit" | "text";
  url?: string;
  props?: unknown;
}) {
  if (url) {
    return (
      <a
        className={`button ${type}`}
        type={type === "submit" ? "submit" : "button"}
        href={url}
        target="_blank"
        {...props}
      >
        <span>
          <IconExternalLink size={18} strokeWidth={3} />
          {text}
        </span>
      </a>
    );
  }
  return (
    <button className={`button ${type}`} type={type === "submit" ? "submit" : "button"} {...props}>
      <span>
        {Icon && <Icon size={18} strokeWidth={3} />}
        {text}
      </span>
    </button>
  );
}
