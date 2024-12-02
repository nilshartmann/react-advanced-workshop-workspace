import type { Meta, StoryObj } from "@storybook/react";

import FormControl from "../FormControl.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "components/forms/FormControl",
  component: FormControl,
  tags: ["autodocs", "!dev"],
  parameters: {
    docs: {
      description: {
        component: `Layout-Container für Form-Elemente wie \`FormLabel\` oder \`TextInput\`
        
- Der Inhalt für den Container wird per \`children\`-Property übergeben.
        
        `,
      },
    },
  },
} satisfies Meta<typeof FormControl>;

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
