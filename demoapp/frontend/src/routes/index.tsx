import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad() {
    return redirect({
      to: "/tasks",
    });
  },
  // component: RouteComponent,
});

// function RouteComponent() {
//   return <div>Hello "/"!</div>;
// }
