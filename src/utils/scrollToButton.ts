import type { OverlayScrollbarsComponentRef } from "overlayscrollbars-react";
import type { ForwardedRef } from "react";

export default function scrollToButton(
  ref: ForwardedRef<OverlayScrollbarsComponentRef<"div">>,
  force = false
) {
  if (ref && "current" in ref && ref.current) {
    const osInstance = ref.current.osInstance();
    const viewport = osInstance?.elements().viewport;

    if (viewport) {
      const currentScrollTop = viewport.scrollTop;
      const scrollHeight = viewport.scrollHeight;
      const distanceToBottom = scrollHeight - currentScrollTop - viewport.clientHeight;

      if (force || distanceToBottom > 32) {
        viewport.scroll({
          top: scrollHeight,
          behavior: "smooth",
        });
      }
    }
  }
}
