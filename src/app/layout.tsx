import "@/styles/reset.css";
import "@/styles/index.css";
import "@/styles/fonts.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Locale from "./i18n";
import Theme from "./theme";

export const metadata: Metadata = {
  title: "Pierre LHOSTE",
  description:
    "I’m Pierre LHOSTE, a Developer and Designer web based in France. I’m passionate about crafting beautiful, functional websites and solving problems through creative thinking",
};

// biome-ignore lint/nursery/useComponentExportOnlyModules: <explanation>
export const viewport = {
  width: "device-width",
  initialScale: 0.25,
};

export default async function RootLayout({
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
        <Analytics />
      </body>
    </html>
  );
}
