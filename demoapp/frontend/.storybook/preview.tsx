import type { Preview } from "@storybook/react";
import "../src/index.css";
import {
  createMemoryHistory,
  createRootRoute,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
const preview: Preview = {
  decorators: [
    (Story) => {
      return (
        <div className={"container mx-auto max-w-4xl"}>
          <RouterProvider
            // @ts-ignore
            router={createRouter({
              history: createMemoryHistory(),
              routeTree: createRootRoute({
                component: Story,
              }),
            })}
          />
        </div>
      );
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
