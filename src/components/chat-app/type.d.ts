import type { Message } from "ai";

export interface ChannelType {
  title: string;
  updatedAt: number;
  threadId: string;
}

export interface SavedMessageType extends Message {
  threadId: string;
}

export interface DatedChannelType {
  date: number;
  label: string;
  elements: ChannelType[];
}
