import {
  createRootRouteWithContext,
  Outlet,
  retainSearchParams,
} from "@tanstack/react-router";

import GlobalNavBar from "../components/GlobalNavBar.tsx";
import MainLayout from "../components/MainLayout.tsx";

type AppRouterContext = {
  showDashboard: boolean;
};

export const Route = createRootRouteWithContext<AppRouterContext>()({
  component: RootRoute,
  search: {
    middlewares: [retainSearchParams(true)],
  },
});

export default function RootRoute() {
  return (
    <div className={"flex min-h-svh flex-col font-inter"}>
      <GlobalNavBar />
      <MainLayout>
        <Outlet />
      </MainLayout>
    </div>
  );
}
