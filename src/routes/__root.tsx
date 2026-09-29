import { createRootRoute } from "@tanstack/react-router";
import { NotFoundPage } from "../app/NotFoundPage";
import { RouteErrorPage } from "../app/RouteErrorPage";
import { RootLayout } from "../app/RootLayout";

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFoundPage,
  errorComponent: RouteErrorPage,
});
