import Button from "@/components/button/Button";
import Tag from "@/components/tag/Tag";
import type { ProjectType } from "../project";
import "./project.scss";
import { stackItem } from "@/components/stack/list";
import Tooltip from "@/components/tooltip/Tooltip";
import Image from "next/image";
import Album from "../album/Album";
import ProjectStacks from "../stacks/ProjectStacks";

const IMG_MAX_WIDTH = 512;

export default function Project({
  project,
}: {
  project: ProjectType;
}) {
  const selectedStacks = ["nextJs", "typescript", "javascript", "prisma"];

  return (
    <div className="project">
      <div>
        <header>
          <h4>
            {project.name}
            <Tooltip
              content={<ProjectStacks stacks={project.technologies.map((t) => stackItem[t])} />}
            >
              <span>
                {project.technologies
                  .filter((tech) => selectedStacks.includes(tech))
                  .map((tech) => (
                    <Image
                      key={tech}
                      src={stackItem[tech].styles.icon}
                      width={16}
                      height={16}
                      alt=""
                    />
                  ))}
              </span>
            </Tooltip>
          </h4>
          <Album images={[...new Set([project.thumbnail, ...project.images])]} />
        </header>
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
