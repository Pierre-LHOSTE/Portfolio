import type { Meta, StoryObj } from "@storybook/react";

import SocialNetwork from "./SocialNetwork";

const meta = {
  title: "Contact/SocialNetwork",
  component: SocialNetwork,
  parameters: {
    layout: "centered",
  },
  decorators: [],
} satisfies Meta<typeof SocialNetwork>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
