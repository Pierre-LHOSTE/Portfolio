import type { ChannelType } from "@/components/chat-app/type";
import { create } from "zustand";

type SetStateFunction<type> = (state: type) => void;

interface ChatStoreType {
  channels: ChannelType[];
  setChannels: SetStateFunction<ChannelType[]>;
  addChannel: SetStateFunction<ChannelType>;

  renameChannel: (id: string, title: string) => void;
  updateChannel: (channel: { threadId: string } & Partial<ChannelType>) => void;
  deleteChannel: (id: string) => void;
}

export const useChatStore = create<ChatStoreType>((set) => ({
  channels: [],
  setChannels: (channels) => set({ channels }),
  addChannel: (newChannel) => set((state) => ({ channels: [...state.channels, newChannel] })),

  renameChannel: (id, title) =>
    set((state) => ({
      channels: state.channels.map((chat) => (chat.threadId === id ? { ...chat, title } : chat)),
    })),
  updateChannel: (channel) =>
    set((state) => ({
      channels: state.channels.map((chat) =>
        chat.threadId === channel.threadId ? { ...chat, ...channel, threadId: chat.threadId } : chat
      ),
    })),
  deleteChannel: (id) =>
    set((state) => ({ channels: state.channels.filter((chat) => chat.threadId !== id) })),
}));
