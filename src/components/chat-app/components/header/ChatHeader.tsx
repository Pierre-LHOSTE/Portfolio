import { useI18nContext } from "@/i18n/i18n-react";
import "./header.scss";
import { motion } from "motion/react";

export default function ChatHeader({
  controls,
}: {
  controls: any;
}) {
  const { LL } = useI18nContext();
  return (
    <motion.header onPointerDown={(event) => controls.start(event)} id="chat-header">
      {LL.chat.title()}
    </motion.header>
  );
}
