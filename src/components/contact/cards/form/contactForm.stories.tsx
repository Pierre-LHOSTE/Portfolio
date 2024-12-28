import type { Meta, StoryObj } from "@storybook/react";

import ContactForm from "./ContactForm";

const meta = {
  title: "Contact/Form",
  component: ContactForm,
  parameters: {
    layout: "centered",
  },
  decorators: [],
} satisfies Meta<typeof ContactForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
