import { createFileRoute } from "@tanstack/react-router";
import {useQuery, useSuspenseQuery} from "@tanstack/react-query";
import {resourceQueryOptions} from "../../../components/resources-query.ts";
import {Suspense, use} from "react";

export const Route = createFileRoute("/tasks/$taskId/resources")({
  component: RouteComponent,
});

function RouteComponent() {
	return <Suspense fallback={"Resources werden geladen"}>
		<ResourcesComponent />
	</Suspense>
}

function ResourcesComponent() {
	const taskId = Route.useParams().taskId;
	const result = useQuery(resourceQueryOptions(taskId))

	const data = use(result.promise)

	// ....
  return <div>
		{data.map(r => <div key={r.id}>
			{r.title}
		</div>)}

	</div>;
}
