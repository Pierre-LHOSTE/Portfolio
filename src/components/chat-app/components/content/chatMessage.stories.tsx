import type { Meta, StoryObj } from "@storybook/react";
import ChatContent from "./ChatContent";

const meta = {
  title: "App/Content/ChatContent",
  component: ChatContent,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ChatContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    chat: [
      {
        role: "assistant",
        content: [
          "Hi, I'm the personal assistant of this chat.",
          "You can ask me anything you want, I'm here to respond to your questions about the chat.",
        ],
      },
      {
        role: "user",
        content: [
          "Hi, I'm a visitor of this chat and I have a question. I was wondering if you could help me understand how the chat application works and what features it offers. Additionally, I would like to know if there are any specific guidelines or rules that I need to follow while using this chat. Thank you for your assistance!",
        ],
      },
    ],
  },
};
