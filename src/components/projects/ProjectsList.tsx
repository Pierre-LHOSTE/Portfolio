import useSectionObserver from "@/hooks/useSectionObserver.hook";
import Article from "../article/Article";
import { projectsList } from "./list";
import Project from "./project/Project";
import "./projects.scss";
import { useI18nContext } from "@/i18n/i18n-react";
import type { ProjectIdType } from "./project";

export default function Projects({ id }: { id: string }) {
  const ref = useSectionObserver(id);
  const { LL } = useI18nContext();

  return (
    <Article
      title={LL.section.projects.title()}
      description={LL.section.projects.description()}
      id={id}
      ref={ref}
    >
      {(Object.keys(projectsList) as ProjectIdType[]).map((projectId) => (
        <Project
          key={projectsList[projectId].name.en}
          project={projectsList[projectId]}
          id={projectId}
        />
      ))}
    </Article>
  );
}
