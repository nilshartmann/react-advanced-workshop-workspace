import type { Meta, StoryObj } from "@storybook/react";

import TaskVotesBadge from "../TaskVotesBadge.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Tasks/TaskVotesBadge",
  component: TaskVotesBadge,
  tags: ["autodocs", "!dev"],
  parameters: {
    docs: {
      description: {
        component: `Zeigt die Anzahl *Votes* eines \`Tasks\` an (beliebige Zahl, die per Property übergeben wird).
        
        `,
      },
    },
  },
} satisfies Meta<typeof TaskVotesBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const New: Story = {
  args: {
    votes: 123,
  },
};
