import type { Meta, StoryObj } from "@storybook/react";

import InsightCard from "../InsightCard.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Tasks/InsightCard",
  component: InsightCard,
  tags: ["autodocs", "!dev"],
  parameters: {
    docs: {
      description: {
        story: `Stellt die \`Insights\`  eines Tasks dar in einer \`Card\` dar`,
      },
    },
  },
} satisfies Meta<typeof InsightCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    insight: {
      id: "1",
      author: "Laura Meier",
      text: "Could be JavaScript-related",
      confidence: 3,
    },
  },
};
