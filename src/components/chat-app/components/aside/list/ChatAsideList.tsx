import { useChatStore } from "@/stores/chat.store";
import "./list.scss";
import type { DatedChannelType } from "@/components/chat-app/type";
import { useI18nContext } from "@/i18n/i18n-react";
import { IconTrash } from "@tabler/icons-react";
import type { MouseEvent } from "react";

export default function ChatAsideList({
  label,
  elements,
  threadId,
  setThreadId,
  deleteMessages,
}: {
  threadId: string;
  setThreadId: (threadId: string | undefined) => void;
  deleteMessages: (threadId: string) => void;
} & DatedChannelType) {
  const deleteChannel = useChatStore((state) => state.deleteChannel);
  const channels = useChatStore((state) => state.channels);
  const addChannel = useChatStore((state) => state.addChannel);
  const { LL } = useI18nContext();

  function handleDeleteChat(e: MouseEvent<HTMLSpanElement>, id: string) {
    if (threadId !== id) return;
    e.stopPropagation();
    const lastActiveThread = channels[channels.length - 1];
    if (channels.length === 1) {
      setThreadId("temp");
      addChannel({
        title: LL.chat.newChat(),
        updatedAt: new Date().getTime(),
        threadId: "temp",
      });
    } else if (lastActiveThread.threadId === threadId) {
      setThreadId(channels[channels.length - 2].threadId);
    } else {
      setThreadId(lastActiveThread.threadId);
    }
    deleteChannel(threadId);
    deleteMessages(threadId);
  }

  return (
    <div className="chat-aside-list">
      <span>{label}</span>
      <ul>
        {elements.map((element) => (
          <li
            key={element.threadId}
            className={!threadId || element.threadId === threadId ? "active" : ""}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                if (threadId !== element.threadId) setThreadId(element.threadId);
              }}
            >
              {element.title}
              {/* biome-ignore lint/nursery/noStaticElementInteractions: <explanation> */}
              {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
              <span className="delete" onClick={(e) => handleDeleteChat(e, element.threadId)}>
                <IconTrash size={16} />
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
