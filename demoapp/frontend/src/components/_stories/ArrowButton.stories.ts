import type { Meta, StoryObj } from "@storybook/react";

import ArrowButton from "../ArrowButton.tsx";

const meta = {
  title: "Components/ArrowButton",
  component: ArrowButton,
  tags: ["autodocs", "!dev"],
  parameters: {
    docs: {
      description: {
        story: `Stellt einen Pfeil dar, der nach unten oder oben zeigt.
        
- Beim drüberfahren mit der Maus wird der Pfeil hervorgehoben
- Wenn auf den Pfeil geklickt wird, wird die \`onClick\` Callback-Funktion aufgerufen   
        `,
      },
    },
  },
} satisfies Meta<typeof ArrowButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    dir: "up",
    onClick() {},
  },
};
