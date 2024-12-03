import { QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { afterAll, afterEach, beforeAll, it } from "vitest";

import { createQueryClient } from "./create-query-client.tsx";
import TaskLoader from "./TaskLoader.tsx";

const handlers = [
  http.get("http://localhost:3002/api/tasks", () => {
    return HttpResponse.json([
      {
        id: "1",
        title: "Fix Header Bug",
        description:
          "The website header is not rendering correctly on mobile devices, causing significant usability issues for users accessing the site on smaller screens. This bug seems to be related to the responsive design implementation and CSS rules. Investigating and resolving this issue will ensure the header adapts properly to all screen sizes. Additionally, testing on different browsers is required to confirm the fix works universally.",
        effort: 5,
        state: "in_progress",
        votes: 12,
        dueDate: "2024-12-01",
      },
    ]);
  }),
];

const server = setupServer(...handlers);
// establish API mocking before all tests
beforeAll(() => server.listen());
// reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time error scenarios)
afterEach(() => server.resetHandlers());
// clean up once the tests are done
afterAll(() => server.close());

it("should load tasks", async () => {
  render(
    <QueryClientProvider client={createQueryClient()}>
      <TaskLoader />
    </QueryClientProvider>,
  );

  await screen.findByRole("heading");
});
