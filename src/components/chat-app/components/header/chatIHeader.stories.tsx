import type { Meta, StoryObj } from "@storybook/react";
import ChatHeader from "./ChatHeader";

const meta = {
  title: "App/Content/ChatHeader",
  component: ChatHeader,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ChatHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    controls: {},
    setThreadId: (threadId: string) => {},
  },
};
