import type { OverlayScrollbarsComponentRef } from "overlayscrollbars-react";
import type { ForwardedRef } from "react";

export default function scrollToButton(
  ref: ForwardedRef<OverlayScrollbarsComponentRef<"div">>,
  force = false
) {
  if (ref && "current" in ref && ref.current) {
    const element = ref.current.getElement();

    if (element) {
      const scrollHeight = element.scrollHeight;
      const currentScrollTop = element.scrollTop;
      const distanceToBottom = scrollHeight - currentScrollTop - element.clientHeight;

      if (force || distanceToBottom > 32) {
        element.scrollTop = scrollHeight;
      }
    }
  }

  const el = document.querySelector("#chat-app > main div[data-overlayscrollbars-contents]");

  if (el) {
    const scrollHeight = el.scrollHeight;
    const currentScrollTop = el.scrollTop;
    const distanceToBottom = scrollHeight - currentScrollTop - el.clientHeight;

    if (force || distanceToBottom > 32) {
      el.scrollTop = scrollHeight;
    }
  }
}
