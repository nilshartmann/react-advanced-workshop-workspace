import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_static/about/products")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/about/products"!</div>;
}
