import { useSuspenseQuery } from "@tanstack/react-query";
import { useSearch } from "@tanstack/react-router";
import { Suspense } from "react";

import { taskApiKy } from "../task-api-ky.ts";
import { TaskSchema } from "../types.ts";
import Card from "./Card.tsx";
import { H4 } from "./Heading.tsx";
import TaskStateBadge from "./TaskStateBadge.tsx";
import TaskVotesBadge from "./TaskVotesBadge.tsx";

export default function PinnedTaskList() {
  const pinnedTaskIds = useSearch({
    from: "/tasks",
    select: (state) => state.pinnedTaskIds,
  });

  return (
    <div className={"space-y-4"}>
      <Suspense fallback={"Pinned Tasks loading..."}>
        {(pinnedTaskIds || []).map((id) => (
          <PinnedTask key={id} taskId={id} />
        ))}
      </Suspense>
    </div>
  );
}

type PinnedTaskId = {
  taskId: string;
};
function PinnedTask({ taskId }: PinnedTaskId) {
  // todo: mit Query in /tasks/$taskId zusammenlegen
  const result = useSuspenseQuery({
    queryKey: ["tasks", taskId],
    async queryFn() {
      const response = await taskApiKy.get(`api/tasks/${taskId}`).json();
      return TaskSchema.parse(response);
    },
  });

  const task = result.data;

  return (
    <Card>
      <H4>{task.title}</H4>
      <div className={"flex justify-between"}>
        <TaskStateBadge state={task.state} />
        <TaskVotesBadge votes={task.votes} taskId={task.id} />
      </div>
    </Card>
  );
}
