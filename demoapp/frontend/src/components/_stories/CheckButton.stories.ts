import type { Meta, StoryObj } from "@storybook/react";

import { CheckButton } from "../CheckButton.tsx";

const meta = {
  title: "Components/CheckButton",
  component: CheckButton,
  tags: ["autodocs", "!dev"],
  parameters: {
    docs: {
      description: {
        component: `Ein Button, der neben dem Label einen Haken in einem Kreis (\`checked\`) oder einen leeren Kreis  (\`unchecked\`) darstellt.
        
Ein Button im Zustand \`checked\` kann **nicht angeklickt** werden. Damit verhält sich der \`CheckedButton\` ähnlich wie ein HTML Radio-Button.         
        `,
      },
    },
  },
} satisfies Meta<typeof CheckButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    checked: true,
    children: "Order by date",
  },
};

export const Unchecked: Story = {
  args: {
    checked: false,
    children: "Order by effort",
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
    children: "Order by effort",
  },
};
