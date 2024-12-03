import { ReactNode } from "react";

type FormFieldErrorProps = {
  children?: ReactNode;
};
export default function FormFieldError({ children }: FormFieldErrorProps) {
  if (!children) {
    return null;
  }

  return <div className={"text-sm text-red"}>{children}</div>;
}
