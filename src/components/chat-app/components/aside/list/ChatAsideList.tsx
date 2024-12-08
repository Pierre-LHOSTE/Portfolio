import "./list.scss";

export interface ChatAsideListProps {
  date: string;
  elements: {
    title: string;
    id: string;
  }[];
  active: string;
}

export default function ChatAsideList({ date, elements, active }: ChatAsideListProps) {
  return (
    <div className="chat-aside-list">
      <span>{date}</span>
      <ul>
        {elements.map((element) => (
          <li className={element.id === active ? "active" : ""} key={element.id}>
            {element.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
