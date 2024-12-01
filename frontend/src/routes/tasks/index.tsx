import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import ky from "ky";

import { PageTitle } from "../../components/Heading.tsx";
import OrderByButtonBar from "../../components/OrderByButtonBar.tsx";
import PlaceholderCard from "../../components/PlaceholderCard.tsx";
import { TaskSummaryCard } from "../../components/TaskSummaryCard.tsx";
import { TaskSchema } from "../../types.ts";

export const Route = createFileRoute("/tasks/")({
  component: TaskListRouteComponent,
});

function TaskListRouteComponent() {
  const result = useQuery({
    queryKey: ["tasks"],
    async queryFn() {
      const tasks = await ky.get("api/tasks?slowdown=200").json();

      return TaskSchema.array().parse(tasks);
    },
  });

  return (
    <>
      <header className={"flex items-center justify-between"}>
        <PageTitle>Task Overview</PageTitle>
        <OrderByButtonBar />
      </header>
      <div className={"space-y-8"}>
        {result.isPending && (
          <>
            {Array(3)
              .fill("")
              .map((_, ix) => (
                <PlaceholderCard key={ix} />
              ))}
          </>
        )}
        {result.isSuccess &&
          result.data.map((t) => <TaskSummaryCard key={t.id} task={t} />)}
      </div>
    </>
  );
}
