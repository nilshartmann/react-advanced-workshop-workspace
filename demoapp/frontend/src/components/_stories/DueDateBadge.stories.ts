import type { Meta, StoryObj } from "@storybook/react";

import DueDateBadge from "../DueDateBadge.tsx";

const meta = {
  title: "Components/DueDateBadge",
  component: DueDateBadge,
  tags: ["autodocs", "!dev"],
  parameters: {
    docs: {
      description: {
        component: `Zeigt ein Datum mit einem kleinen Symbol in einem Kasten an.
        `,
      },
    },
  },
} satisfies Meta<typeof DueDateBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    dueDate: "2024-11-29",
  },
};
