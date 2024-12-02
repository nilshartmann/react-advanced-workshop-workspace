import type { Meta, StoryObj } from "@storybook/react";

import Form from "../Form.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "components/forms/Form",
  component: Form,
  tags: ["autodocs", "!dev"],
  parameters: {
    docs: {
      description: {
        component: `Rendert ein \`form\` Element mit einem Zeilen-Layout mit festen Abständen zwischen den Zeilen.
        
- Der Inhalt des Formulars wird per \`children\`-Property übergeben.
        
        `,
      },
    },
  },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: (
      <>
        <p>one</p>
        <p>two</p>
        <p>three</p>
      </>
    ),
  },
};
