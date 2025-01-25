"use client";
import { useSettingsStore } from "@/stores/settings.store";
import type { SavedTheme } from "@/types/settings";
import localforage from "localforage";
import { type ReactNode, useEffect, useState } from "react";

export default function Theme({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const savedTheme = useSettingsStore((state) => state.savedTheme);
  const setSavedTheme = useSettingsStore((state) => state.setSavedTheme);
  const activeTheme = useSettingsStore((state) => state.activeTheme);
  const setActiveTheme = useSettingsStore((state) => state.setActiveTheme);

  const [init, setInit] = useState(false);

  useEffect(() => {
    localforage.getItem<string>("theme").then((localTheme) => {
      if (!["dark", "light", "auto"].includes(localTheme || "")) {
        localforage.setItem("theme", "auto");
      }
      if (["dark", "light", "auto"].includes(localTheme || "")) {
        setSavedTheme(localTheme as SavedTheme);
      }
    });
  }, [setSavedTheme]);

  useEffect(() => {
    const darkThemeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const updateTheme = () => {
      if (savedTheme === "dark" || savedTheme === "light") {
        setActiveTheme(savedTheme);
        setInit(true);
      } else {
        setActiveTheme(darkThemeMediaQuery.matches ? "dark" : "light");
        setInit(true);
      }
    };

    const themeChangeListener = (e: MediaQueryListEvent) => {
      if (savedTheme === "auto") {
        setActiveTheme(e.matches ? "dark" : "light");
        setInit(true);
      }
    };

    updateTheme();
    darkThemeMediaQuery.addEventListener("change", themeChangeListener);

    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(`${activeTheme}-theme`);

    return () => {
      darkThemeMediaQuery.removeEventListener("change", themeChangeListener);
    };
  }, [activeTheme, savedTheme, setActiveTheme]);

  if (!init) {
    return null;
  }

  return <>{children}</>;
}
