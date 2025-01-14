import type { OverlayScrollbarsComponentRef } from "overlayscrollbars-react";
import type { ForwardedRef } from "react";

function handleScroll(element: HTMLElement | null, force: boolean) {
  if (element) {
    const scrollHeight = element.scrollHeight;
    const currentScrollTop = element.scrollTop;
    const distanceToBottom = scrollHeight - currentScrollTop - element.clientHeight;

    if (force || distanceToBottom <= 200) {
      element.scrollTop = scrollHeight;
    }
  }
}

export default function scrollToButton(
  ref: ForwardedRef<OverlayScrollbarsComponentRef<"div">>,
  force = false
) {
  const overlayElement = ref && "current" in ref && ref.current ? ref.current.getElement() : null;

  handleScroll(overlayElement, force);

  const directElement = document.querySelector<HTMLElement>(
    "#chat-app > main div[data-overlayscrollbars-contents]"
  );

  handleScroll(directElement, force);
}
