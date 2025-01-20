import type { Meta, StoryObj } from "@storybook/react";
import ChatAsideList from "./ChatAsideList";

const meta = {
  title: "App/Aside/List",
  component: ChatAsideList,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ChatAsideList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    threadId: "1",
    setThreadId: (threadId: string | undefined) => {},
    deleteMessages: (threadId: string) => {},
    date: Date.now(),
    label: "Today",
    elements: [
      { title: "Probleme avec l'API REST", threadId: "1", updatedAt: Date.now() },
      { title: "Discussion sur le design", threadId: "2", updatedAt: Date.now() },
      { title: "Effet text en CSS", threadId: "3", updatedAt: Date.now() },
    ],
  },
};
