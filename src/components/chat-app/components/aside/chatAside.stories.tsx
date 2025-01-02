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
    chatList: [
      {
        date: Date.now(),
        label: "Today",
        elements: [
          { title: "Problème avec l'API REST", id: "1" },
          { title: "Discussion sur le design", id: "2" },
          { title: "Effet text en CSS", id: "3" },
        ],
      },
      {
        date: Date.now() - 86400000,
        label: "Yesterday",
        elements: [
          { title: "Organisation du projet", id: "4" },
          { title: "Refactoring du code", id: "5" },
          { title: "Discussion sur les tests", id: "6" },
          { title: "Mise en place de l'authentification", id: "7" },
          { title: "Discussion sur les performances", id: "8" },
        ],
      },
    ],
  },
};
