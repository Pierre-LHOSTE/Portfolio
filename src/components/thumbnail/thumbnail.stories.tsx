import type { Meta, StoryObj } from "@storybook/react";
import Thumbnail from "./Thumbnail";

const meta = {
  title: "Thumbnail/2",
  component: Thumbnail,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="light-theme">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Thumbnail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
