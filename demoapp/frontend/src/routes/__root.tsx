import { createRootRoute } from "@tanstack/react-router";
import * as React from "react";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className={"flex min-h-svh flex-col font-inter"}>Hello "__root"!</div>
  );
}
