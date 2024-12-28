"use client";
import "@/styles/reset.css";
import "@/styles/index.css";
import type { ReactNode } from "react";
import Locale from "./i18n";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Locale>{children}</Locale>
      </body>
    </html>
  );
}
