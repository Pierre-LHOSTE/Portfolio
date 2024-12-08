import type { Meta, StoryObj } from "@storybook/react";

import Header from "./Header";

const meta = {
  title: "Header/Header",
  component: Header,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: "black", padding: "1rem" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
