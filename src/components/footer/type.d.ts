import type { IconProps } from "@tabler/icons-react";
import type { ForwardRefExoticComponent, ReactNode } from "react";

interface FooterColumnsType {
  title: string;
  urls: {
    title: ReactNode;
    url?: string;
    icon?: {
      url: string;
      invert?: "black" | "white";
    };
    // biome-ignore lint/style/useNamingConvention: It's a React component
    Icon?: ForwardRefExoticComponent<IconProps>;
  }[];
}
