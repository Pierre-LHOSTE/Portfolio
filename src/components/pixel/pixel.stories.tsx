import type { Meta, StoryObj } from "@storybook/react";
import Pixel from "./Pixel";

const meta = {
  title: "Footer/Pixel",
  component: Pixel,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Pixel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
