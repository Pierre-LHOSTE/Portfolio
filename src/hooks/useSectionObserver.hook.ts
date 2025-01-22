import { useSettingsStore } from "@/stores/settings.store";
import { useEffect, useRef } from "react";

const PADDING = 0.4;

export default function useSectionObserver(id: string) {
  const ref = useRef<HTMLDivElement>(null);
  const setActiveSection = useSettingsStore((state) => state.setActiveSection);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const height = window.innerHeight * PADDING;
        const isVisible = rect.bottom >= height && rect.top <= height;
        if (isVisible) {
          setActiveSection(id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [id, setActiveSection]);

  return ref;
}
