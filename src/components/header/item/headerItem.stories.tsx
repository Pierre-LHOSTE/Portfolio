import type { Meta, StoryObj } from "@storybook/react";
import HeaderItem from "./HeaderItem";

const meta = {
  title: "Header/Item",
  component: HeaderItem,
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
} satisfies Meta<typeof HeaderItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Home",
    active: false,
  },
};

export const Active: Story = {
  args: {
    label: "Home",
    active: true,
  },
};
