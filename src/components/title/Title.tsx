import { motion } from "framer-motion";
import "./title.scss";

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
  return (
    <section className="mono">
      <motion.h2 {...animation}>A Passionate and Responsible French</motion.h2>
      <motion.h1 {...animationBold}>Web Developer & Designer</motion.h1>
    </section>
  );
}
