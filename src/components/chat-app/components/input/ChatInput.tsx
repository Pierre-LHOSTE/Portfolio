import { type ChangeEvent, type ForwardedRef, type KeyboardEvent, useRef } from "react";
import "./input.scss";
import Button from "@/components/button/Button";
import { useI18nContext } from "@/i18n/i18n-react";
import scrollToButton from "@/utils/scrollToButton";
import { IconArrowBigUpFilled, IconLoader2 } from "@tabler/icons-react";
import type { OverlayScrollbarsComponentRef } from "overlayscrollbars-react";

export default function ChatInput({
  input,
  handleInputChange,
  handleSubmit,
  ref,
  isLoading,
}: {
  input: any;
  handleInputChange: any;
  handleSubmit: any;
  ref: ForwardedRef<OverlayScrollbarsComponentRef<"div">>;
  isLoading: boolean;
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
      // className={isLoading ? "loading" : undefined}
      className="loading"
      onSubmit={(event) => {
        handleSubmit(event);
        scrollToButton(ref);
      }}
    >
      <div>
        <div>
          {isLoading && <IconLoader2 />}
          <textarea
            ref={textareaRef}
            // disabled={isLoading}
            disabled={true}
            // placeholder={LL.chat.type()}
            placeholder="Not available at the moment"
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
