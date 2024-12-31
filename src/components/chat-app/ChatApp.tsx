import "./chat-app.scss";
import useSectionObserver from "@/hooks/useSectionObserver.hook";
import { useI18nContext } from "@/i18n/i18n-react";
import { useChat } from "ai/react";
import { motion, useDragControls } from "motion/react";
import ChatAside from "./components/aside/ChatAside";
import ChatContent from "./components/content/ChatContent";
import ChatHeader from "./components/header/ChatHeader";
import ChatInput from "./components/input/ChatInput";

export default function ChatApp() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const { LL } = useI18nContext();
  const ref = useSectionObserver("chat");

  const controls = useDragControls();

  const initMessages = [
    {
      id: "1",
      role: "assistant",
      content: [
        "Hello! How can I help you today?",
        "I'm here to respond to your questions like a real human!",
      ],
    },
  ];

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
        <ChatAside
          chatList={[
            {
              date: LL.chat.today(),
              elements: [
                { title: "Problème avec l'API REST", id: "1" },
                { title: "Discussion sur le design", id: "2" },
                { title: "Effet text en CSS", id: "3" },
              ],
              active: "2",
            },
            {
              date: LL.chat.yesterday(),
              elements: [
                { title: "Organisation du projet", id: "4" },
                { title: "Refactoring du code", id: "5" },
                { title: "Discussion sur les tests", id: "6" },
                { title: "Mise en place de l'authentification", id: "7" },
                { title: "Discussion sur les performances", id: "8" },
              ],
              active: "",
            },
          ]}
        />
        <main>
          <ChatHeader controls={controls} />
          <ChatContent chat={[...initMessages, ...messages]} />
          <ChatInput
            input={input}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        </main>
      </motion.section>
    </motion.div>
  );
}
