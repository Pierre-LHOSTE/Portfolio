import type { Meta, StoryObj } from "@storybook/react";

import { IconMail } from "@tabler/icons-react";
import ContactCard from "./ContactCard";

const meta = {
  title: "Contact/Card",
  component: ContactCard,
  parameters: {
    layout: "centered",
  },
  decorators: [],
} satisfies Meta<typeof ContactCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Email",
    description: "Lorem ipsum dolor sit amet",
    Icon: IconMail,
    isBest: true,
    actionTitle: "Contact Us",
    actionType: "primary",
    pros: ["Fast", "Reliable"],
    cons: ["Difficult to use", "Expensive"],
  },
};
