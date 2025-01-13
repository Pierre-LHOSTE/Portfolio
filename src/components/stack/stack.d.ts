import type { IconProps } from "@tabler/icons-react";
import type { ForwardRefExoticComponent } from "react";
import type { stackItem } from "./data";

export type StackIdType = keyof typeof stackItem;

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

export interface ReplacementType {
  name: string;
  reason: {
    en: string;
    fr: string;
  };
}

export interface StackType {
  name: string;
  description: {
    en: string;
    fr: string;
  };
  reason: {
    en: string;
    fr: string;
  };
  category: CategoryType;
  homepage: string;
  tags: ("active" | "love" | "learning" | "important")[];
  replacement?: ReplacementType;

  styles: StackStyleType;
}

export interface StackGroupType {
  name: string;
  icon: ForwardRefExoticComponent<IconProps>;
  stacks: string[];
}
