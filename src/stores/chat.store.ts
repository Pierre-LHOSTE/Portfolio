import type { ChatListElementType } from "@/components/chat-app/type";
import { create } from "zustand";

type SetStateFunction<type> = (state: type) => void;

interface ChatStoreType {
  chatList: ChatListElementType[];
  setChatList: SetStateFunction<ChatListElementType[]>;
  addChat: SetStateFunction<ChatListElementType>;

  activeChat: string;
  setActiveChat: SetStateFunction<string>;
  renameChat: (id: string, title: string) => void;
}

export const useChatStore = create<ChatStoreType>((set) => ({
  chatList: [],
  setChatList: (chatList) => set({ chatList }),
  addChat: (chat) => set((state) => ({ chatList: [...state.chatList, chat] })),

  activeChat: "1",
  setActiveChat: (activeChat) => set({ activeChat }),

  renameChat: (id, title) =>
    set((state) => ({
      chatList: state.chatList.map((chat) => (chat.id === id ? { ...chat, title } : chat)),
    })),
}));
