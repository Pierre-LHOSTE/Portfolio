import { stackItem } from "@/components/stack/data";
import type { CategoryType, StackIdType, StackType } from "@/components/stack/stack";
import { IconPackages } from "@tabler/icons-react";
import Section from "../section/Section";
import Stack from "./element/Element";
import "./stacks.scss";
import { useI18nContext } from "@/i18n/i18n-react";

const categoryOrder = [
  "language",
  "framework",
  "frontend",
  "backend",
  "deployment",
  "database",
  "tools",
] as StackType["category"][];

export default function Stacks() {
  const { LL } = useI18nContext();

  const importantStacks = (Object.keys(stackItem) as StackIdType[])
    .map((key) => {
      return { ...stackItem[key], id: key };
    })
    .filter((stack: { tags: string[] }) => {
      if ("tags" in stack) {
        return stack.tags.includes("important");
      }
    });

  const importantStacksGroupedByCategory = importantStacks.reduce(
    (acc, stack) => {
      if (stack.category in acc) {
        acc[stack.category].push(stack);
      } else {
        acc[stack.category] = [stack];
      }
      return acc;
    },
    {} as Record<string, typeof importantStacks>
  );

  return (
    <Section
      title={LL.cv.skills()}
      details={LL.cv.skillsDetails()}
      id="cv-stacks"
      Icon={IconPackages}
    >
      <div>
        <div>
          {Object.keys(importantStacksGroupedByCategory)
            .sort(
              (a, b) =>
                categoryOrder.indexOf(a as CategoryType) - categoryOrder.indexOf(b as CategoryType)
            )
            .map((category) => {
              return (
                <div key={category}>
                  <h3>{LL.stack[category as CategoryType]()}</h3>
                  <div className="cv-stacks">
                    {importantStacksGroupedByCategory[category].map((stack) => {
                      return <Stack key={stack.name} stack={stack} id={stack.id as StackIdType} />;
                    })}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </Section>
  );
}
