import type { Meta, StoryObj } from "@storybook/react";

import { TaskSummaryCard } from "../TaskSummaryCard.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Tasks/TaskSummaryCard",
  component: TaskSummaryCard,
  tags: ["autodocs", "!dev"],
  parameters: {
    docs: {
      description: {
        component: `Zeigt die *Zusammenfassung* eines \`Tasks\` an.
        
Die Karte kann ein- und ausgeklappt werden, um zum Beispiel eine initial platzsparende Darstellung innerhalb einer Liste zu ermöglichen.        
        `,
      },
    },
  },
} satisfies Meta<typeof TaskSummaryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const New: Story = {
  args: {
    task: {
      title: "Finish docs",
      id: "T-1000",
      description: "We really need to finish writing docs",
      effort: 8,
      state: "new",
      votes: 3,
      dueDate: "2024-11-23",
    },
  },
};
