import { CheckButton } from "./CheckButton.tsx";

export default function OrderByButtonBar() {
  return (
    <div className={"flex space-x-4"}>
      <CheckButton checked={true}>Due Date</CheckButton>
      <CheckButton checked={false}>State</CheckButton>
      <CheckButton checked={false}>Votes</CheckButton>
    </div>
  );
}
