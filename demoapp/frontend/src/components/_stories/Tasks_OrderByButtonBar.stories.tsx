import type { Meta, StoryObj } from "@storybook/react";

import OrderByButtonBar from "../OrderByButtonBar.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Tasks/OrderByButtonBar",
  component: OrderByButtonBar,
  tags: ["autodocs", "!dev"],
  parameters: {
    docs: {
      description: {
        story: `Zeigt die Buttons zum Sortieren der Task-Liste an.
        
- **todo:** Die Logik dafür müssen wir im Workshop implementieren.        
        `,
      },
    },
  },
} satisfies Meta<typeof OrderByButtonBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {},
};
