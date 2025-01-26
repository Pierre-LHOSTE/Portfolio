import type { Meta, StoryObj } from "@storybook/react";
import Thumbnail from "./Thumbnail";

const meta = {
  title: "Thumbnail/1",
  component: Thumbnail,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Thumbnail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
