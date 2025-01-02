import { useChatStore } from "@/stores/chat.store";
import "./list.scss";

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

  return (
    <div className="chat-aside-list">
      <span>{label}</span>
      <ul>
        {elements.map((element) => (
          <li key={element.id} className={element.id === active ? "active" : ""}>
            <button type="button" onClick={() => setActiveChat(element.id)}>
              {element.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
