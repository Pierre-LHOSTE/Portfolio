import type { Message } from "ai";
import localforage from "localforage";
import { useEffect } from "react";

export default function useSaveMessages({
  messages,
  threadId,
}: {
  messages: Message[];
  threadId: string | undefined;
}) {
  useEffect(() => {
    if (!threadId || threadId === "temp" || messages.length === 0) return;
    (async () => {
      const tempMessages = await localforage.getItem("messages");
      const savedMessages = Array.isArray(tempMessages) ? tempMessages : [];
      const withoutActiveMessages = savedMessages.filter(
        (msg) => !messages.find((activeMsg) => activeMsg.id === msg.id)
      );

      const newMessages = messages.map((msg) => ({
        ...msg,
        threadId,
      }));

      const updatedMessages = [...withoutActiveMessages, ...newMessages];

      await localforage.setItem("messages", updatedMessages);
    })();
  }, [messages]);
}
