import type { Meta, StoryObj } from "@storybook/react";
import Hero from "./Hero";

const meta = {
  title: "Hero/Hero",
  component: Hero,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "1",
  },
};
