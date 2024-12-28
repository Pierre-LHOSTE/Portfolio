import type { Meta, StoryObj } from "@storybook/react";

import EmailCard from "./EmailCard";

const meta = {
  title: "Contact/Email",
  component: EmailCard,
  parameters: {
    layout: "centered",
  },
  decorators: [],
} satisfies Meta<typeof EmailCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
