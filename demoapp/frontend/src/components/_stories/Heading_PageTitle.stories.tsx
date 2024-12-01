import type { Meta, StoryObj } from "@storybook/react";

import { PageTitle } from "../Heading.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Heading/PageTitle",
  component: PageTitle,
  tags: ["autodocs", "!dev"],
  parameters: {
    docs: {
      description: {
        story: `Rendert den Titel einer Seite`,
      },
    },
  },
} satisfies Meta<typeof PageTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: { children: "Hello World" },
};
