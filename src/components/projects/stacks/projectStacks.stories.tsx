import { stackItem } from "@/components/stack/list";
import type { Meta, StoryObj } from "@storybook/react";
import { projectsList } from "../list";
import ProjectStacks from "./ProjectStacks";

const meta = {
  title: "Projects/Stack",
  component: ProjectStacks,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ProjectStacks>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    stacks: projectsList["212-colors"].technologies.map((tech) => stackItem[tech]),
  },
};
