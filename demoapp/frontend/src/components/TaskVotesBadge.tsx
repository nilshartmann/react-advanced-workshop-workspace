import { twMerge } from "tailwind-merge";

type TaskVotesBadgeProps = {
  votes: number;
  taskId?: string;
};

export default function TaskVotesBadge({ votes, taskId }: TaskVotesBadgeProps) {
  const className = twMerge(
    "inline-flex rounded-lg bg-goldgray p-2 text-yellow-800",
    !!taskId &&
      "cursor-pointer hover:bg-orange_2-200 hover:text-yellow-900 hover:outline hover:outline-1 hover:outline-yellow-800",
  );

  const handleClick = () => {
    // todo: Vote im  Backend hochzählen
  };

  return (
    <button onClick={handleClick} className={className}>
      {votes} Votes
    </button>
  );
}
