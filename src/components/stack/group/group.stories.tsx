import type { Meta, StoryObj } from "@storybook/react";
import { backend, frontend, language, tools } from "../list";
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
    group: frontend,
  },
};

export const BackendStack: Story = {
  args: {
    group: backend,
  },
};

export const DevOpsStack: Story = {
  args: {
    group: tools,
  },
};

export const LanguageStack: Story = {
  args: {
    group: language,
  },
};
