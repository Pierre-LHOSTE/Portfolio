import { useChatStore } from "@/stores/chat.store";
import "./list.scss";
import { IconTrash } from "@tabler/icons-react";
import { useEffect } from "react";

export interface ChatAsideListProps {
  date: number;
  label: string;
  elements: {
    title: string;
    id: string;
  }[];
}

export default function ChatAsideList({ label, elements }: ChatAsideListProps) {
  const active = useChatStore((state) => state.activeChat);
  const setActiveChat = useChatStore((state) => state.setActiveChat);
  const setLastActiveChat = useChatStore((state) => state.setLastActiveChat);
  const activeChat = useChatStore((state) => state.activeChat);
  const deleteChat = useChatStore((state) => state.deleteChat);

  function handleDeleteChat(e: any, id: string) {
    e.stopPropagation();
    setLastActiveChat();
    deleteChat(id);
  }

  useEffect(() => {
    console.log("activeChat", activeChat);
  }, [activeChat]);

  return (
    <div className="chat-aside-list">
      <span>{label}</span>
      <ul>
        {elements.map((element) => (
          <li key={element.id} className={element.id === active ? "active" : ""}>
            <button type="button" onClick={() => setActiveChat(element.id)}>
              {element.title}
              <span
                type="button"
                className="delete"
                onClick={(e) => handleDeleteChat(e, element.id)}
              >
                <IconTrash size={16} />
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
