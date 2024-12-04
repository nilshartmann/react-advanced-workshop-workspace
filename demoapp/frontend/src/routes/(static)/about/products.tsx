import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(static)/about/products")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/about/products"!</div>;
}
