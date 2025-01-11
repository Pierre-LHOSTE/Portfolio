import "./chat-app.scss";
import useSectionObserver from "@/hooks/useSectionObserver.hook";
import { useI18nContext } from "@/i18n/i18n-react";
import { useChatStore } from "@/stores/chat.store";
import scrollToButton from "@/utils/scrollToButton";
import { type Message, useChat } from "ai/react";
import localforage from "localforage";
import { motion, useDragControls } from "motion/react";
import type { OverlayScrollbarsComponentRef } from "overlayscrollbars-react";
import { useEffect, useRef } from "react";
import ChatAside from "./components/aside/ChatAside";
import ChatContent from "./components/content/ChatContent";
import ChatHeader from "./components/header/ChatHeader";
import ChatInput from "./components/input/ChatInput";
import { initMessagesData } from "./messages";
import type { ChatListElementType } from "./type";

export default function ChatApp() {
  const { messages, input, handleInputChange, handleSubmit, setMessages, isLoading } = useChat();
  const { LL, locale } = useI18nContext();
  const ref = useSectionObserver("chat");
  const controls = useDragControls();
  const setChatList = useChatStore((state) => state.setChatList);
  const chatList = useChatStore((state) => state.chatList);
  const setActiveChat = useChatStore((state) => state.setActiveChat);
  const activeChat = useChatStore((state) => state.activeChat);

  const chatContentRef = useRef<OverlayScrollbarsComponentRef<"div">>(null);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    scrollToButton(chatContentRef);
    const syncMessagesWithLocalForage = async () => {
      try {
        const savedMessages = await localforage.getItem("messages");

        if (!Array.isArray(savedMessages)) {
          await localforage.setItem(
            "messages",
            messages.map((msg) => ({
              ...msg,
              from: activeChat,
            }))
          );
          return;
        }

        interface SavedMessageType extends Message {
          from: string;
        }

        const remainingMessages = (savedMessages as SavedMessageType[]).filter(
          (savedMsg) => savedMsg.from !== activeChat
        );

        const updatedMessages = [
          ...remainingMessages,
          ...messages.map((msg) => ({
            ...msg,
            from: activeChat,
          })),
        ];

        await localforage.setItem("messages", updatedMessages);
      } catch (error) {
        console.error("Error synchronizing messages:", error);
      }
    };

    syncMessagesWithLocalForage();
  }, [messages]);

  useEffect(() => {
    localforage.getItem("messages").then((savedMessages) => {
      if (Array.isArray(savedMessages)) {
        setMessages(
          savedMessages
            .filter((msg) => msg.from === activeChat)
            .map((msg) => ({
              ...msg,
              from: undefined,
            }))
        );
      }
    });
  }, [activeChat, setMessages]);

  useEffect(() => {
    localforage.setItem("chatList", chatList);
  }, [chatList]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    localforage.getItem("chatList").then((chatList) => {
      if (Array.isArray(chatList) && chatList.length > 0 && chatList[0].title.trim()) {
        setChatList(chatList as ChatListElementType[]);
        setActiveChat(chatList[0].id);
      } else {
        const date = new Date().getTime().toString();
        setChatList([
          {
            title: LL.chat.newChat(),
            updatedAt: new Date().getTime().toString(),
            id: date,
          },
        ]);
        setActiveChat(date);
        localforage.setItem("chatList", []);
      }
    });
  }, [setChatList]);

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

  const formattedChats: {
    date: number;
    label: string;
    elements: ChatListElementType[];
  }[] = [];

  for (const chat of chatList) {
    const updatedAtDate = new Date(Number(chat.updatedAt));
    const today = new Date().getTime();
    const isToday = updatedAtDate.getTime() > today - 24 * 60 * 60 * 1000;
    const isYesterday = updatedAtDate.getTime() > today - 48 * 60 * 60 * 1000;
    const date = updatedAtDate.toLocaleDateString(locale, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    // Définir la date formatée
    let label: string;
    if (isToday) {
      label = LL.chat.today();
    } else if (isYesterday) {
      label = LL.chat.yesterday();
    } else {
      label = date;
    }

    // Trouver ou créer l'entrée correspondante
    let formattedChat = formattedChats.find((fc) => fc.label === label);
    if (!formattedChat) {
      formattedChat = { label, date: updatedAtDate.getTime(), elements: [] };
      formattedChats.push(formattedChat);
    }

    formattedChat.elements.push(chat);
  }

  for (const fc of formattedChats) {
    fc.elements.sort((a, b) => Number(b.updatedAt) - Number(a.updatedAt));
  }

  formattedChats.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });

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
        <ChatAside chatList={formattedChats} />
        <main>
          <ChatHeader controls={controls} />
          <ChatContent chat={[...initMessages, ...messages]} ref={chatContentRef} />
          <ChatInput
            input={input}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            ref={chatContentRef}
            isLoading={isLoading}
          />
        </main>
      </motion.section>
    </motion.div>
  );
}
