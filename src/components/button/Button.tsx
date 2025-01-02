import type { ForwardRefExoticComponent, RefAttributes } from "react";
import "./button.scss";
import { type Icon, IconExternalLink, type IconProps, IconSend } from "@tabler/icons-react";

export default function Button({
  text,
  Icon,
  type = "primary",
  url,
  onClick,
  ...props
}: {
  text?: string;
  // biome-ignore lint/style/useNamingConvention: <explanation>
  Icon?: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
  type?: "primary" | "secondary" | "submit" | "text";
  url?: string;
  onClick?: () => void;
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
          {url.startsWith("mailto:") ? (
            <IconSend size={18} strokeWidth={2.5} />
          ) : (
            <IconExternalLink size={18} strokeWidth={2.5} />
          )}
          {text}
        </span>
      </a>
    );
  }
  return (
    <button
      className={`button ${type}`}
      type={type === "submit" ? "submit" : "button"}
      onClick={onClick}
      {...props}
    >
      <span>
        {Icon && <Icon size={18} strokeWidth={3} />}
        {text}
      </span>
    </button>
  );
}
