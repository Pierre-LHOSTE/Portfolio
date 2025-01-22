import type { Meta, StoryObj } from "@storybook/react";
import ChatAside from "./ChatAside";

const meta = {
  title: "App/Aside",
  component: ChatAside,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ChatAside>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    threadId: "1",
    setThreadId: (threadId: string | undefined) => console.log(threadId),
    deleteMessages: (threadId: string) => console.log(`Deleted messages for thread ${threadId}`),
    searchQuery: "",
    setSearchQuery: (query: string) => console.log(`Search query set to ${query}`),
    datedChannelList: [
      {
        date: Date.now(),
        label: "Today",
        elements: [
          { title: "Problème avec l'API REST", threadId: "1", updatedAt: Date.now() },
          { title: "Discussion sur le design", threadId: "2", updatedAt: Date.now() },
          { title: "Effet text en CSS", threadId: "3", updatedAt: Date.now() },
        ],
      },
      {
        date: Date.now() - 86400000,
        label: "Yesterday",
        elements: [
          { title: "Organisation du projet", threadId: "4", updatedAt: Date.now() - 86400000 },
          { title: "Refactoring du code", threadId: "5", updatedAt: Date.now() - 86400000 },
          { title: "Discussion sur les tests", threadId: "6", updatedAt: Date.now() - 86400000 },
          {
            title: "Mise en place de l'authentification",
            threadId: "7",
            updatedAt: Date.now() - 86400000,
          },
          {
            title: "Discussion sur les performances",
            threadId: "8",
            updatedAt: Date.now() - 86400000,
          },
        ],
      },
    ],
  },
};
