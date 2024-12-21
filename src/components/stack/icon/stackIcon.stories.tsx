import type { Meta, StoryObj } from "@storybook/react";
import StackIcon from "./StackIcon";

const meta = {
  title: "Stack/Icon",
  component: StackIcon,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof StackIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

import { stackItem } from "../list";

export const Prisma: Story = {
  args: {
    stack: stackItem.prisma,
  },
};

export const Vite: Story = {
  args: {
    stack: stackItem.vite,
  },
};

export const AntDesign: Story = {
  args: {
    stack: stackItem.antDesign,
  },
};

export const React: Story = {
  args: {
    stack: stackItem.react,
  },
};

export const Zod: Story = {
  args: {
    stack: stackItem.zod,
  },
};

export const Zustand: Story = {
  args: {
    stack: stackItem.zustand,
  },
};

export const DndKit: Story = {
  args: {
    stack: stackItem.dndKit,
  },
};

export const JavaScript: Story = {
  args: {
    stack: stackItem.javascript,
  },
};

export const Vercel: Story = {
  args: {
    stack: stackItem.vercel,
  },
};
