import { memo, ReactNode, useCallback, useState } from "react";
import { twMerge } from "tailwind-merge";

import { Ingredient } from "./ingredient-data.ts";
import { logRender, useLogRenderDone } from "./log-render.ts";
import logo from "./logo.png";

type IngredientsProps = {
  ingredients: Ingredient[];
  info: Info;
};
export default function IngredientsWidget({
  ingredients,
  info,
}: IngredientsProps) {
  logRender("IngredientsWidget");
  const [servings, setServings] = useState(4);

  function handlePlusClick() {
    setServings(servings + 1);
    // setServings(servings - 1);
  }

  const onDecreaseServings = useCallback(
    () => setServings(
      currentServings => currentServings - 1),
    [],
  );
  const onIncreaseServings = useCallback(
    () => setServings(servings + 1),
    [servings],
  );

  const getLabel = useCallback(() => {
    return "Hello World";
  }, []);

  // const info2 = useMemo( () => {
  //   return info
  // }, [])

  useLogRenderDone();

  return (
    <>
      <div className={"flex items-center justify-between"}>
        <Header getLabel={getLabel} info={info}>
          Ingredients
        </Header>
        <ServingsChooser
          servings={servings}
          onMinusClick={onDecreaseServings}
          onPlusClick={onIncreaseServings}
        />
      </div>
      {ingredients.map((ingredient) => (
        <IngredientItem
          key={ingredient.name}
          ingredient={ingredient}
          servings={servings}
        />
      ))}
    </>
  );
}

// Die folgende Komponentenhierarchie ist etwas übertrieben,
// soll hier aber ein möglichst komplexes "real world"-Szenario
// beschreiben

type ServingsChooserProps = {
  servings: number;
  onPlusClick(): void;
  onMinusClick(): void;
};

function ServingsChooser({
  onPlusClick,
  onMinusClick,
  servings,
}: ServingsChooserProps) {
  return (
    <div className={"mb-8 mt-8 flex items-center justify-between"}>
      <div
        className={
          "rounded-lg border border-dotted border-gray-500 p-2 text-lg"
        }
      >
        <IconButton
          icon={"minus"}
          // disabled={servings < 2}
          onButtonClick={onMinusClick}
        />
        <span className={"text-gray-500"}> {servings} servings </span>
        <IconButton icon={"plus"} onButtonClick={onPlusClick} />
      </div>
    </div>
  );
}

type IngredientItemProps = {
  ingredient: Ingredient;
  servings: number;
};

function IngredientItem({ ingredient, servings }: IngredientItemProps) {
  return (
    <div
      className={
        "flex items-center space-x-2 border-b border-dotted border-gray-300 pb-2 pt-2 font-inter text-gray-500"
      }
    >
      <CheckIcon />
      <Amount
        amount={(ingredient.amount / 4) * servings}
        unit={ingredient.unit}
      />
      <Label>{ingredient.name}</Label>
    </div>
  );
}

type Info = { msg: string };

type HeaderProps = {
  children: ReactNode;
  getLabel(): string;
  info: Info;
};

const Header = memo(function Header({ children, getLabel, info }: HeaderProps) {
  logRender("Header");
  return (
    <span className={"flex items-center space-x-2 px-4"}>
      <RecipifyIcon />
      <p>{getLabel()}</p>
      <p>Info: {info.msg}</p>
      <Heading>{children}</Heading>
    </span>
  );
});

type HeadingProps = {
  children: ReactNode;
};

function Heading({ children }: HeadingProps) {
  logRender("Heading");
  return <h2 className={"px-4 font-space text-3xl font-bold"}>{children}</h2>;
}

type AmountProps = {
  amount: number;
  unit: string;
};

function Amount({ amount, unit }: AmountProps) {
  logRender("Amount");
  return (
    <span className={"p-2"}>
      {amount} {unit}
    </span>
  );
}

type LabelProps = {
  children: ReactNode;
};

function Label({ children }: LabelProps) {
  logRender("Label");
  return <span className={"p-2"}>{children}</span>;
}

function CheckIcon() {
  logRender("CheckIcon");
  return <i className="fa-regular fa-circle-check p-2 text-orange_2"></i>;
}

function RecipifyIcon() {
  logRender("RecipifyIcon");
  return <img src={logo} alt={"Recipify icon"} />;
}

type IconButtonProps = {
  icon: "plus" | "minus";
  onButtonClick(): void;
  disabled?: boolean;
};

const IconButton = memo(function IconButton({
  disabled,
  icon,
  onButtonClick,
}: IconButtonProps) {
  logRender("IconButton");
  return (
    <button onClick={disabled ? undefined : onButtonClick}>
      <i
        className={twMerge(
          icon === "plus" ? "fa-circle-plus" : "fa-circle-minus",
          "fa-solid p-2 text-orange_2",
          disabled ? "" : "hover:cursor-pointer hover:text-orange_2-500",
        )}
      />
    </button>
  );
});
