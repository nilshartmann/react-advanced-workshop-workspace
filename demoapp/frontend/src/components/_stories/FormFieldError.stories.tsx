import type { Meta, StoryObj } from "@storybook/react";

import FormFieldError from "../FormFieldError.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "components/forms/FormFieldError",
  component: FormFieldError,
  tags: ["autodocs", "!dev"],
  parameters: {
    docs: {
      description: {
        component: `Zeigt eine Fehlermeldung, z.B. unterhalb eines \`TextInput\` in einer \`Form\` an
        
- Die Meldung wird per \`children\` übergeben. Wenn das \`children\` \`null\` oder leer ist, wird nichts gerendert.
        
        `,
      },
    },
  },
} satisfies Meta<typeof FormFieldError>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Bitte geben Sie einen gültigen Wert ein",
  },
};
