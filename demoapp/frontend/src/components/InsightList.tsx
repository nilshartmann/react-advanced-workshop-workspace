import { H4 } from "./Heading.tsx";

type InsightListProps = {
  taskId: string;
};
export default function InsightList({ taskId }: InsightListProps) {
  return (
    <div className={"border-1 mt-8 space-y-8 rounded-2xl bg-goldgray p-4"}>
      <H4>Insights</H4>
      <p>todo: insights fuer {taskId} laden und hier anzeigen!</p>
    </div>
  );
}
