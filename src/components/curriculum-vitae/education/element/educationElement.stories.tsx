import { timelineElementList } from "@/components/timeline/data";
import type { Meta, StoryObj } from "@storybook/react";
import EducationElement from "./EducationElement";

const meta = {
  title: "CurriculumVitae/EducationElement",
  component: EducationElement,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof EducationElement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    education: timelineElementList.fsd,
    id: "fsd",
  },
};
