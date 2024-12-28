import type { ReactNode, RefObject } from "react";
import "./article.scss";

export default function Article({
  children,
  title,
  description,
  id,
  ref,
}: {
  children?: ReactNode;
  title: string;
  description: string;
  id?: string;
  ref?: RefObject<HTMLDivElement | null>;
}) {
  return (
    <article id={`${id}-section`} ref={ref}>
      <section className="article-header">
        <h2>{title}</h2>
        <p>{description}</p>
      </section>

      <section className="article-content" id={id}>
        {children}
      </section>
    </article>
  );
}
