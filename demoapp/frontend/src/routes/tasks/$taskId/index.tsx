import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import React from "react";

import { PageTitle } from "../../../components/Heading.tsx";
import { insightsQueryOptions } from "../../../components/insights-query.ts";
import TaskDetails from "../../../components/TaskDetails.tsx";
import { taskApiKy } from "../../../task-api-ky.ts";
import { TaskSchema } from "../../../types.ts";

export const Route = createFileRoute("/tasks/$taskId/")({
  component: RouteComponent,
});

function RouteComponent() {
  const taskId = Route.useParams().taskId;

  const queryClient = useQueryClient();
  queryClient.ensureQueryData(insightsQueryOptions(taskId));

  const taskQuery = useSuspenseQuery({
    queryKey: ["tasks", taskId],
    async queryFn() {
      const response = await taskApiKy.get(`api/tasks/${taskId}`).json();
      console.log("RESPONSE", response);
      return TaskSchema.parse(response);
    },
  });

  const task = taskQuery.data;

  return (
    <>
      <title>{task.title}</title>
      <PageTitle>
        {task.id}: {task.title}
      </PageTitle>
      <TaskDetails task={task} />
    </>
  );
}
