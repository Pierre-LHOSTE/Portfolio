import type { Meta, StoryObj } from "@storybook/react";
import Timeline from "./Timeline";

const meta = {
  title: "Timeline",
  component: Timeline,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
