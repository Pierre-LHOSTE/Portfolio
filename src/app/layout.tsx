import type { Metadata } from "next";
import "@/styles/reset.css";
import "@/styles/index.css";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
