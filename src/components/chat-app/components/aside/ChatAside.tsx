import { useI18nContext } from "@/i18n/i18n-react";
import "./aside.scss";
import ChatAsideList, { type ChatAsideListProps } from "./list/ChatAsideList";

export default function ChatAside({
  chatList,
}: {
  chatList: ChatAsideListProps[];
}) {
  const { LL } = useI18nContext();
  return (
    <aside id="chat-aside">
      <header>
        <span id="red" />
        <span id="yellow" />
        <span id="green" />
      </header>
      <main>
        <input type="text" placeholder={LL.chat.search()} />
        <nav>
          {chatList.map((chat) => (
            <ChatAsideList key={chat.date} {...chat} />
          ))}
        </nav>
      </main>
    </aside>
  );
}
