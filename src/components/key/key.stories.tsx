import type { Meta, StoryObj } from "@storybook/react";

import Key from "./Key";

const meta = {
  title: "Base/Key",
  component: Key,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Key>;

export default meta;
type Story = StoryObj<typeof meta>;

export const KeyCommand: Story = {
  args: {
    k: "⌘",
  },
};

export const KeyP: Story = {
  args: {
    k: "P",
  },
};
