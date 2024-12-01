import { zodResolver } from "@hookform/resolvers/zod";
import { InputHTMLAttributes } from "react";
import { useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import z from "zod";

import { InsightSchema } from "../types.ts";
import Button from "./Button.tsx";

const NewInsightSchema = InsightSchema.omit({ id: true });

type NewInsight = z.infer<typeof NewInsightSchema>;

export default function InsightForm() {
  const form = useForm<NewInsight>({
    resolver: zodResolver(NewInsightSchema),
  });

  function onSubmit(data: NewInsight) {
    console.log("Jawohl", data);
  }

  console.log("err", form.formState.errors);

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className={""}>
      <div className={"grid-col grid space-y-4"}>
        <TextInput type={"author"} {...form.register("author")} />
        <TextInput type={"text"} {...form.register("text")} />
        <TextInput
          type={"number"}
          {...form.register("confidence", { valueAsNumber: true })}
        />
        {form.formState.errors.confidence && (
          <div>{form.formState.errors.confidence.message}</div>
        )}

        <Button type={"submit"}>Save</Button>
      </div>
    </form>
  );
}

function TextInput({
  className,
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={twMerge("rounded border border-gray-300 p-2")}
      {...rest}
    />
  );
}
