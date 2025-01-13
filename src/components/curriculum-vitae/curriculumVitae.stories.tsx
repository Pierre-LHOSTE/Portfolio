import type { Meta, StoryObj } from "@storybook/react";
import CurriculumVitae from "./CurriculumVitae";

const meta = {
  title: "CurriculumVitae/CurriculumVitae",
  component: CurriculumVitae,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CurriculumVitae>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
