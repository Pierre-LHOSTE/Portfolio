import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import ChatMessage, { type ChatMessageProps } from "../messsage/ChatMessage";
import "./content.scss";

export default function ChatContent({
  chat,
}: {
  chat: ChatMessageProps[];
}) {
  return (
    <OverlayScrollbarsComponent
      defer
      style={{
        flex: 1,
      }}
    >
      <div id="chat-content">
        {chat.map((chat, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <ChatMessage key={index} {...chat} />
        ))}
      </div>
    </OverlayScrollbarsComponent>
  );
}
