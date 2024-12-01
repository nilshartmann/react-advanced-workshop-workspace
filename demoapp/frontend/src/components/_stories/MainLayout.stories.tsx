import type { Meta, StoryObj } from "@storybook/react";

import { PageTitle } from "../Heading.tsx";
import MainLayout from "../MainLayout.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "App/MainLayout",
  component: MainLayout,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `Erzeugt das globale Layout der Anwendung, das unterhalb der Navigationszeile (\`GlobalNavbar\`) verwendet wird und für eine korrekte Seitenbreite und vertikale Abstände sorgt.
`,
      },
    },
  },
} satisfies Meta<typeof MainLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SimpleCard: Story = {
  args: { children: "Inhalt der Seite" },
};

export const CompleteLayout: Story = {
  args: {
    children: (
      <>
        <PageTitle>About us</PageTitle>
        <p>Lirum larum</p>
      </>
    ),
  },
};
