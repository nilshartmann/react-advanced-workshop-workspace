import { twMerge } from "tailwind-merge";

type ArrowButtonProps = {
  dir: "up" | "down";
  onClick(): void;
};

export default function ArrowButton({ dir, onClick }: ArrowButtonProps) {
  const arrowClassname = twMerge(
    dir === "down" ? "fa-angles-up" : "fa-angles-down",
    "fa-solid cursor-pointer hover:text-red",
  );

  return (
    <button onClick={() => onClick()}>
      <i className={arrowClassname}></i>
    </button>
  );
}
