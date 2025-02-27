import type { Meta, StoryObj } from "@storybook/react";
import Message from "./Message";

const meta = {
  title: "Hero/Message",
  component: Message,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
