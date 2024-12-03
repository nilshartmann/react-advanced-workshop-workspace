import type { Meta, StoryObj } from "@storybook/react";

import ArticleLayout from "../ArticleLayout.tsx";
import { H1 } from "../Heading.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "App/ArticleLayout",
  component: ArticleLayout,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `Ein einfaches Layout für Seiten mit statischem Inhalt
- Das Layout ist komplett leer (kein Titel o.ä.)        
- Der komplette Seiteninhalt wird per \`children\` übergeben. 
`,
      },
    },
  },
} satisfies Meta<typeof ArticleLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: (
      <>
        <H1>About Us</H1>
        <p>We provide top of the class services</p>
        <p>Our service helps you manage your tasks</p>
      </>
    ),
  },
};
