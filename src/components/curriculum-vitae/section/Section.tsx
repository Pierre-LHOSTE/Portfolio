import type { IconProps } from "@tabler/icons-react";
import type { ForwardRefExoticComponent, ReactNode } from "react";
import "./section.scss";

export default function Section({
  title,
  details,
  id,
  Icon,
  children,
}: {
  title: string;
  details?: string;
  id: string;
  // biome-ignore lint/style/useNamingConvention: It's a React component
  Icon: ForwardRefExoticComponent<IconProps>;
  children: ReactNode;
}) {
  return (
    <div id={id} className="cv-section">
      <h3>
        <Icon size={18} />
        {title}
        {details && <span className="details"> {details}</span>}
      </h3>
      <div className="content">{children}</div>
    </div>
  );
}
