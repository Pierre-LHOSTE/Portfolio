import type { Meta, StoryObj } from "@storybook/react";
import Select from "./Select";
const meta = {
  title: "Base/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { value: "1", label: "Option 1" },
      { value: "2", label: "Option 2" },
      { value: "3", label: "Option 3" },
    ],
    handleChange: (e: string) => console.log(e),
    value: "1",
    setValue: (e: string) => console.log(e),
  },
};
