import type { Meta, StoryObj } from "@storybook/react";
import Experience from "./Experience";

const meta = {
  title: "CurriculumVitae/Experience",
  component: Experience,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Experience>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
