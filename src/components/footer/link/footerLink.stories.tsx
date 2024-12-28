import type { Meta, StoryObj } from "@storybook/react";
import FooterLink from "./FooterLink";

const meta = {
  title: "Footer/FooterLink",
  component: FooterLink,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof FooterLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Home",
    url: "#",
  },
};
