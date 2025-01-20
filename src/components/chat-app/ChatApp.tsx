import "./chat-app.scss";
import useSaveChannels from "@/hooks/useSaveChannels.hook";
import useSaveMessages from "@/hooks/useSaveMessages.hook";
import useSectionObserver from "@/hooks/useSectionObserver.hook";
import { useI18nContext } from "@/i18n/i18n-react";
import { useChatStore } from "@/stores/chat.store";
import scrollToButton from "@/utils/scrollToButton";
import { useAssistant } from "ai/react";
import localforage from "localforage";
import { motion, useDragControls } from "motion/react";
import type { OverlayScrollbarsComponentRef } from "overlayscrollbars-react";
import { useEffect, useRef, useState } from "react";
import ChatAside from "./components/aside/ChatAside";
import ChatContent from "./components/content/ChatContent";
import ChatHeader from "./components/header/ChatHeader";
import ChatInput from "./components/input/ChatInput";
import { initMessagesData } from "./messages";
import type { ChannelType, DatedChannelType, SavedMessageType } from "./type";

const titleRegex = /Title: (.+)/;

export default function ChatApp() {
  const {
    messages,
    input,
    handleInputChange,
    submitMessage,
    status,
    threadId,
    setThreadId,
    setMessages,
  } = useAssistant({
    api: "/api/chat",
  });
  const { LL, locale } = useI18nContext();
  const ref = useSectionObserver("chat");
  const chatContentRef = useRef<OverlayScrollbarsComponentRef<"div">>(null);
  const controls = useDragControls();
  const [datedChannelList, setDatedChannelList] = useState<DatedChannelType[]>([]);
  const channels = useChatStore((state) => state.channels);
  const setChannels = useChatStore((state) => state.setChannels);
  const addChannel = useChatStore((state) => state.addChannel);
  const updateChannel = useChatStore((state) => state.updateChannel);
  const [oldMessages, setOldMessages] = useState<SavedMessageType[]>([]);
  const [savedMessages, setSavedMessages] = useState<SavedMessageType[]>([]);

  useSaveMessages({ messages, threadId });
  useSaveChannels({ channels });

  async function deleteMessages(id: string) {
    setMessages([]);
    setOldMessages([]);
    const savedMsg = await localforage.getItem<SavedMessageType[]>("messages");
    if (!savedMsg) return;
    const newMessages = savedMsg.filter((m) => m.threadId !== id);
    const res = await localforage.setItem("messages", newMessages);
  }

  // Load saved channels
  useEffect(() => {
    (async () => {
      const savedChannels = (await localforage.getItem("channels")) as ChannelType[];
      if (Array.isArray(savedChannels) && savedChannels.length > 0) {
        setChannels(savedChannels);
        setThreadId(savedChannels[savedChannels.length - 1].threadId);
      } else {
        setChannels([
          {
            title: LL.chat.newChat(),
            updatedAt: new Date().getTime(),
            threadId: "temp",
          },
        ]);
      }
    })();
  }, []);

  // Load saved messages
  useEffect(() => {
    (async () => {
      const localSavedMessages = (await localforage.getItem("messages")) as SavedMessageType[];
      if (Array.isArray(localSavedMessages) && localSavedMessages.length > 0) {
        setSavedMessages(localSavedMessages);
      } else {
        setSavedMessages([]);
      }
    })();
  }, [threadId]);

  // Get active old messages
  useEffect(() => {
    const oldMsgs = savedMessages.filter((m) => m.threadId === threadId);
    setOldMessages(oldMsgs);
    scrollToButton(chatContentRef, true);
  }, [threadId, savedMessages]);

  // Create a new chat when there is no chat
  useEffect(() => {
    if (!threadId) return;
    const channel = channels.find((c) => c.threadId === threadId);
    if (!channel) {
      setChannels(
        channels.map((c) => {
          if (c.threadId === "temp") {
            return {
              title: LL.chat.newChat(),
              updatedAt: new Date().getTime(),
              threadId,
            };
          }
          return c;
        })
      );
    }
  }, [threadId]);

  // Update aside list
  useEffect(() => {
    const today = new Date().getTime();
    const newFormattedChats: DatedChannelType[] = [];

    for (const chat of channels) {
      const updatedAtDate = new Date(Number(chat.updatedAt));
      const isToday = updatedAtDate.getTime() > today - 24 * 60 * 60 * 1000;
      const isYesterday = updatedAtDate.getTime() > today - 48 * 60 * 60 * 1000;
      const date = updatedAtDate.toLocaleDateString(locale, {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });

      let label: string;
      if (isToday) {
        label = LL.chat.today();
      } else if (isYesterday) {
        label = LL.chat.yesterday();
      } else {
        label = date;
      }

      let formattedChat = newFormattedChats.find((fc) => fc.label === label);
      if (!formattedChat) {
        formattedChat = { label, date: updatedAtDate.getTime(), elements: [] };
        newFormattedChats.push(formattedChat);
      }

      formattedChat.elements.push(chat);
    }

    for (const fc of newFormattedChats) {
      fc.elements.sort((a, b) => Number(b.updatedAt) - Number(a.updatedAt));
    }

    newFormattedChats.sort((a, b) => b.date - a.date);
    setDatedChannelList(newFormattedChats);
  }, [channels]);

  const initMessages = [
    {
      id: "1",
      role: "assistant",
      content: [
        initMessagesData.hi[locale === "fr" ? "fr" : "en"],
        initMessagesData.chat[locale === "fr" ? "fr" : "en"],
      ],
    },
  ];

  // Update channel title
  useEffect(() => {
    if (status !== "in_progress" && messages.length > 1 && threadId) {
      const firstResponse = messages[1].content;
      const match = firstResponse.match(titleRegex);
      if (match?.[1])
        updateChannel({
          threadId,
          title: match[1].trim(),
        });
    }
  }, [status]);

  function setLastActiveThread() {
    const lastActiveThread = channels[channels.length - 1];
    setThreadId(lastActiveThread.threadId);
  }

  return (
    <motion.div
      id="chat-section"
      initial={{
        opacity: 0,
        translateY: 80,
      }}
      animate={{
        opacity: 1,
        translateY: 0,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 20,
        },
      }}
      ref={ref}
    >
      <motion.section
        id="chat-app"
        drag
        dragControls={controls}
        dragListener={false}
        dragConstraints={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        {
          <ChatAside
            datedChannelList={datedChannelList}
            setThreadId={setThreadId}
            threadId={threadId ?? ""}
            deleteMessages={deleteMessages}
          />
        }
        <main>
          <ChatHeader controls={controls} setThreadId={setThreadId} />
          <ChatContent chat={[...initMessages, ...oldMessages, ...messages]} ref={chatContentRef} />
          <ChatInput
            input={input}
            handleInputChange={handleInputChange}
            handleSubmit={submitMessage}
            ref={chatContentRef}
            isLoading={status === "in_progress"}
            threadId={threadId ?? ""}
          />
        </main>
      </motion.section>
    </motion.div>
  );
}
