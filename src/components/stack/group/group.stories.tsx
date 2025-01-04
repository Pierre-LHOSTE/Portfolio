import type { Meta, StoryObj } from "@storybook/react";
import { stackGroup } from "../data";
import Group from "./Group";

const meta = {
  title: "Stack/Group",
  component: Group,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Group>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FrontendStack: Story = {
  args: {
    group: stackGroup.frontend,
  },
};

export const BackendStack: Story = {
  args: {
    group: stackGroup.backend,
  },
};

export const DeploymentStack: Story = {
  args: {
    group: stackGroup.deployment,
  },
};

export const LanguageStack: Story = {
  args: {
    group: stackGroup.tools,
  },
};
