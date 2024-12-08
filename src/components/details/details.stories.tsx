import type { Meta, StoryObj } from "@storybook/react";
import Details from "./Details";

const meta = {
  title: "Details",
  component: Details,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Details>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
