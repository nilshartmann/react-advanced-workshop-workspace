/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from "@tanstack/react-router";

// Import Routes

import { Route as rootRoute } from "./routes/__root";
import { Route as StaticRouteImport } from "./routes/_static/route";
import { Route as IndexImport } from "./routes/index";
import { Route as TasksIndexImport } from "./routes/tasks/index";
import { Route as TasksTaskIdRouteImport } from "./routes/tasks/$taskId/route";
import { Route as StaticAboutRouteImport } from "./routes/_static/about/route";
import { Route as TasksTaskIdIndexImport } from "./routes/tasks/$taskId/index";
import { Route as StaticPrivacyIndexImport } from "./routes/_static/privacy/index";
import { Route as StaticAboutIndexImport } from "./routes/_static/about/index";
import { Route as TasksTaskIdResourcesImport } from "./routes/tasks/$taskId/resources";
import { Route as StaticAboutProductsImport } from "./routes/_static/about/products";

// Create Virtual Routes

const UserIndexLazyImport = createFileRoute("/user/")();

// Create/Update Routes

const StaticRouteRoute = StaticRouteImport.update({
  id: "/_static",
  getParentRoute: () => rootRoute,
} as any);

const IndexRoute = IndexImport.update({
  id: "/",
  path: "/",
  getParentRoute: () => rootRoute,
} as any);

const UserIndexLazyRoute = UserIndexLazyImport.update({
  id: "/user/",
  path: "/user/",
  getParentRoute: () => rootRoute,
} as any).lazy(() => import("./routes/user/index.lazy").then((d) => d.Route));

const TasksIndexRoute = TasksIndexImport.update({
  id: "/tasks/",
  path: "/tasks/",
  getParentRoute: () => rootRoute,
} as any);

const TasksTaskIdRouteRoute = TasksTaskIdRouteImport.update({
  id: "/tasks/$taskId",
  path: "/tasks/$taskId",
  getParentRoute: () => rootRoute,
} as any);

const StaticAboutRouteRoute = StaticAboutRouteImport.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => StaticRouteRoute,
} as any);

const TasksTaskIdIndexRoute = TasksTaskIdIndexImport.update({
  id: "/",
  path: "/",
  getParentRoute: () => TasksTaskIdRouteRoute,
} as any);

const StaticPrivacyIndexRoute = StaticPrivacyIndexImport.update({
  id: "/privacy/",
  path: "/privacy/",
  getParentRoute: () => StaticRouteRoute,
} as any);

const StaticAboutIndexRoute = StaticAboutIndexImport.update({
  id: "/",
  path: "/",
  getParentRoute: () => StaticAboutRouteRoute,
} as any);

const TasksTaskIdResourcesRoute = TasksTaskIdResourcesImport.update({
  id: "/resources",
  path: "/resources",
  getParentRoute: () => TasksTaskIdRouteRoute,
} as any);

const StaticAboutProductsRoute = StaticAboutProductsImport.update({
  id: "/products",
  path: "/products",
  getParentRoute: () => StaticAboutRouteRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      id: "/";
      path: "/";
      fullPath: "/";
      preLoaderRoute: typeof IndexImport;
      parentRoute: typeof rootRoute;
    };
    "/_static": {
      id: "/_static";
      path: "";
      fullPath: "";
      preLoaderRoute: typeof StaticRouteImport;
      parentRoute: typeof rootRoute;
    };
    "/_static/about": {
      id: "/_static/about";
      path: "/about";
      fullPath: "/about";
      preLoaderRoute: typeof StaticAboutRouteImport;
      parentRoute: typeof StaticRouteImport;
    };
    "/tasks/$taskId": {
      id: "/tasks/$taskId";
      path: "/tasks/$taskId";
      fullPath: "/tasks/$taskId";
      preLoaderRoute: typeof TasksTaskIdRouteImport;
      parentRoute: typeof rootRoute;
    };
    "/tasks/": {
      id: "/tasks/";
      path: "/tasks";
      fullPath: "/tasks";
      preLoaderRoute: typeof TasksIndexImport;
      parentRoute: typeof rootRoute;
    };
    "/user/": {
      id: "/user/";
      path: "/user";
      fullPath: "/user";
      preLoaderRoute: typeof UserIndexLazyImport;
      parentRoute: typeof rootRoute;
    };
    "/_static/about/products": {
      id: "/_static/about/products";
      path: "/products";
      fullPath: "/about/products";
      preLoaderRoute: typeof StaticAboutProductsImport;
      parentRoute: typeof StaticAboutRouteImport;
    };
    "/tasks/$taskId/resources": {
      id: "/tasks/$taskId/resources";
      path: "/resources";
      fullPath: "/tasks/$taskId/resources";
      preLoaderRoute: typeof TasksTaskIdResourcesImport;
      parentRoute: typeof TasksTaskIdRouteImport;
    };
    "/_static/about/": {
      id: "/_static/about/";
      path: "/";
      fullPath: "/about/";
      preLoaderRoute: typeof StaticAboutIndexImport;
      parentRoute: typeof StaticAboutRouteImport;
    };
    "/_static/privacy/": {
      id: "/_static/privacy/";
      path: "/privacy";
      fullPath: "/privacy";
      preLoaderRoute: typeof StaticPrivacyIndexImport;
      parentRoute: typeof StaticRouteImport;
    };
    "/tasks/$taskId/": {
      id: "/tasks/$taskId/";
      path: "/";
      fullPath: "/tasks/$taskId/";
      preLoaderRoute: typeof TasksTaskIdIndexImport;
      parentRoute: typeof TasksTaskIdRouteImport;
    };
  }
}

// Create and export the route tree

interface StaticAboutRouteRouteChildren {
  StaticAboutProductsRoute: typeof StaticAboutProductsRoute;
  StaticAboutIndexRoute: typeof StaticAboutIndexRoute;
}

const StaticAboutRouteRouteChildren: StaticAboutRouteRouteChildren = {
  StaticAboutProductsRoute: StaticAboutProductsRoute,
  StaticAboutIndexRoute: StaticAboutIndexRoute,
};

const StaticAboutRouteRouteWithChildren =
  StaticAboutRouteRoute._addFileChildren(StaticAboutRouteRouteChildren);

interface StaticRouteRouteChildren {
  StaticAboutRouteRoute: typeof StaticAboutRouteRouteWithChildren;
  StaticPrivacyIndexRoute: typeof StaticPrivacyIndexRoute;
}

const StaticRouteRouteChildren: StaticRouteRouteChildren = {
  StaticAboutRouteRoute: StaticAboutRouteRouteWithChildren,
  StaticPrivacyIndexRoute: StaticPrivacyIndexRoute,
};

const StaticRouteRouteWithChildren = StaticRouteRoute._addFileChildren(
  StaticRouteRouteChildren,
);

interface TasksTaskIdRouteRouteChildren {
  TasksTaskIdResourcesRoute: typeof TasksTaskIdResourcesRoute;
  TasksTaskIdIndexRoute: typeof TasksTaskIdIndexRoute;
}

const TasksTaskIdRouteRouteChildren: TasksTaskIdRouteRouteChildren = {
  TasksTaskIdResourcesRoute: TasksTaskIdResourcesRoute,
  TasksTaskIdIndexRoute: TasksTaskIdIndexRoute,
};

const TasksTaskIdRouteRouteWithChildren =
  TasksTaskIdRouteRoute._addFileChildren(TasksTaskIdRouteRouteChildren);

export interface FileRoutesByFullPath {
  "/": typeof IndexRoute;
  "": typeof StaticRouteRouteWithChildren;
  "/about": typeof StaticAboutRouteRouteWithChildren;
  "/tasks/$taskId": typeof TasksTaskIdRouteRouteWithChildren;
  "/tasks": typeof TasksIndexRoute;
  "/user": typeof UserIndexLazyRoute;
  "/about/products": typeof StaticAboutProductsRoute;
  "/tasks/$taskId/resources": typeof TasksTaskIdResourcesRoute;
  "/about/": typeof StaticAboutIndexRoute;
  "/privacy": typeof StaticPrivacyIndexRoute;
  "/tasks/$taskId/": typeof TasksTaskIdIndexRoute;
}

export interface FileRoutesByTo {
  "/": typeof IndexRoute;
  "": typeof StaticRouteRouteWithChildren;
  "/tasks": typeof TasksIndexRoute;
  "/user": typeof UserIndexLazyRoute;
  "/about/products": typeof StaticAboutProductsRoute;
  "/tasks/$taskId/resources": typeof TasksTaskIdResourcesRoute;
  "/about": typeof StaticAboutIndexRoute;
  "/privacy": typeof StaticPrivacyIndexRoute;
  "/tasks/$taskId": typeof TasksTaskIdIndexRoute;
}

export interface FileRoutesById {
  __root__: typeof rootRoute;
  "/": typeof IndexRoute;
  "/_static": typeof StaticRouteRouteWithChildren;
  "/_static/about": typeof StaticAboutRouteRouteWithChildren;
  "/tasks/$taskId": typeof TasksTaskIdRouteRouteWithChildren;
  "/tasks/": typeof TasksIndexRoute;
  "/user/": typeof UserIndexLazyRoute;
  "/_static/about/products": typeof StaticAboutProductsRoute;
  "/tasks/$taskId/resources": typeof TasksTaskIdResourcesRoute;
  "/_static/about/": typeof StaticAboutIndexRoute;
  "/_static/privacy/": typeof StaticPrivacyIndexRoute;
  "/tasks/$taskId/": typeof TasksTaskIdIndexRoute;
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath;
  fullPaths:
    | "/"
    | ""
    | "/about"
    | "/tasks/$taskId"
    | "/tasks"
    | "/user"
    | "/about/products"
    | "/tasks/$taskId/resources"
    | "/about/"
    | "/privacy"
    | "/tasks/$taskId/";
  fileRoutesByTo: FileRoutesByTo;
  to:
    | "/"
    | ""
    | "/tasks"
    | "/user"
    | "/about/products"
    | "/tasks/$taskId/resources"
    | "/about"
    | "/privacy"
    | "/tasks/$taskId";
  id:
    | "__root__"
    | "/"
    | "/_static"
    | "/_static/about"
    | "/tasks/$taskId"
    | "/tasks/"
    | "/user/"
    | "/_static/about/products"
    | "/tasks/$taskId/resources"
    | "/_static/about/"
    | "/_static/privacy/"
    | "/tasks/$taskId/";
  fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute;
  StaticRouteRoute: typeof StaticRouteRouteWithChildren;
  TasksTaskIdRouteRoute: typeof TasksTaskIdRouteRouteWithChildren;
  TasksIndexRoute: typeof TasksIndexRoute;
  UserIndexLazyRoute: typeof UserIndexLazyRoute;
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  StaticRouteRoute: StaticRouteRouteWithChildren,
  TasksTaskIdRouteRoute: TasksTaskIdRouteRouteWithChildren,
  TasksIndexRoute: TasksIndexRoute,
  UserIndexLazyRoute: UserIndexLazyRoute,
};

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>();

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_static",
        "/tasks/$taskId",
        "/tasks/",
        "/user/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_static": {
      "filePath": "_static/route.tsx",
      "children": [
        "/_static/about",
        "/_static/privacy/"
      ]
    },
    "/_static/about": {
      "filePath": "_static/about/route.tsx",
      "parent": "/_static",
      "children": [
        "/_static/about/products",
        "/_static/about/"
      ]
    },
    "/tasks/$taskId": {
      "filePath": "tasks/$taskId/route.tsx",
      "children": [
        "/tasks/$taskId/resources",
        "/tasks/$taskId/"
      ]
    },
    "/tasks/": {
      "filePath": "tasks/index.tsx"
    },
    "/user/": {
      "filePath": "user/index.lazy.tsx"
    },
    "/_static/about/products": {
      "filePath": "_static/about/products.tsx",
      "parent": "/_static/about"
    },
    "/tasks/$taskId/resources": {
      "filePath": "tasks/$taskId/resources.tsx",
      "parent": "/tasks/$taskId"
    },
    "/_static/about/": {
      "filePath": "_static/about/index.tsx",
      "parent": "/_static/about"
    },
    "/_static/privacy/": {
      "filePath": "_static/privacy/index.tsx",
      "parent": "/_static"
    },
    "/tasks/$taskId/": {
      "filePath": "tasks/$taskId/index.tsx",
      "parent": "/tasks/$taskId"
    }
  }
}
ROUTE_MANIFEST_END */
