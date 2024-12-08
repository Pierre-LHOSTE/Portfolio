import "./aside.scss";
import ChatAsideList, { type ChatAsideListProps } from "./list/ChatAsideList";

export default function ChatAside({
  chatList,
}: {
  chatList: ChatAsideListProps[];
}) {
  return (
    <aside id="chat-aside">
      <header>
        <span id="red" />
        <span id="yellow" />
        <span id="green" />
      </header>
      <main>
        <input type="text" placeholder="Search" />
        <nav>
          {chatList.map((chat) => (
            <ChatAsideList key={chat.date} {...chat} />
          ))}
        </nav>
      </main>
    </aside>
  );
}
