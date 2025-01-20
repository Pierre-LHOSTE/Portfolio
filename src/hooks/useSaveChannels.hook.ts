import type { ChannelType } from "@/components/chat-app/type";
import localforage from "localforage";
import { useEffect } from "react";

export default function useSaveChannels({
  channels,
}: {
  channels: ChannelType[];
}) {
  useEffect(() => {
    if (!channels) return;
    (async () => {
      await localforage.setItem("channels", channels);
    })();
  }, [channels]);
}
