import type { Meta, StoryObj } from "@storybook/react";
import Stack from "./Stack";

const meta = {
  title: "Stack/Stack",
  component: Stack,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
