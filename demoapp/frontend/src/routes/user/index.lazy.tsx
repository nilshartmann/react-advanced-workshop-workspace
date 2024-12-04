import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/user/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/user/"!</div>;
}
