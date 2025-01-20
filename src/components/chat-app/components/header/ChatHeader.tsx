import { useI18nContext } from "@/i18n/i18n-react";
import "./header.scss";
import { useChatStore } from "@/stores/chat.store";
import { IconEdit } from "@tabler/icons-react";
import { motion } from "motion/react";

export default function ChatHeader({
  controls,
  setThreadId,
}: {
  controls: any;
  setThreadId: (threadId: string) => void;
}) {
  const { LL } = useI18nContext();
  const addChannel = useChatStore((state) => state.addChannel);
  const channels = useChatStore((state) => state.channels);

  function createNewChat() {
    const isTempChannel = channels.some((channel) => channel.threadId === "temp");
    if (isTempChannel) {
      setThreadId("temp");
      return;
    }
    addChannel({
      threadId: "temp",
      title: LL.chat.newChat(),
      updatedAt: new Date().getTime(),
    });
    setThreadId("temp");
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
