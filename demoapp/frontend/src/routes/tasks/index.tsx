import { createFileRoute } from "@tanstack/react-router";
import { Task } from "../../types.ts";
import { useQuery } from "@tanstack/react-query";
import {taskApiKy} from "../../task-api-ky.ts";
import {TaskSummaryCard} from "../../components/TaskSummaryCard.tsx";

export const Route = createFileRoute("/tasks/")({
  component: RouteComponent,
});

function RouteComponent() {
  const result = useQuery({
    queryKey: ["tasklist"],
    async queryFn() {
      // return fetch("http://localhost:3002/api/tasks")
      //   .then((r) => r.json());
      const result = await taskApiKy.get<Task[]>("api/tasks").json()
      return result;
      // if (typeof result === "string") {
      //   result.toUpperCase();
      // }
    },
  });

  if (result.isFetching) {
    return <h1>Bitte warten Sie...</h1>
  }

  if (result.isError) {
    console.error(result.error);
    return <h1>Fehler beim Lesen der Daten</h1>
  }

  if (result.isSuccess) {
    const tasks = result.data;
    return <div>
      {tasks.map(t => <TaskSummaryCard
      key={t.id}
        task={t}/>) }
    </div>
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
