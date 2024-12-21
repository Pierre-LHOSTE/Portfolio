import type { Meta, StoryObj } from "@storybook/react";
import { app, bac, dut, fsd } from "../timeline-data";
import TimelineElement from "./TimelineElement";

const meta = {
  title: "Timeline/Element",
  component: TimelineElement,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TimelineElement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default1: Story = {
  args: {
    element: bac,
  },
};

export const Default2: Story = {
  args: {
    element: dut,
  },
};

export const Default3: Story = {
  args: {
    element: fsd,
  },
};

export const Default4: Story = {
  args: {
    element: app,
  },
};
