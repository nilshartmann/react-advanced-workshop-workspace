/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from "@tanstack/react-router";

// Import Routes

import { Route as rootRoute } from "./routes/__root";
import { Route as staticRouteImport } from "./routes/(static)/route";
import { Route as IndexImport } from "./routes/index";
import { Route as TasksIndexImport } from "./routes/tasks/index";
import { Route as staticAboutRouteImport } from "./routes/(static)/about/route";
import { Route as staticPrivacyIndexImport } from "./routes/(static)/privacy/index";
import { Route as staticAboutIndexImport } from "./routes/(static)/about/index";
import { Route as staticAboutProductsImport } from "./routes/(static)/about/products";

// Create Virtual Routes

const UserIndexLazyImport = createFileRoute("/user/")();

// Create/Update Routes

const staticRouteRoute = staticRouteImport.update({
  id: "/(static)",
  getParentRoute: () => IndexRoute,
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

const staticAboutRouteRoute = staticAboutRouteImport.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => staticRouteRoute,
} as any);

const staticPrivacyIndexRoute = staticPrivacyIndexImport.update({
  id: "/privacy/",
  path: "/privacy/",
  getParentRoute: () => staticRouteRoute,
} as any);

const staticAboutIndexRoute = staticAboutIndexImport.update({
  id: "/",
  path: "/",
  getParentRoute: () => staticAboutRouteRoute,
} as any);

const staticAboutProductsRoute = staticAboutProductsImport.update({
  id: "/products",
  path: "/products",
  getParentRoute: () => staticAboutRouteRoute,
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
    "/(static)": {
      id: "/(static)";
      path: "/";
      fullPath: "/";
      preLoaderRoute: typeof staticRouteImport;
      parentRoute: typeof IndexRoute;
    };
    "/(static)/about": {
      id: "/(static)/about";
      path: "/about";
      fullPath: "/about";
      preLoaderRoute: typeof staticAboutRouteImport;
      parentRoute: typeof staticRouteImport;
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
    "/(static)/about/products": {
      id: "/(static)/about/products";
      path: "/products";
      fullPath: "/about/products";
      preLoaderRoute: typeof staticAboutProductsImport;
      parentRoute: typeof staticAboutRouteImport;
    };
    "/(static)/about/": {
      id: "/(static)/about/";
      path: "/";
      fullPath: "/about/";
      preLoaderRoute: typeof staticAboutIndexImport;
      parentRoute: typeof staticAboutRouteImport;
    };
    "/(static)/privacy/": {
      id: "/(static)/privacy/";
      path: "/privacy";
      fullPath: "/privacy";
      preLoaderRoute: typeof staticPrivacyIndexImport;
      parentRoute: typeof staticRouteImport;
    };
  }
}

// Create and export the route tree

interface staticAboutRouteRouteChildren {
  staticAboutProductsRoute: typeof staticAboutProductsRoute;
  staticAboutIndexRoute: typeof staticAboutIndexRoute;
}

const staticAboutRouteRouteChildren: staticAboutRouteRouteChildren = {
  staticAboutProductsRoute: staticAboutProductsRoute,
  staticAboutIndexRoute: staticAboutIndexRoute,
};

const staticAboutRouteRouteWithChildren =
  staticAboutRouteRoute._addFileChildren(staticAboutRouteRouteChildren);

interface staticRouteRouteChildren {
  staticAboutRouteRoute: typeof staticAboutRouteRouteWithChildren;
  staticPrivacyIndexRoute: typeof staticPrivacyIndexRoute;
}

const staticRouteRouteChildren: staticRouteRouteChildren = {
  staticAboutRouteRoute: staticAboutRouteRouteWithChildren,
  staticPrivacyIndexRoute: staticPrivacyIndexRoute,
};

const staticRouteRouteWithChildren = staticRouteRoute._addFileChildren(
  staticRouteRouteChildren,
);

interface IndexRouteChildren {
  staticRouteRoute: typeof staticRouteRouteWithChildren;
}

const IndexRouteChildren: IndexRouteChildren = {
  staticRouteRoute: staticRouteRouteWithChildren,
};

const IndexRouteWithChildren = IndexRoute._addFileChildren(IndexRouteChildren);

export interface FileRoutesByFullPath {
  "/": typeof staticRouteRouteWithChildren;
  "/about": typeof staticAboutRouteRouteWithChildren;
  "/tasks": typeof TasksIndexRoute;
  "/user": typeof UserIndexLazyRoute;
  "/about/products": typeof staticAboutProductsRoute;
  "/about/": typeof staticAboutIndexRoute;
  "/privacy": typeof staticPrivacyIndexRoute;
}

export interface FileRoutesByTo {
  "/": typeof staticRouteRouteWithChildren;
  "/tasks": typeof TasksIndexRoute;
  "/user": typeof UserIndexLazyRoute;
  "/about/products": typeof staticAboutProductsRoute;
  "/about": typeof staticAboutIndexRoute;
  "/privacy": typeof staticPrivacyIndexRoute;
}

export interface FileRoutesById {
  __root__: typeof rootRoute;
  "/": typeof IndexRouteWithChildren;
  "/(static)": typeof staticRouteRouteWithChildren;
  "/(static)/about": typeof staticAboutRouteRouteWithChildren;
  "/tasks/": typeof TasksIndexRoute;
  "/user/": typeof UserIndexLazyRoute;
  "/(static)/about/products": typeof staticAboutProductsRoute;
  "/(static)/about/": typeof staticAboutIndexRoute;
  "/(static)/privacy/": typeof staticPrivacyIndexRoute;
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath;
  fullPaths:
    | "/"
    | "/about"
    | "/tasks"
    | "/user"
    | "/about/products"
    | "/about/"
    | "/privacy";
  fileRoutesByTo: FileRoutesByTo;
  to: "/" | "/tasks" | "/user" | "/about/products" | "/about" | "/privacy";
  id:
    | "__root__"
    | "/"
    | "/(static)"
    | "/(static)/about"
    | "/tasks/"
    | "/user/"
    | "/(static)/about/products"
    | "/(static)/about/"
    | "/(static)/privacy/";
  fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRouteWithChildren;
  TasksIndexRoute: typeof TasksIndexRoute;
  UserIndexLazyRoute: typeof UserIndexLazyRoute;
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRouteWithChildren,
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
        "/tasks/",
        "/user/"
      ]
    },
    "/": {
      "filePath": "index.tsx",
      "children": [
        "/(static)"
      ]
    },
    "/(static)": {
      "filePath": "(static)/route.tsx",
      "parent": "/",
      "children": [
        "/(static)/about",
        "/(static)/privacy/"
      ]
    },
    "/(static)/about": {
      "filePath": "(static)/about/route.tsx",
      "parent": "/(static)",
      "children": [
        "/(static)/about/products",
        "/(static)/about/"
      ]
    },
    "/tasks/": {
      "filePath": "tasks/index.tsx"
    },
    "/user/": {
      "filePath": "user/index.lazy.tsx"
    },
    "/(static)/about/products": {
      "filePath": "(static)/about/products.tsx",
      "parent": "/(static)/about"
    },
    "/(static)/about/": {
      "filePath": "(static)/about/index.tsx",
      "parent": "/(static)/about"
    },
    "/(static)/privacy/": {
      "filePath": "(static)/privacy/index.tsx",
      "parent": "/(static)"
    }
  }
}
ROUTE_MANIFEST_END */
