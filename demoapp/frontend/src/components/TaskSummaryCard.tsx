import { Task } from "../types.ts";
import Card from "./Card.tsx";
import TaskStateBadge from "./TaskStateBadge.tsx";
import TaskVotesBadge from "./TaskVotesBadge.tsx";

type TaskSummaryCardProps = {
  task: Task;
};

export function TaskSummaryCard({ task }: TaskSummaryCardProps) {
  return (
    <Card className={"h-20"}>
      <div className={"flex items-center justify-between"}>
        <h3
          className={
            "font-inter text-lg font-semibold leading-none text-black hover:text-red hover:underline"
          }
        >
          {task.title}
        </h3>
        <div className={"flex items-center space-x-4"}>
          <TaskStateBadge state={task.state} />
          <TaskVotesBadge votes={task.votes} taskId={task.id} />
        </div>
      </div>
    </Card>
  );
}
