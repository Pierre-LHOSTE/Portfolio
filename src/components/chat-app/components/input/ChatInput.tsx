import { type ChangeEvent, useRef } from "react";
import "./input.scss";

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

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    handleInputChange(event);
    const textarea = event.target;
    textarea.style.height = "0px";
    textarea.style.height = `${textarea.scrollHeight + 0}px`;
  };

  // <Button Icon={IconArrowBigUpFilled} type="primary" />

  return (
    <form id="chat-input" onSubmit={handleSubmit}>
      <div>
        <div>
          <textarea
            ref={textareaRef}
            placeholder="Type a message"
            value={input}
            onChange={handleChange}
            rows={1}
            style={{
              overflow: "hidden",
              resize: "none",
              height: "auto",
            }}
          />
          {input !== "" && <button type="submit">Submit</button>}
        </div>
      </div>
    </form>
  );
}
