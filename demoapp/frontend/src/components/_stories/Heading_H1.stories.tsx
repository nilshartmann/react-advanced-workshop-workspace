import type { Meta, StoryObj } from "@storybook/react";

import { H1 } from "../Heading.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Heading/H1",
  component: H1,
  tags: ["autodocs", "!dev"],
  parameters: {
    docs: {
      description: {
        story: `Standard h1 Überschriften-Element`,
      },
    },
  },
} satisfies Meta<typeof H1>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: { children: "Hello World" },
};
