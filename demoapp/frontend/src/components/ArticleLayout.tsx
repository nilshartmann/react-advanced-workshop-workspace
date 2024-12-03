import { ReactNode } from "react";

type ArticleLayoutProps = {
  children?: ReactNode;
};

export default function ArticleLayout({ children }: ArticleLayoutProps) {
  return (
    <article className={"space-y-6 font-inter text-gray-600 *:leading-7"}>
      {children}
    </article>
  );
}
