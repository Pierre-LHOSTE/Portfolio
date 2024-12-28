import useSectionObserver from "@/hooks/useSectionObserver.hook";
import Article from "../article/Article";
import { projectsList } from "./list";
import Project from "./project/Project";
import "./projects.scss";

export default function Projects() {
  const ref = useSectionObserver("projects");

  return (
    <Article
      title="Mes projets"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      id="projects"
      ref={ref}
    >
      {Object.values(projectsList).map((project) => (
        <Project key={project.name} project={project} />
      ))}
    </Article>
  );
}
