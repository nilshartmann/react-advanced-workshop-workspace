import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(static)/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Hello "/about-Layout"!
      <Outlet />
    </div>
  );
}
