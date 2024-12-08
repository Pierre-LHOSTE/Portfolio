import { IconMouse } from "@tabler/icons-react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./scroll.scss";

export default function Scroll() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 1], [1, 0]);
  const filter = useTransform(scrollY, [0, 1], ["blur(0px)", "blur(16px)"]);

  return (
    <motion.div id="scroll" style={{ opacity, filter }}>
      <span>
        <IconMouse /> Scroll down to chat with AI-ME!
      </span>
    </motion.div>
  );
}
