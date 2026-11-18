import React from "react";
import { createRoot } from "react-dom/client";
import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  RouterProvider,
} from "@tanstack/react-router";

import { NotFound } from "@/components/NotFound";
import Home from "@/routes/index";
import Inscricao from "@/routes/inscricao";
import Submissao from "@/routes/submissao";
import Privacidade from "@/routes/privacidade";
import "@/index.css";

const rootRoute = createRootRoute({
  component: () => <Outlet />,
  notFoundComponent: () => <NotFound>Esta página não existe.</NotFound>,
});

const routeTree = rootRoute.addChildren([
  createRoute({ getParentRoute: () => rootRoute, path: "/", component: Home }),
  createRoute({ getParentRoute: () => rootRoute, path: "/inscricao", component: Inscricao }),
  createRoute({ getParentRoute: () => rootRoute, path: "/submissao", component: Submissao }),
  createRoute({ getParentRoute: () => rootRoute, path: "/privacidade", component: Privacidade }),
]);

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  scrollRestoration: true,
});

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
