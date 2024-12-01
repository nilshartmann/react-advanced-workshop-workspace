import Card from "./Card.tsx";
import { H4 } from "./Heading.tsx";
import TaskStateBadge from "./TaskStateBadge.tsx";
import TaskVotesBadge from "./TaskVotesBadge.tsx";

export default function PinnedTaskList() {
  return (
    <div className={"space-y-4"}>
      <H4 className={"text-red"}>Pinned Tasks</H4>

      <Card>
        <H4>Refactor Backend</H4>
        <div className={"flex justify-between"}>
          <TaskStateBadge state={"in_progress"} />
          <TaskVotesBadge votes={4} />
        </div>
      </Card>
    </div>
  );
}
