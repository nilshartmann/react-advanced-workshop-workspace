import { Link } from "@tanstack/react-router";
import { useState } from "react";

import { Task } from "../types.ts";
import ArrowButton from "./ArrowButton.tsx";
import Card from "./Card.tsx";
import TaskStateBadge from "./TaskStateBadge.tsx";
import TaskVotesBadge from "./TaskVotesBadge.tsx";

type TaskSummaryCardProps = {
  task: Task;
};

export function TaskSummaryCard({ task }: TaskSummaryCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className={isOpen ? "" : "h-20"}>
      <div className={"flex items-center justify-between"}>
        <Link to={"/tasks/$taskId"} params={{ taskId: task.id }}>
          <h3
            className={
              "font-inter text-lg font-semibold leading-none text-black hover:text-red hover:underline"
            }
          >
            {task.title}
          </h3>
        </Link>
        <div className={"flex items-center space-x-4"}>
          <TaskStateBadge state={task.state} />
          <TaskVotesBadge votes={task.votes} />
          <ArrowButton
            dir={isOpen ? "down" : "up"}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>
      {isOpen && (
        <>
          <div>Effort: {task.effort}</div>
          <div>Due: {task.dueDate}</div>
        </>
      )}
    </Card>
  );
}
