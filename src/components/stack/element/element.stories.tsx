import type { Meta, StoryObj } from "@storybook/react";
import { stackItem } from "../data";
import Element from "./Element";

const meta = {
  title: "Stack/Element",
  component: Element,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Element>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Prisma: Story = {
  args: {
    stack: stackItem.prisma,
    id: "prisma",
  },
};

export const Vite: Story = {
  args: {
    stack: stackItem.vite,
    id: "vite",
  },
};

export const AntDesign: Story = {
  args: {
    stack: stackItem.antDesign,
    id: "antDesign",
  },
};

export const React: Story = {
  args: {
    stack: stackItem.react,
    id: "react",
  },
};

export const Zod: Story = {
  args: {
    stack: stackItem.zod,
    id: "zod",
  },
};

export const Zustand: Story = {
  args: {
    stack: stackItem.zustand,
    id: "zustand",
  },
};

export const DndKit: Story = {
  args: {
    stack: stackItem.dndKit,
    id: "dndKit",
  },
};

export const Vercel: Story = {
  args: {
    stack: stackItem.vercel,
    id: "vercel",
  },
};
