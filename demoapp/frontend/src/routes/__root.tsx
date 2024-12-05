import {createRootRoute, createRootRouteWithContext, Outlet, retainSearchParams} from "@tanstack/react-router";
import * as React from "react";
import MainLayout from "../components/MainLayout.tsx";
import GlobalNavBar from "../components/GlobalNavBar.tsx";
import {QueryClient} from "@tanstack/react-query";

// export const Route = createRootRoute({
export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
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
