import type { Meta, StoryObj } from "@storybook/react";

import FormLabel from "../FormLabel.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "components/forms/FormLabel",
  component: FormLabel,
  tags: ["autodocs", "!dev"],
  parameters: {
    docs: {
      description: {
        component: `Ein Label z.B. für ein \`TextInput\` in einer \`Form\`
        
- Nimmt alle Properties an, die auch das HTML \`label\`-Element kennt.
        
        `,
      },
    },
  },
} satisfies Meta<typeof FormLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Task-Beschreibung:",
  },
};
