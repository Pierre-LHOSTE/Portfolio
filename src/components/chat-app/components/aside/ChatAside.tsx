import { useI18nContext } from "@/i18n/i18n-react";
import "./aside.scss";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import type { DatedChannelType } from "../../type";
import ChatAsideList from "./list/ChatAsideList";

export default function ChatAside({
  datedChannelList,
  setThreadId,
  threadId,
  deleteMessages,
  searchQuery,
  setSearchQuery,
}: {
  datedChannelList: DatedChannelType[];
  setThreadId: (threadId: string | undefined) => void;
  threadId: string;
  deleteMessages: (threadId: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
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
        <input
          type="text"
          placeholder={LL.chat.search()}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <nav>
          <OverlayScrollbarsComponent
            defer
            style={{
              flex: 1,
            }}
          >
            {datedChannelList.map((chat) => (
              <ChatAsideList
                key={chat.date}
                {...chat}
                setThreadId={setThreadId}
                threadId={threadId}
                deleteMessages={deleteMessages}
              />
            ))}
          </OverlayScrollbarsComponent>
        </nav>
      </main>
    </aside>
  );
}
