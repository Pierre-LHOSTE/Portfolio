import type { Meta, StoryObj } from "@storybook/react";
import { timelineElementList } from "../data";
import TimelineElement from "./TimelineElement";

const meta = {
  title: "Timeline/Element",
  component: TimelineElement,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ minWidth: "800px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TimelineElement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default1: Story = {
  args: {
    element: timelineElementList.bac,
    height: 0,
    id: "bac",
  },
};

export const Default2: Story = {
  args: {
    element: timelineElementList.dut,
    height: 0,
    id: "dut",
  },
};

export const Default3: Story = {
  args: {
    element: timelineElementList.fsd,
    height: 0,
    id: "fsd",
  },
};

export const Default4: Story = {
  args: {
    element: timelineElementList.app,
    height: 0,
    id: "app",
  },
};
