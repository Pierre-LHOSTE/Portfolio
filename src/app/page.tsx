"use client";
import Background from "@/components/background/Background";
import ChatApp from "@/components/chat-app/ChatApp";
import Scroll from "@/components/chat-app/components/scroll/Scroll";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import { useEffect } from "react";
import "@/styles/app.css";
import type { SavedTheme } from "@/types/settings";
import "overlayscrollbars/overlayscrollbars.css";
import Footer from "@/components/footer/Footer";
import ImagePreview from "@/components/image-preview/ImagePreview";
import Projects from "@/components/projects/ProjectsList";
import Stacks from "@/components/stack/Stacks";
import Timeline from "@/components/timeline/Timeline";
import { useSettingsStore } from "@/stores/settings.store";

export default function Home() {
  const activeTheme = useSettingsStore((state) => state.activeTheme);
  const savedTheme = useSettingsStore((state) => state.savedTheme);
  const setActiveTheme = useSettingsStore((state) => state.setActiveTheme);
  const setSavedTheme = useSettingsStore((state) => state.setSavedTheme);

  useEffect(() => {
    const localTheme = localStorage.getItem("theme") || "";
    // If localTheme is not a valid theme, set it to "auto"
    if (!["dark", "light", "auto"].includes(localTheme)) {
      localStorage.setItem("theme", "auto");
    }
    if (["dark", "light", "auto"].includes(localTheme)) {
      setSavedTheme(localTheme as SavedTheme);
    }
  }, [setSavedTheme]);

  useEffect(() => {
    const darkThemeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const updateTheme = () => {
      if (savedTheme === "dark" || savedTheme === "light") {
        setActiveTheme(savedTheme);
      } else {
        setActiveTheme(darkThemeMediaQuery.matches ? "dark" : "light");
      }
    };

    const themeChangeListener = (e: MediaQueryListEvent) => {
      console.log("Theme changed to", e.matches ? "dark" : "light");

      if (savedTheme === "auto") {
        setActiveTheme(e.matches ? "dark" : "light");
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

  return (
    <>
      <Background />
      <Header />
      <Hero />
      <Scroll />
      <ChatApp />
      <Stacks />
      <Timeline />
      <Projects />
      <ImagePreview />
      <Footer />
    </>
  );
}
