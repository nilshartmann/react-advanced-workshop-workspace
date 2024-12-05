import { Link } from "@tanstack/react-router";
import {AppLink} from "./_stories/AppLink.tsx";

export default function GlobalNavBar() {
  return (
    <header className={"h-16 bg-gray-200"}>
      <div
        className={
          "container mx-auto flex h-full max-w-4xl items-center justify-start space-x-3"
        }
      >
        <Link
          className={
            "border-1 rounded border border-gray-800 p-2 text-gray-400 hover:bg-gray-100 hover:font-bold"
          }
          to={"/tasks"}
          activeProps={{
            className: "font-semibold underline",
          }}
        >
          Tasks
        </Link>
        <AppLink to={"/about"}>About</AppLink>
        {/*<Link*/}
        {/*  className={*/}
        {/*    "border-1 rounded border border-gray-800 p-2 text-gray-400 hover:bg-gray-100 hover:font-bold"*/}
        {/*  }*/}
        {/*  to={"/about"}*/}
        {/*  activeProps={{*/}
        {/*    className: "font-semibold underline",*/}
        {/*  }}*/}
        {/*>*/}
        {/*  About*/}
        {/*</Link>*/}
        <Link
          className={
            "border-1 rounded border border-gray-800 p-2 text-gray-400 hover:bg-gray-100 hover:font-bold"
          }
          to={"/privacy"}
          activeProps={{
            className: "font-semibold underline",
          }}
        >
          Privacy
        </Link>
        <Link
          className={
            "border-1 rounded border border-gray-800 p-2 text-gray-400 hover:bg-gray-100 hover:font-bold"
          }
          to={"/user"}
          preload={"viewport"}
          activeProps={{
            className: "font-semibold underline",
          }}
        >
          User
        </Link>
      </div>
    </header>
  );
}
