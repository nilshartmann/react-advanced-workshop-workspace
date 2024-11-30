import type { Meta, StoryObj } from "@storybook/react";

import { H4 } from "../Heading.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Heading/H4",
  component: H4,
  tags: ["autodocs", "!dev"],
  parameters: {
    docs: {
      description: {
        story: `Standard h4 Überschriften-Element`,
      },
    },
  },
} satisfies Meta<typeof H4>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: { children: "Hello World" },
};
