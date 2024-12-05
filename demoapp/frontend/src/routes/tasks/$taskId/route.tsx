import { createFileRoute, Outlet } from "@tanstack/react-router";
import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { insightQueryOptions } from "../../../components/insight-query-options.ts";
import MainLayout from "../../../components/MainLayout.tsx";
import { taskApiKy } from "../../../task-api-ky.ts";
import { TaskSchema } from "../../../types.ts";
import { PageTitle } from "../../../components/Heading.tsx";
import TaskDetails from "../../../components/TaskDetails.tsx";
import { Suspense } from "react";
import { resourceQueryOptions } from "../../../components/resources-query.ts";

export const Route = createFileRoute("/tasks/$taskId")({
  component: TaskPageLayoutComponent,
  loader({ params, context }) {
    console.log("loading resources", params.taskId);
    context.queryClient.ensureQueryData(resourceQueryOptions(params.taskId));
  },
});

//  Nicht in einer Komponente, sondern in einer Datei
//    auf Top-Level-Ebene:
// const MeineRoute = getRouteApi("/tasks/$taskId/");

function TaskPageLayoutComponent() {
  // in einer Komponente:
  // const taskId = useParams({
  //   from: "/tasks/$taskId/"
  // }).taskId;

  // useParams({
  //   from: "/user/"
  // })

  const taskId = Route.useParams().taskId;

  const queryClient = useQueryClient();

  queryClient.ensureQueryData(insightQueryOptions(taskId));

  return (
    <MainLayout>
      {/* Ab React 19 ---v */}
      {/*<title>{result.data.title}</title>*/}
      {/*<PageTitle>{result.data.title}</PageTitle>*/}

      <Suspense fallback={<h1>Task wird geladen....</h1>}>
        <TaskLoader taskId={taskId} />
      </Suspense>
    </MainLayout>
  );
}

type TaskLoaderProps = { taskId: string };

function TaskLoader({ taskId }: TaskLoaderProps) {
  const result = useSuspenseQuery({
    queryKey: ["tasks", taskId],
    async queryFn() {
      const response = await taskApiKy.get(`api/tasks/${taskId}`).json();
      return TaskSchema.parse(response);
    },
  });

  return (
    <div>
      <PageTitle>{result.data.title}</PageTitle>
      <Outlet />
      <TaskDetails task={result.data} />
    </div>
  );
}
