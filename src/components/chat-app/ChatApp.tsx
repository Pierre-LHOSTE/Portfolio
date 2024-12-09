import "./chat-app.scss";
import { useChat } from "ai/react";
import { motion, useDragControls } from "framer-motion";
import ChatAside from "./components/aside/ChatAside";
import ChatContent from "./components/content/ChatContent";
import ChatHeader from "./components/header/ChatHeader";
import ChatInput from "./components/input/ChatInput";

export default function ChatApp() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

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
      id="chat-app-wrapper"
      initial={{
        scale: 1.2,
        opacity: 0,
        translateY: 80,
      }}
      animate={{
        scale: 1,
        opacity: 1,
        translateY: 0,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 20,
        },
      }}
    >
      <motion.section
        id="chat-app"
        initial={{
          scale: 0.9,
        }}
        whileInView={{
          scale: 1,
          transition: {
            type: "tween",
          },
        }}
        viewport={{
          amount: "all",
          margin: "50px",
        }}
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
              date: "Today",
              elements: [
                { title: "Problème avec l'API REST", id: "1" },
                { title: "Discussion sur le design", id: "2" },
                { title: "Effet text en CSS", id: "3" },
              ],
              active: "2",
            },
            {
              date: "Yesterday",
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
