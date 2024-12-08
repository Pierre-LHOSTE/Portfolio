import type { Meta, StoryObj } from "@storybook/react";
import ChatInput from "./ChatInput";

const meta = {
  title: "App/Main/Input",
  component: ChatInput,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ChatInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
