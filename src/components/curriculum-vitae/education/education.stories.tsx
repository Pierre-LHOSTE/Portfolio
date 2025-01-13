import type { Meta, StoryObj } from "@storybook/react";
import Education from "./Education";

const meta = {
  title: "CurriculumVitae/Education",
  component: Education,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Education>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
