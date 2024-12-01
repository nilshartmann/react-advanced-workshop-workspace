import { twMerge } from "tailwind-merge";

type TaskVotesBadgeProps = {
  votes: number;
  onClick?: () => void;
};

export default function TaskVotesBadge({
  votes,
  onClick,
}: TaskVotesBadgeProps) {
  const className = twMerge(
    "inline-flex rounded-lg bg-goldgray p-2 text-yellow-800",
    !!onClick &&
      "cursor-pointer hover:bg-orange_2-200 hover:text-yellow-900 hover:outline hover:outline-1 hover:outline-yellow-800",
  );

  return <div className={className}>{votes} Votes</div>;
}
