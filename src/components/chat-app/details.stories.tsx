import type { Meta, StoryObj } from "@storybook/react";
import ChatApp from "./ChatApp";

const meta = {
  title: "App/App",
  component: ChatApp,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ChatApp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
