import type { Meta, StoryObj } from "@storybook/react";
import ChatInput from "./ChatInput";

const meta = {
  title: "App/Content/Input",
  component: ChatInput,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ChatInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    input: "",
    handleInputChange: () => {},
    handleSubmit: async () => {},
    ref: null,
    isLoading: false,
    threadId: "1",
  },
};
