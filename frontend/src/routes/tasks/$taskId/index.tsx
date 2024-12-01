import { createFileRoute } from "@tanstack/react-router";
import React from "react";

import DueDateBadge from "../../../components/DueDateBadge.tsx";
import { H4, PageTitle } from "../../../components/Heading.tsx";
import InsightCard from "../../../components/InsightCard.tsx";
import TaskStateBadge from "../../../components/TaskStateBadge.tsx";
import TaskVotesBadge from "../../../components/TaskVotesBadge.tsx";
import { allInsights, tasks } from "../../../dummy.ts";
import { Insight } from "../../../types.ts";

export const Route = createFileRoute("/tasks/$taskId/")({
  component: RouteComponent,
});

function RouteComponent() {
  const taskId = Route.useParams().taskId;
  const task = tasks.find((t) => t.id == taskId);
  if (!task) {
    return <div>not found</div>;
  }

  return (
    <>
      <title>{task.title}</title>
      <PageTitle>
        {task.id}: {task.title}
      </PageTitle>
      <div className={"flex gap-x-6"}>
        <section className={"w-2/3 flex-col space-y-4"}>
          <H4>Description</H4>
          <p className={"leading-8"}>{task.description}</p>

          <div className={"flex justify-between space-x-4"}>
            <TaskStateBadge state={task.state} />
            <TaskVotesBadge
              votes={task.votes}
              onClick={() => console.log("jo")}
            />
            <div
              className={
                "flex items-center space-x-2 rounded-md border-2 border-blue-200 bg-blue-100 p-2 text-blue-600"
              }
            >
              <i className="fa-regular fa-clock"></i>
              <span>{task.effort} hours</span>
            </div>
            <DueDateBadge dueDate={task.dueDate} />
          </div>
        </section>
        <section className={"w-1/3"}>
          <InsightList insights={allInsights} />
        </section>
      </div>
    </>
  );
}

type InsightListProps = {
  insights: Insight[];
};
function InsightList({ insights }: InsightListProps) {
  return (
    <div className={"border-1 w-full space-y-8 rounded-2xl bg-goldgray p-4"}>
      <H4>Insights</H4>
      {insights.map((i) => (
        <InsightCard key={i.id} insight={i} />
      ))}
    </div>
  );
}
