import type { Meta, StoryObj } from "@storybook/react";
import { projectsList } from "../list";
import Project from "./Project";

const meta = {
  title: "Projects/Project",
  component: Project,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Project>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    project: projectsList["first-portfolio"],
    id: "first-portfolio",
  },
};
