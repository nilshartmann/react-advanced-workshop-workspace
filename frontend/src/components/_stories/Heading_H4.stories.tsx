import type { Meta, StoryObj } from "@storybook/react";

import { H2 } from "../Heading.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Heading/H2",
  component: H2,
  tags: ["autodocs", "!dev"],
  parameters: {
    docs: {
      description: {
        story: `Standard h2 Überschriften-Element`,
      },
    },
  },
} satisfies Meta<typeof H2>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: { children: "Hello World" },
};
