import { createFileRoute } from "@tanstack/react-router";

import TaskList from "./-TaskList.tsx";

export const Route = createFileRoute("/mock/")({
  component: TaskList,
});
