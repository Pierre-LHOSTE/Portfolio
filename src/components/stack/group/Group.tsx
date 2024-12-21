import Stack from "../element/Element";
import "./group.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import type { StackGroupType } from "../stack.d";

export default function StackGroup({
  group,
}: {
  group: StackGroupType;
}) {
  const { name, icon: Icon, stack } = group;
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

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
    <motion.div className="stack-group" {...animation}>
      <div>
        <h3>
          <Icon /> {name}
        </h3>
        <div>
          {stack.map((s) => {
            return <Stack key={s.name} stack={s} />;
          })}
        </div>
      </div>
    </motion.div>
  );
}
