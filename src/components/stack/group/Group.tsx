import Stack from "../element/Element";
import "./group.scss";
import { useI18nContext } from "@/i18n/i18n-react";
import { motion } from "motion/react";
import { useState } from "react";
import { stackItem } from "../data";
import type { CategoryType, StackGroupType, StackIdType } from "../stack.d";

export default function StackGroup({
  group,
}: {
  group: StackGroupType;
}) {
  const { name, icon: Icon, stacks } = group;
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const { LL } = useI18nContext();

  const variants = {
    hidden: {
      opacity: 0,
      y: -16,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handleAnimationComplete = (definition: string) => {
    if (definition === "visible") {
      setHasBeenVisible(true);
    }
  };

  const animation = {
    initial: "hidden",
    animate: hasBeenVisible ? "visible" : undefined,
    whileInView: "visible",
    onAnimationComplete: handleAnimationComplete,
    variants,
    viewport: {
      // amount: "all" as const,
    },
  };

  return (
    <motion.section className="stack-group" {...animation}>
      <div>
        <h3>
          <Icon /> {LL.stack[name.toLowerCase() as CategoryType]()}
        </h3>
        <div>
          {(stacks as StackIdType[]).map((key) => {
            return <Stack key={key} stack={stackItem[key]} id={key} />;
          })}
        </div>
      </div>
    </motion.section>
  );
}
