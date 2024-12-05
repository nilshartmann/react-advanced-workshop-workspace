import {createFileRoute, getRouteApi, useParams} from "@tanstack/react-router";
import MainLayout from "../../../components/MainLayout.tsx";
import {PageTitle} from "../../../components/Heading.tsx";
import {useQueryClient, useSuspenseQuery} from "@tanstack/react-query";
import {taskApiKy} from "../../../task-api-ky.ts";
import {TaskSchema} from "../../../types.ts";
import TaskDetails from "../../../components/TaskDetails.tsx";
import {Suspense} from "react";
import {insightQueryOptions} from "../../../components/insight-query-options.ts";

export const Route = createFileRoute("/tasks/$taskId/")({
  component: TaskPageComponent,
});


//  Nicht in einer Komponente, sondern in einer Datei
//    auf Top-Level-Ebene:
// const MeineRoute = getRouteApi("/tasks/$taskId/");

function TaskPageComponent() {

  // in einer Komponente:
  // const taskId = useParams({
  //   from: "/tasks/$taskId/"
  // }).taskId;

  // useParams({
  //   from: "/user/"
  // })

  const taskId = Route.useParams().taskId

  const queryClient = useQueryClient();

  queryClient.ensureQueryData(
    insightQueryOptions(taskId)
  )


  return <MainLayout>
    { /* Ab React 19 ---v */ }
    {/*<title>{result.data.title}</title>*/}
    {/*<PageTitle>{result.data.title}</PageTitle>*/}

    <Suspense fallback={<h1>Task wird geladen....</h1>}>
      <TaskLoader taskId={taskId} />
    </Suspense>

  </MainLayout>;
}

type TaskLoaderProps = { taskId: string }
function TaskLoader({taskId}: TaskLoaderProps) {

  const result = useSuspenseQuery({
    queryKey: ["tasks", taskId],
    async queryFn() {
      const response = await taskApiKy.get(`api/tasks/${taskId}?slowdown=0`).json();
      return TaskSchema.parse(response);
    }
  })

  return <div>
    <PageTitle>{result.data.title}</PageTitle>
    <TaskDetails task={result.data} /></div>;


}
