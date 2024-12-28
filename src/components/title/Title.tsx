import { motion } from "motion/react";
import "./title.scss";
import { useI18nContext } from "@/i18n/i18n-react";

const variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const animation = {
  initial: "hidden",
  whileInView: "visible",
  variants,
  viewport: {
    margin: "-200px",
  },
};

const animationBold = {
  ...animation,
  className: "bold",
};

export function Title() {
  const { LL } = useI18nContext();

  return (
    <section className="mono">
      <motion.h2 {...animation}>
        {LL.hero.subtitle.sentence({
          french: LL.hero.subtitle.french(),
          passionate: LL.hero.subtitle.passionate(),
          responsible: LL.hero.subtitle.responsible(),
        })}
      </motion.h2>
      <motion.h1 {...animationBold}>
        {LL.hero.title.sentence({
          developer: LL.hero.title.developer(),
          designer: LL.hero.title.designer(),
        })}
      </motion.h1>
    </section>
  );
}
