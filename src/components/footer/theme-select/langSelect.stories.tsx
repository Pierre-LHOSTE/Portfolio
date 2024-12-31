import type { Meta, StoryObj } from "@storybook/react";
import LangSelect from "./ThemeSelect";
const meta = {
  title: "Footer/Actions/LangSelect",
  component: LangSelect,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof LangSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
