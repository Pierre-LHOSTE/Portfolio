import type { Meta, StoryObj } from "@storybook/react";
import { stackItem } from "../data";
import StackTooltip from "./StackTooltip";

const meta = {
  title: "Stack/StackTooltip",
  component: StackTooltip,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="tooltip">
        <div className="content">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof StackTooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TablerIcons: Story = {
  args: {
    stack: stackItem.tablerIcons,
    id: "tablerIcons",
  },
};

export const Motion: Story = {
  args: {
    stack: stackItem.motion,
    id: "motion",
  },
};

export const ReactRedux: Story = {
  args: {
    stack: stackItem.reactRedux,
    id: "reactRedux",
  },
};
