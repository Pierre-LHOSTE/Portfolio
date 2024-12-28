import { useSettingsStore } from "@/stores/settings.store";
import { useEffect, useRef } from "react";

export default function useSectionObserver(id: string) {
  const setActiveSection = useSettingsStore((state) => state.setActiveSection);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(id);
        }
      },
      { threshold: 0.5 } // La section est visible à 50 % ou plus
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [id, setActiveSection]);

  return ref;
}
