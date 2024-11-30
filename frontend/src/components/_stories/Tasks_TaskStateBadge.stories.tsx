import type { Meta, StoryObj } from "@storybook/react";

import TaskStateBadge from "../TaskStateBadge.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Tasks/TaskStateBadge",
  component: TaskStateBadge,
  tags: ["autodocs", "!dev"],
  parameters: {
    docs: {
      description: {
        story: `Zeigt den \`State\` eines \`Tasks\` an.
        `,
      },
    },
  },
} satisfies Meta<typeof TaskStateBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const New: Story = {
  args: { state: "new" },
};

export const In_Progress: Story = {
  args: { state: "in_progress" },
};

export const Done: Story = {
  args: { state: "done" },
};
