import { IconMouse } from "@tabler/icons-react";
import { motion, useScroll, useTransform } from "motion/react";
import "./scroll.scss";
import { useI18nContext } from "@/i18n/i18n-react";

export default function Scroll() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 1], [1, 0]);
  const filter = useTransform(scrollY, [0, 1], ["blur(0px)", "blur(16px)"]);
  const { LL } = useI18nContext();

  return (
    <motion.div id="scroll" style={{ opacity, filter }}>
      <span>
        <IconMouse /> {LL.scroll()}
      </span>
    </motion.div>
  );
}
