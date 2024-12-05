import { InsightSchema } from "../types.ts";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import Form from "./Form.tsx";
import TextInput from "./TextInput.tsx";
import Button from "./Button.tsx";
import FormFieldError from "./FormFieldError.tsx";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {taskApiKy} from "../task-api-ky.ts";
import FormLabel from "./FormLabel.tsx";

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

  const queryClient = useQueryClient();

  const mutation = useMutation({
    async mutationFn(newInsight: NewInsight) {
      return taskApiKy.post(`api/tasks/${taskId}/insights`, {
        json: newInsight
      });
    },
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["tasks", taskId, "insights"]
      })
    }
  });

  const subscription = form.watch( () =>{
    console.log("mutation rest")
    mutation.reset()
    subscription.unsubscribe();
  } );

  console.log("dirty fields", form.formState.touchedFields)

  const handleSubmit  =(newInsight: NewInsight)  => {
    console.log("werte aus dem formular", newInsight);
    mutation.mutateAsync(newInsight)
      .then( (data) => {
       // form.reset();

    })
  }

  const handleInvalidData = (err: any) => {
    console.log("invalid data", err);
  }

  return (
    <Form onSubmit={form.handleSubmit(handleSubmit, handleInvalidData)}>
      <h1>Add new insight</h1>
      <FormLabel htmlFor={"text"} >Text</FormLabel>
      <TextInput id={"text"} {...form.register("text")} />
      <FormFieldError>
        {form.formState.touchedFields.text &&
          form.formState.errors.text?.message}
      </FormFieldError>
      <FormLabel htmlFor={"author"} >Author</FormLabel>
      <TextInput id={"author"} {...form.register("author")} />
      <FormFieldError>
        {form.formState.errors.author?.message}
      </FormFieldError>

      <FormLabel htmlFor={"confidence"} >Confidence</FormLabel>
      <TextInput
        id={"confidence"}
        type={"number"}
        {...form.register("confidence", {
          valueAsNumber: true,
        })}
      />
      <FormFieldError>
        {form.formState.errors.confidence?.message}
      </FormFieldError>
      <Button type={"submit"} disabled={mutation.isPending}>Save</Button>
      {mutation.isSuccess && <p>Hurra! HAt geklappt!</p>}
      {mutation.isError && <p>Es ist ein Fehler aufgetreten!</p>}
    </Form>
  );
}
