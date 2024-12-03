import type { Meta, StoryObj } from "@storybook/react";

import TextInput from "../TextInput.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "components/forms/TextInput",
  component: TextInput,
  tags: ["autodocs", "!dev"],
  parameters: {
    docs: {
      description: {
        component: `Ein HTML \`input\` Feld mit Default Styling.
        
- Nimmt alle Properties an, die auch das HTML \`input\`-Element kennt.
        
        `,
      },
    },
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    placeholder: "Geben Sie etwas ein",
  },
};
