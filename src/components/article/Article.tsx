import type { ReactNode } from "react";
import "./article.scss";

export default function Article({
  children,
  title,
  description,
  id,
}: {
  children: ReactNode;
  title: string;
  description: string;
  id?: string;
}) {
  return (
    <article>
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
