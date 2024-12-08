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
    date: "Today",
    elements: [
      { title: "Probleme avec l'API REST", id: "1" },
      { title: "Discussion sur le design", id: "2" },
      { title: "Effet text en CSS", id: "3" },
    ],
    active: "2",
  },
};
