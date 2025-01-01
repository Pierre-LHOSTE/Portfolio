import { type ChangeEvent, type ForwardedRef, type KeyboardEvent, useRef } from "react";
import "./input.scss";
import Button from "@/components/button/Button";
import { useI18nContext } from "@/i18n/i18n-react";
import scrollToButton from "@/utils/scrollToButton";
import { IconArrowBigUpFilled } from "@tabler/icons-react";
import type { OverlayScrollbarsComponentRef } from "overlayscrollbars-react";

export default function ChatInput({
  input,
  handleInputChange,
  handleSubmit,
  ref,
}: {
  input: any;
  handleInputChange: any;
  handleSubmit: any;
  ref: ForwardedRef<OverlayScrollbarsComponentRef<"div">>;
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
      scrollToButton(ref);
    }
  };

  return (
    <form
      id="chat-input"
      onSubmit={(event) => {
        handleSubmit(event);
        scrollToButton(ref);
      }}
    >
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
