import { H4 } from "./Heading.tsx";
import {queryOptions, useSuspenseQuery} from "@tanstack/react-query";
import {taskApiKy} from "../task-api-ky.ts";
import {InsightSchema} from "../types.ts";
import {data} from "autoprefixer";
import InsightCard from "./InsightCard.tsx";
import {insightQueryOptions} from "./insight-query-options.ts";



type InsightListProps = {
  taskId: string;
};
export default function InsightList({ taskId }: InsightListProps) {
  const result = useSuspenseQuery(insightQueryOptions(taskId))

  // result.data

  return (
    <div className={"border-1 mt-8 space-y-8 rounded-2xl bg-goldgray p-4"}>
      <H4>Insights</H4>
      {result.data.map(i => <InsightCard key={i.id} insight={i} />)}
    </div>
  );
}
