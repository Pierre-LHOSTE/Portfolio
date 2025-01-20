import {
  type ChangeEvent,
  type FormEvent,
  type ForwardedRef,
  type KeyboardEvent,
  useRef,
} from "react";
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
  threadId,
  ref,
  isLoading,
}: {
  input: string;
  handleInputChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (
    event?: FormEvent<HTMLFormElement>,
    requestOptions?: {
      data?: Record<string, string>;
    }
  ) => Promise<void>;
  threadId: string;
  ref: ForwardedRef<OverlayScrollbarsComponentRef<"div">>;
  isLoading: boolean;
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { LL } = useI18nContext();

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    handleInputChange(event);
    const textarea = event.target;
    textarea.style.height = "0px";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const handleFormSubmit = (event: FormEvent | KeyboardEvent) => {
    event.preventDefault();
    handleSubmit(event as FormEvent<HTMLFormElement>);
    scrollToButton(ref, true);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      handleFormSubmit(event);
    }
  };

  return (
    <form id="chat-input" className={isLoading ? "loading" : undefined} onSubmit={handleFormSubmit}>
      <div>
        <div>
          {isLoading && <IconLoader2 />}
          <textarea
            ref={textareaRef}
            disabled={isLoading}
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
