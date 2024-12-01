import type { Meta, StoryObj } from "@storybook/react";

import { AppLink } from "../AppLink.tsx";

const meta = {
  title: "App/AppLink",
  component: AppLink,
  tags: ["autodocs", "!dev"],
  parameters: {
    docs: {
      description: {
        story: `Ein interner Link, der **typsicher** ist.
        
- **todo:** Die Logik dafür müssen wir im Workshop implementieren.        
        `,
      },
    },
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Home",
  },
};
