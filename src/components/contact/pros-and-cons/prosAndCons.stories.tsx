import type { Meta, StoryObj } from "@storybook/react";
import ProsAndCons from "./ProsAndCons";

const meta = {
  title: "Contact/ProsAndCons",
  component: ProsAndCons,
  parameters: {
    layout: "centered",
  },
  decorators: [],
} satisfies Meta<typeof ProsAndCons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pros: ["Lorem ipsum dolor sit amet", "Consectetur adipiscing elit"],
    cons: ["Sed do eiusmod tempor incididunt ut labore", "Et dolore magna aliqua"],
  },
};
