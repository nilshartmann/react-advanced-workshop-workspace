import {createRootRoute, Outlet, retainSearchParams} from "@tanstack/react-router";
import * as React from "react";
import MainLayout from "../components/MainLayout.tsx";
import GlobalNavBar from "../components/GlobalNavBar.tsx";

export const Route = createRootRoute({
  component: RootComponent,
  search: {
    middlewares: [retainSearchParams(true)]
  }
});

function RootComponent() {
  return (
    <div className={"flex min-h-svh flex-col font-inter"}>
      <GlobalNavBar />
      <MainLayout>
        <Outlet />
      </MainLayout>
    </div>
  );

  // sudo corepack enable pnpm
}
