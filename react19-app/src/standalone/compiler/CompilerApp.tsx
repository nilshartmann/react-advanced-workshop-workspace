
import {useState} from "react";

import { singleRecipe } from "./ingredient-data.ts";
import IngredientsWidget from "./IngredientsWidget.tsx";

export default function CompilerApp() {

  const [c, setC] = useState(0);

  const info = {
      msg: "Hallo Welt " + c
    }

  return (
    <div className={"container mx-auto max-w-xl"}>
      <button onClick={() => setC(c + 1)}>C++</button>
      <IngredientsWidget ingredients={singleRecipe.ingredients} info={info}/>
    </div>
  );
}
