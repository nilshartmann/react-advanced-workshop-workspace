import {createFileRoute, getRouteApi, Link, useParams} from "@tanstack/react-router";
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

function TaskPageComponent() {
  return <Link
    className={"hover:underline font-bold bg-gray-100"}
    from={"/tasks/$taskId/"}
    to={"./resources"}>
    Show Task Resources
  </Link>
}
