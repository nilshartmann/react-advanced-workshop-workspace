import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad() {
    return redirect({ to: "/tasks" });
  },

  // component: () => <Navigate to={"/tasks"} />,
});
