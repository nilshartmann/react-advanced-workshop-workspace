import { InsightSchema } from "../types.ts";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import Form from "./Form.tsx";
import TextInput from "./TextInput.tsx";
import Button from "./Button.tsx";
import FormFieldError from "./FormFieldError.tsx";

type InsightFormProps = {
  taskId: string;
};

const NewInsightSchema = InsightSchema.omit({ id: true });
type NewInsight = z.infer<typeof NewInsightSchema>;

const data = {
  text: "jojojojo",
  author: "Karl Müller",
  confidence: 3
}

export default function InsightForm({ taskId }: InsightFormProps) {
  const form = useForm<NewInsight>({
    resolver: zodResolver(NewInsightSchema),
    mode: "onBlur",
    // defaultValues: data
    // values: {
    //
    // }
  });

  console.log("dirty fields", form.formState.dirtyFields)

  const handleSubmit  =(newInsight: NewInsight)  => {
    console.log("werte aus dem formular", newInsight);
  }

  const handleInvalidData = (err: any) => {
    console.log("invalid data", err);
  }

  return (
    <Form onSubmit={form.handleSubmit(handleSubmit, handleInvalidData)}>
      <TextInput {...form.register("text")} />
      <FormFieldError>
        {form.formState.errors.text?.message}
      </FormFieldError>
      <TextInput {...form.register("author")} />
      <FormFieldError>
        {form.formState.errors.author?.message}
      </FormFieldError>
      <TextInput
        type={"number"}
        {...form.register("confidence", {
          valueAsNumber: true,
        })}
      />
      <FormFieldError>
        {form.formState.errors.confidence?.message}
      </FormFieldError>
      <Button type={"submit"}>Save</Button>
    </Form>
  );
}
