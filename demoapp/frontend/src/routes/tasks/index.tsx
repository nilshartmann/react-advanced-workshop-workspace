import { createFileRoute } from "@tanstack/react-router";
import { Task, TaskSchema } from "../../types.ts";
import { useQuery } from "@tanstack/react-query";
import { taskApiKy } from "../../task-api-ky.ts";
import { TaskSummaryCard } from "../../components/TaskSummaryCard.tsx";
import z from "zod";
import OrderByButtonBar from "../../components/OrderByButtonBar.tsx";
import {zodValidator} from "@tanstack/zod-adapter";
import Button from "../../components/Button.tsx";

const TaskSearchParams = z.object({
  // Beste aller Lösungen:
  // orderBy: z.enum(["dueDate", "state", "votes"]).default("dueDate")
  orderBy: z.enum(["dueDate", "state", "votes"]).catch("dueDate"),
});

export const Route = createFileRoute("/tasks/")({
  component: RouteComponent,
  validateSearch: zodValidator(TaskSearchParams)
  // validateSearch: TaskSearchParams.parse
});

function RouteComponent() {
  const orderBy = Route.useSearch({
    select: (state) => state.orderBy,
  });

  const result = useQuery({
    // enabled: false,
    queryKey: ["tasklist", orderBy],
    async queryFn() {
      // return fetch("http://localhost:3002/api/tasks")
      //   .then((r) => r.json());
      const result = await taskApiKy.get(`api/tasks?orderBy=${orderBy}&slowdown=2000`).json();

      const task = TaskSchema.array().parse(result);

      return task;
      // if (typeof result === "string") {
      //   result.toUpperCase();
      // }
    },
    // refetchInterval: 2000
    placeholderData(previousData, previousQuery) {
      console.log("prev data", previousData, previousQuery);
      return previousData || undefined;
    },
  });

  console.log("result.isPending", result.isPending);
  console.log("result.isFetching", result.isFetching);
  console.log("result.isLoading", result.isLoading);

  if (result.isPending) {
    return <h1>Bitte warten Sie...</h1>;
  }

  if (result.isError) {
    console.error(result.error);
    return <h1>Fehler beim Lesen der Daten</h1>;
  }



  if (result.isSuccess) {
    const tasks = result.data;
    return (
      <div>
        <OrderByButtonBar />
        <Button onClick={() => result.refetch()}>Reload</Button>
        {result.isFetching && <p>Tasks werden aktualisiert</p>}
        <div>
          {tasks.map((t) => (
            <TaskSummaryCard key={t.id} task={t} />
          ))}
        </div>
      </div>
    );
  }

  // const [tasks, setTasks] = useState<Task[]>([]);
  // useEffect(() => {
  //   // 1. Kein Cache
  //   //   1a. Nebenläufigkeit (2. Request "überholt" den 1. Request)
  //   //    (=> Requests werden nicht abgebrochen)
  //   // 2. Keine Fehlerbehandlung
  //   // 3. Kein Loading State
  //   // 4. Daten werden tendenziell "spät" geladen
  //
  //   fetch("http://localhost:3002/api/tasks")
  //     .then((r) => r.json())
  //     .then((d) => setTasks(d))
  //     .catch((err) => {
  //       // Toast.error("Geht nicht!")
  //       // oder: Error State
  //     });
  // }, []);

  // return <div>Hello "/tasks/"!</div>;
}
