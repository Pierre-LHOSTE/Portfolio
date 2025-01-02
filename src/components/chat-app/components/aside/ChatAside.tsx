import { useI18nContext } from "@/i18n/i18n-react";
import "./aside.scss";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
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
          <OverlayScrollbarsComponent
            defer
            style={{
              flex: 1,
            }}
          >
            {chatList.map((chat) => (
              <ChatAsideList key={chat.date} {...chat} />
            ))}
          </OverlayScrollbarsComponent>
        </nav>
      </main>
    </aside>
  );
}
