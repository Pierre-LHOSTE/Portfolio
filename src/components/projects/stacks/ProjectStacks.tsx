import type { StackType } from "@/components/stack/stack";
import Tag from "@/components/tag/Tag";
import "./project-stacks.scss";

export default function ProjectStacks({
  stacks,
}: {
  stacks: StackType[];
}) {
  const categories = new Set(stacks.map((stack) => stack.category));

  return (
    <div className="project-stacks">
      {Array.from(categories).map((category) => {
        return (
          <div key={category}>
            <h5>{category}</h5>
            <div className="stacks-group">
              {stacks.map((stack) => {
                if (stack.category !== category || !stack.styles) return null;
                return (
                  <Tag key={stack.name} icon={stack.styles.icon}>
                    {stack.name}
                  </Tag>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
