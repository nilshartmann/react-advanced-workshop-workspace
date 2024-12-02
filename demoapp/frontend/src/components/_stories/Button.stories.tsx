import type { Meta, StoryObj } from "@storybook/react";

import Button from "../Button.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "components/forms/Button",
  component: Button,
  tags: ["autodocs", "!dev"],
  parameters: {
    docs: {
      description: {
        component: `Ein HTML \`button\` Default Styling.
        
- Nimmt alle Properties an, die auch das HTML \`button\`-Element kennt.
- Der Text des Buttons wird per  \`button\`-Property gesetzt
        
        `,
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Speichern",
  },
};

export const Disabled: Story = {
  args: {
    children: "Speichern",
    disabled: true,
  },
};
