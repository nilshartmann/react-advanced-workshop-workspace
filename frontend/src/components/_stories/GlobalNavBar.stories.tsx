import type { Meta, StoryObj } from "@storybook/react";

import Card from "../Card.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Card",
  component: Card,
  tags: ["autodocs", "!dev"],
  parameters: {
    docs: {
      description: {
        story: `Eine einfache Karte, die einen beliebigen Inhalt darstellt.
        
Der **Inhalt** wird per \`children\` gesetzt (beliebige ReactNode, also z.B. ein Element oder ein String).`,
      },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: { children: "Card Content" },
};
