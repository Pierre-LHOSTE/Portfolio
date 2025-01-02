import type {} from "react";
import "./message.scss";
import { useI18nContext } from "@/i18n/i18n-react";
import { IconRocket } from "@tabler/icons-react";
import { motion } from "motion/react";

const reveal = {
  translateX: "100%",
  transition: {
    duration: 5,
  },
};

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
  id: "message",
  // initial: "hidden",
  // whileInView: "visible",
  // variants,
  // viewport: {
  //   margin: "-200px",
  // },
};

export default function Message() {
  const { LL } = useI18nContext();

  return (
    <motion.section {...animation}>
      <span>
        <IconRocket /> {LL.message()}
      </span>
      <div id="message-hider">
        <motion.div animate={reveal} />
      </div>
    </motion.section>
  );
}
