import type { Meta, StoryObj } from "@storybook/react";
import { ExperienceList } from "../data";
import ExperienceElement from "./ExperienceElement";

const meta = {
  title: "CurriculumVitae/ExperienceElement",
  component: ExperienceElement,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ExperienceElement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    experience: ExperienceList.coopcycle,
    id: "coopcycle",
  },
};
