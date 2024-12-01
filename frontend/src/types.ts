import z from "zod";

// export type TaskState = "new" | "in_progress" | "done";

// export type Task = {
//   id: string;
//   title: string;
//   description: string;
//   effort: number;
//   state: TaskState;
//   votes: number;
//   dueDate: string;
// };

const TaskStateSchema = z.enum(["new", "in_progress", "done"]);
export type TaskState = z.infer<typeof TaskStateSchema>;

export const TaskSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  effort: z.number().min(0).max(10),
  state: TaskStateSchema,
  votes: z.number().min(0),
  dueDate: z.string().date(),
});

export type Task = z.infer<typeof TaskSchema>;

// export type Insight = {
//   id: string;
//   author: string;
//   text: string;
//   confidence?: number;
// };

export const InsightSchema = z.object({
  id: z.string(),
  author: z.string(),
  text: z.string(),
  confidence: z.number().min(0).max(5).optional(),
});

export type Insight = z.infer<typeof InsightSchema>;
