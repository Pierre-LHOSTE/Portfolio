import Article from "../article/Article";
import StackGroup from "./group/Group";
import { stackList } from "./list";
import "./stack.scss";

export default function Stacks() {
  return (
    <Article
      title="Ma stack technique"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      id="stack"
    >
      {stackList.map((group) => (
        <div key={group[0].name}>
          {group.map((stack) => {
            return <StackGroup key={stack.name} group={stack} />;
          })}
        </div>
      ))}
    </Article>
  );
}
