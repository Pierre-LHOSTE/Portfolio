"use client";
import "@/styles/reset.css";
import "@/styles/index.css";
import "@/styles/fonts.css";
import type { ReactNode } from "react";
import Locale from "./i18n";
import Theme from "./theme";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Locale>
          <Theme>{children}</Theme>
        </Locale>
      </body>
    </html>
  );
}
