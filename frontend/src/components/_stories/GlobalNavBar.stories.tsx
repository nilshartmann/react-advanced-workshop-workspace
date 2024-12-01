import type { Meta, StoryObj } from "@storybook/react";

import GlobalNavBar from "../GlobalNavBar.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "App/GlobalNavBar",
  component: GlobalNavBar,
  tags: ["autodocs", "!dev"],
  parameters: {
    docs: {
      description: {
        story: `Die globale Navigationsbar
        
Dargestellt werden (sollen) einzelne Links, die wir im Workshop noch implementieren müssen`,
      },
    },
  },
} satisfies Meta<typeof GlobalNavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {};
