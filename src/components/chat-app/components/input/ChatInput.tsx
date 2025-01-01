import { type ChangeEvent, type KeyboardEvent, useRef } from "react";
import "./input.scss";
import Button from "@/components/button/Button";
import { useI18nContext } from "@/i18n/i18n-react";
import { IconArrowBigUpFilled } from "@tabler/icons-react";

export default function ChatInput({
  input,
  handleInputChange,
  handleSubmit,
}: {
  input: any;
  handleInputChange: any;
  handleSubmit: any;
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { LL } = useI18nContext();

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    handleInputChange(event);
    const textarea = event.target;
    textarea.style.height = "0px";
    textarea.style.height = `${textarea.scrollHeight + 0}px`;
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit(event);
    }
  };

  return (
    <form id="chat-input" onSubmit={handleSubmit}>
      <div>
        <div>
          <textarea
            ref={textareaRef}
            placeholder={LL.chat.type()}
            value={input}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            rows={1}
            style={{
              overflow: "hidden",
              resize: "none",
              height: "auto",
            }}
          />
          {input !== "" && <Button type="submit" Icon={IconArrowBigUpFilled} />}
        </div>
      </div>
    </form>
  );
}
