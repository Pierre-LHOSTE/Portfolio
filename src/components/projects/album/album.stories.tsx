import type { Meta, StoryObj } from "@storybook/react";
import Album from "./Album";

const meta = {
  title: "Projects/Album",
  component: Album,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Album>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    images: [
      "https://qg007gk6n2popinf.public.blob.vercel-storage.com/project-thumbnail/first-portfolio/thumbnail.png",
      "https://qg007gk6n2popinf.public.blob.vercel-storage.com/project-thumbnail/first-portfolio/main.png",
    ],
  },
};
