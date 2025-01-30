import type { Meta, StoryObj } from "@storybook/react";
import { IconDownload } from "@tabler/icons-react";
import Button from "./Button";

const meta = {
  title: "Base/Button",
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

export const Secondary: Story = {
  args: {
    text: "Download",
    type: "secondary",
    // biome-ignore lint/style/useNamingConvention: <explanation>
    Icon: IconDownload,
  },
};
