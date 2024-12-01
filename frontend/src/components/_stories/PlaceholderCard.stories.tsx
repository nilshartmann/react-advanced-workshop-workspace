import type { Meta, StoryObj } from "@storybook/react";

import PlaceholderCard from "../PlaceholderCard.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/PlaceholderCard",
  component: PlaceholderCard,
  tags: ["autodocs", "!dev"],
  parameters: {
    docs: {
      description: {
        story: `Zeigt einen animierten Platzhalten an, der einer \`TaskSummaryCard\` nachempfunden ist.
        
        `,
      },
    },
  },
} satisfies Meta<typeof PlaceholderCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {},
};
