import type { IconProps } from "@tabler/icons-react";
import type { ForwardRefExoticComponent } from "react";

export type CategoryType =
  | "framework"
  | "language"
  | "frontend"
  | "backend"
  | "database"
  | "tools"
  | "deployment";

export interface StackStyleType {
  icon: string;
  iconHovered?: string;
  iconLight?: string;
  color: string;
  background: string;
  transform?: string;
  invert?: "black" | "white";
}

export interface StackType {
  name: string;
  description: string;
  reason: string;
  category: CategoryType;
  homepage: string;
  tags?: ("active" | "love" | "learning")[];
  replacement?: {
    name: string;
    reason: string;
  };

  styles: StackStyleType;
}

export interface StackGroupType {
  name: string;
  icon: ForwardRefExoticComponent<IconProps>;
  stack: StackType[];
}
