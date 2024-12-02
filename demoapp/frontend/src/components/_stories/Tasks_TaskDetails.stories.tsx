import type { Meta, StoryObj } from "@storybook/react";

import TaskDetails from "../TaskDetails.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Tasks/TaskDetails",
  component: TaskDetails,
  tags: ["autodocs", "!dev"],
  parameters: {
    docs: {
      description: {
        component: `Zeigt die **Detaildarstellung** eines \`Tasks\` an.
        `,
      },
    },
  },
} satisfies Meta<typeof TaskDetails>;

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
