import { useI18nContext } from "@/i18n/i18n-react";
import "./message.scss";

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
          // biome-ignore lint/suspicious/noArrayIndexKey: Static content
          content.map((line, index) => <span key={index}>{line}</span>)
        ) : (
          <span>{content}</span>
        )}
      </div>
    </div>
  );
}
