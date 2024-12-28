import type { ReactNode } from "react";

interface FooterColumnsType {
  title: string;
  urls: {
    title: ReactNode;
    url?: string;
  }[];
}
