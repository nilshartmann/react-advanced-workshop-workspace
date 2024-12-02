import type { Meta, StoryObj } from "@storybook/react";

import PinButton from "../PinButton.tsx";

const meta = {
  title: "Components/PinButton",
  component: PinButton,
  tags: ["autodocs", "!dev"],
  parameters: {
    docs: {
      description: {
        story: `Stellt einen Herzchen dar, das selektiert werden kann
        
- Beim drüberfahren mit der Maus wird der Pfeil hervorgehoben
- Wenn auf das Herzchen geklickt wird, wird die \`onClick\` Callback-Funktion aufgerufen   
        `,
      },
    },
  },
} satisfies Meta<typeof PinButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    pinned: true,
    onClick() {},
  },
};

export const Unpinned: Story = {
  args: {
    pinned: false,
    onClick() {},
  },
};
