import { useI18nContext } from "@/i18n/i18n-react";
import "./header.scss";
import { useChatStore } from "@/stores/chat.store";
import { IconEdit } from "@tabler/icons-react";
import { motion } from "motion/react";

export default function ChatHeader({
  controls,
}: {
  controls: any;
}) {
  const { LL } = useI18nContext();
  const addChat = useChatStore((state) => state.addChat);
  const setActiveChat = useChatStore((state) => state.setActiveChat);

  const twoRandomNumbers = Math.floor(Math.random() * 59);

  function createNewChat() {
    const date = new Date().getTime().toString();
    addChat({
      id: date,
      title: LL.chat.newChat(),
      updatedAt: date,
    });
    setActiveChat(date);
  }

  return (
    <motion.header onPointerDown={(event) => controls.start(event)} id="chat-header">
      <span>{LL.chat.title()}</span>
      <button type="button" onClick={createNewChat}>
        <IconEdit />
      </button>
    </motion.header>
  );
}
