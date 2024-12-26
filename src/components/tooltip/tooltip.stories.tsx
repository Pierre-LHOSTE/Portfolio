import type { Meta, StoryObj } from "@storybook/react";
import Tooltip from "./Tooltip";

const meta = {
  title: "Tooltip/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <p>Hi</p>,
    content: <p>Im a tooltip</p>,
  },
};
