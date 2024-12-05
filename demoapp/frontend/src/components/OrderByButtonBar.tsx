import { CheckButton } from "./CheckButton.tsx";
import {getRouteApi, Link, useSearch} from "@tanstack/react-router";

const TasksRoute = getRouteApi("/tasks/")

export default function OrderByButtonBar() {

  // useSearch({strict: false})
  const currentOrderBy = TasksRoute.useSearch({
    select: s => s.orderBy
  })

  // todo: Implementieren
  return (
    <div className={"flex space-x-4"}>
      <Link to={"/tasks"} search=
        { currentSearchParams => ({...currentSearchParams, orderBy: "dueDate"})}><CheckButton checked={currentOrderBy === "dueDate"}>Due Date</CheckButton></Link>
      <Link to={"/tasks"} search={
        currentSearchParams => ({...currentSearchParams, orderBy: "state"})}>
        <CheckButton checked={currentOrderBy === "state"}>State</CheckButton></Link>
      <Link to={"/tasks"} search={ currentSearchParams => ({...currentSearchParams, orderBy: "votes"})}><CheckButton checked={currentOrderBy === "votes"}>Votes</CheckButton></Link>
    </div>
  );
}
