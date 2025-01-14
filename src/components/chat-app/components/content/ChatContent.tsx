import {
  OverlayScrollbarsComponent,
  type OverlayScrollbarsComponentRef,
} from "overlayscrollbars-react";
import "./content.scss";
import scrollToButton from "@/utils/scrollToButton";
import type { ForwardedRef } from "react";
import type { ChatMessageProps } from "../message/ChatMessage";
import ChatMessage from "../message/ChatMessage";

export default function ChatContent({
  chat,
  ref,
}: {
  chat: ChatMessageProps[];
  ref: ForwardedRef<OverlayScrollbarsComponentRef<"div">>;
}) {
  return (
    <OverlayScrollbarsComponent
      defer
      style={{
        flex: 1,
      }}
      ref={ref}
      onLoad={() => scrollToButton(ref, true)}
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
