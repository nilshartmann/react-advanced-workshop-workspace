import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type CheckButtonProps = {
  checked: boolean;
  children: ReactNode;
  disabled?: boolean;
};

export function CheckButton({ checked, children, disabled }: CheckButtonProps) {
  return (
    <span
      className={twMerge(
        "inline-flex transform items-center justify-center rounded px-4 py-2 font-barlow font-normal text-white transition-all duration-500 ease-in-out hover:cursor-pointer hover:underline",
        "mb-2 mt-2 bg-orange_2 p-2 hover:bg-orange_2-500",
        checked &&
          "bg-green hover:cursor-default hover:bg-green hover:no-underline",
        disabled &&
          "cursor-default bg-orange_2-200 hover:cursor-default hover:bg-orange_2-200",
      )}
    >
      <CheckLabel checked={checked} enabled={!disabled}>
        {children}
      </CheckLabel>
    </span>
  );
}

type CheckLabelProps = {
  children: ReactNode;
  checked: boolean;
  enabled?: boolean;
  style?: "circle" | "square";
};

function CheckLabel({
  children,
  checked,
  enabled,
  style = "circle",
}: CheckLabelProps) {
  const iconClassName = twMerge(
    "fa-regular",
    checked
      ? style === "circle"
        ? "fa-circle-check"
        : "fa-square-check"
      : style === "circle"
        ? "fa-circle"
        : "fa-square",
    checked && !enabled
      ? "underline-none cursor-default text-white no-underline hover:no-underline"
      : "text-gray-200",
  );

  const labelClassName = twMerge(
    "ms-2",
    checked ? "hover:no-underline" : "hover:underline",
  );

  return (
    <>
      <i className={iconClassName}></i>
      <span className={labelClassName}>{children}</span>
    </>
  );
}
