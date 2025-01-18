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
  updateUpdatedAt: (id: string) => void;
  deleteChat: (id: string) => void;
  setLastActiveChat: () => void;
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
  updateUpdatedAt: (id) =>
    set((state) => ({
      chatList: state.chatList.map((chat) =>
        chat.id === id ? { ...chat, updatedAt: new Date().getTime().toString() } : chat
      ),
    })),
  deleteChat: (id) =>
    set((state) => ({ chatList: state.chatList.filter((chat) => chat.id !== id) })),
  setLastActiveChat: () =>
    set((state) => ({ activeChat: state.chatList[state.chatList.length - 1].id })),
}));
