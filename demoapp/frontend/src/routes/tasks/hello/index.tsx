import { useQuery } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";

import { taskApiKy } from "../../../task-api-ky.ts";
import { TaskSchema } from "../../../types.ts";

export const Route = createFileRoute("/tasks/hello/")({
  component: RouteComponent,
});

function RouteComponent() {
  const result = useQuery({
    queryKey: ["tasks", "state"],
    async queryFn() {
      const tasks = await taskApiKy
        .get(`api/tasks?orderBy=dueDate&slowdown=1200`)
        .json();

      return TaskSchema.array().parse(tasks);
    },
    placeholderData(previousData, previousQuery) {
      console.log("prev data", previousData, previousQuery);
      return previousData || undefined;
    },
  });

  const x = {
    isPending: result.isPending,
    // Is true whenever the first fetch for a query is in-flight
    // Is the same as isFetching && isPending
    isLoading: result.isLoading,
    isFetching: result.isFetching,
    isPlaceholderData: result.isPlaceholderData,
    data: result.data,
  };

  console.dir(x);

  return <Link to={"/tasks"}>Tasks</Link>;
}
