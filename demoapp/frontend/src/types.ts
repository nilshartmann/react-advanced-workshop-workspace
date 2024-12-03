export type TaskState = "new" | "in_progress" | "done";

export type Task = {
  id: string;
  title: string;
  description: string;
  effort: number;
  state: TaskState;
  votes: number;
  dueDate: string;
};

export type Insight = {
  id: string;
  author: string;
  text: string;
  confidence?: number;
};

type Resource = {
  id: string;
  title: string;
  description?: string | null;
  url: string;
};

// -------- DIESE FUNKTIONEN SIND NUR ZUM TESTEN DER ZOD-TYPEN
// -- wenn hier alles kompiliert, sind die Typen korrekt

function testResource(r: Resource) {
  let c: string = r.id;
  let title: string = r.id;
  let description: string | undefined | null = r.description;
  // @ts-expect-error
  let description_str: string = r.description;
  // @ts-expect-error
  let description_undefined: undefined = r.description;
  // @ts-expect-error
  let description_null: null = r.description;
  let url: string = r.url;
}

function testTaks(t: Task) {
  let id: string = t.id;
  let title: string = t.title;
  let state: "new" | "in_progress" | "done" = t.state;
  // @ts-expect-error
  let state_2: "finished" = t.state;
  let description: string = t.description;
  let dueDate: string = t.dueDate;
  let votes: number = t.votes;
  let effort: number = t.effort;
}

function testInsight(t: Insight) {
  let id: string = t.id;
  let title: string = t.text;
  let confidence: number | undefined = t.confidence;
  // @ts-expect-error
  let confidence_nr: number = t.confidence;
  // @ts-expect-error
  let confidence_undedfined: undefined = t.confidence;
}
