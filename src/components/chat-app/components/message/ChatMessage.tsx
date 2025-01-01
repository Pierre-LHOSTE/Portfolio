import { useI18nContext } from "@/i18n/i18n-react";
import "./message.scss";
import type { ReactNode } from "react";

export interface ChatMessageProps {
  role: string;
  content: string | string[];
}

export default function ChatMessage({ role, content }: ChatMessageProps) {
  const { LL } = useI18nContext();

  return (
    <div className={`chat-message user-${role}`}>
      <div className="avatar-wrapper">
        <img src="https://placehold.co/32x32/EEE/31343C" alt={role} />
        <span>{role === "assistant" ? LL.chat.assistant() : LL.chat.user()}</span>
      </div>
      <div className="content">
        {Array.isArray(content) ? (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          content.map((line, index) => <span key={index}>{formatMessage(line)}</span>)
        ) : (
          <span>{formatMessage(content)}</span>
        )}
      </div>
    </div>
  );
}

function formatMessage(text: string): ReactNode {
  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
  return text.split("\n").map((line, i) => <p key={i}>{line.trim() || " "}</p>);
}
