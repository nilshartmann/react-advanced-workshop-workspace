import { createFileRoute, Outlet } from "@tanstack/react-router";

import PinnedTaskList from "../../components/PinnedTaskList.tsx";

export const Route = createFileRoute("/tasks")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className={"grid grid-cols-4 gap-x-12"}>
      <div className={"col-span-3"}>
        <Outlet />
      </div>
      <div>
        <PinnedTaskList />
      </div>
    </div>
  );
}
