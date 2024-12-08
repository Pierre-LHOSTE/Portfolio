import type { Meta, StoryObj } from "@storybook/react";
import { IconDownload } from "@tabler/icons-react";
import Button from "./Button";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Download",
    // biome-ignore lint/style/useNamingConvention: <explanation>
    Icon: IconDownload,
  },
};
