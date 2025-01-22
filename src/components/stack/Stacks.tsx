import useSectionObserver from "@/hooks/useSectionObserver.hook";
import Article from "../article/Article";
import { stackList } from "./data";
import StackGroup from "./group/Group";
import "./stack.scss";
import { useI18nContext } from "@/i18n/i18n-react";

export default function Stacks({ id }: { id: string }) {
  const ref = useSectionObserver(id);
  const { LL } = useI18nContext();

  return (
    <Article
      title={LL.section.stacks.title()}
      description={LL.section.stacks.description()}
      id={id}
      ref={ref}
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
