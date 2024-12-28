import "./header.scss";
import { motion } from "motion/react";

export default function ChatHeader({
  controls,
}: {
  controls: any;
}) {
  return (
    <motion.header onPointerDown={(event) => controls.start(event)} id="chat-header">
      Chat with AI-ME!
    </motion.header>
  );
}
