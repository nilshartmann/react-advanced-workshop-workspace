import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  className,
  children,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        "inline-flex transform items-center justify-center rounded px-4 py-2 font-barlow font-normal text-white transition-all duration-500 ease-in-out hover:cursor-pointer",
        "mb-2 mt-2 bg-orange_2 p-2 hover:bg-orange_2-500",
        disabled &&
          "cursor-default bg-orange_2-200 hover:cursor-default hover:bg-orange_2-200",
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
