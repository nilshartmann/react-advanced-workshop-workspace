import { useSuspenseQuery } from "@tanstack/react-query";

import { H4 } from "./Heading.tsx";
import InsightCard from "./InsightCard.tsx";
import { insightsQueryOptions } from "./insights-query.ts";

type InsightListProps = {
  taskId: string;
};
export default function InsightList({ taskId }: InsightListProps) {
  // todo: Insights laden!

  const result = useSuspenseQuery(insightsQueryOptions(taskId));

  const insights = result.data;

  return (
    <div className={"border-1 w-full space-y-8 rounded-2xl bg-goldgray p-4"}>
      <H4>Insights</H4>
      <p>todo: insights hier anzeigen!</p>
      {insights.map((i) => (
        <InsightCard key={i.id} insight={i} />
      ))}
    </div>
  );
}
