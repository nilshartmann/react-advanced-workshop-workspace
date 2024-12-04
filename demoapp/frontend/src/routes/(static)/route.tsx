import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(static)")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className={"bg-gray-100"}>
      <Outlet />
    </div>
  );
}
