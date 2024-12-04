import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(static)/privacy/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/privacy/"!</div>;
}
