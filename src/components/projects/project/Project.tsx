import Button from "@/components/button/Button";
import Tag from "@/components/tag/Tag";
import Image from "next/image";
import type { ProjectType } from "../project";
import "./project.scss";

const IMG_MAX_WIDTH = 512;

export default function Project({
  project,
}: {
  project: ProjectType;
}) {
  return (
    <div className="project">
      <div>
        <header>
          <h4>{project.name}</h4>
        </header>
        <Image
          src={project.thumbnail}
          alt={`${project.name}'s preview`}
          width={IMG_MAX_WIDTH}
          height={IMG_MAX_WIDTH}
        />
        <div className="content">
          <div className="tags">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>

          <p>{project.description}</p>

          <div className="actions">{project.url && <Button text="Visiter" />}</div>
        </div>
      </div>
    </div>
  );
}
