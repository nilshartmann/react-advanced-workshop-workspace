import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_static")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className={"max-w-4xl bg-gradient-to-br from-white to-goldgray p-8"}>
      <Outlet />
    </div>
  );
}
