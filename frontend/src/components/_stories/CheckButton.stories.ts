import type { Meta, StoryObj } from "@storybook/react";

import { CheckButton } from "./CheckButton.tsx";

const meta = {
  title: "CheckButton",
  component: CheckButton,
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
