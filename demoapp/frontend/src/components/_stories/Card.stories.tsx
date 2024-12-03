import type { Meta, StoryObj } from "@storybook/react";

import Card from "../Card.tsx";
import DueDateBadge from "../DueDateBadge.tsx";
import { H4 } from "../Heading.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `Eine einfache Karte, die einen beliebigen Inhalt darstellt.
        
- Der **Inhalt** wird per \`children\` gesetzt (beliebige ReactNode, also z.B. ein Element oder ein String).
- Die Karte wird per Default über die volle Breite des Parent-Containers dargestellt. Das kann allerdings angepasst werden, indem
  entsprechende CSS-Klassen mit \`className\` gesetzt werden.

`,
      },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SimpleCard: Story = {
  args: { children: "Card Content" },
};

export const CompleteCard: Story = {
  args: {
    children: (
      <div className={"flex-col space-y-4"}>
        <H4>Task: Write docs</H4>
        <p>
          It is <b>important</b> to finish the docs until next status meeting
        </p>
        <DueDateBadge dueDate={"2024-09-27"} />
      </div>
    ),
  },
};

export const SmallCard: Story = {
  parameters: {
    docs: {
      description: {
        story: `Mit \`className="inline-flex"\` wird die Karte nur so breit, wie sie muss (keine volle Breite mehr)`,
      },
    },
  },
  args: {
    className: "inline-flex",
    children: (
      <div className={"flex-col space-y-2"}>
        <H4>Information</H4>
        <p>Please read our policies.</p>
      </div>
    ),
  },
};
