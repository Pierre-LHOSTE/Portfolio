import type { ImagePreviewType } from "@/components/image-preview/type";
import type { ActiveTheme, SavedTheme } from "@/types/settings";
import { create } from "zustand";

type SetStateFunction<type> = (state: type) => void;

interface SettingsStoreType {
  savedTheme: SavedTheme;
  setSavedTheme: SetStateFunction<SavedTheme>;

  activeTheme: ActiveTheme;
  setActiveTheme: SetStateFunction<ActiveTheme>;

  savedLanguage: string;
  setSavedLanguage: SetStateFunction<string>;

  activeLanguage: string;
  setActiveLanguage: SetStateFunction<string>;

  imagePreview: ImagePreviewType | null;
  setImagePreview: SetStateFunction<ImagePreviewType | null>;

  activeSection: string;
  setActiveSection: SetStateFunction<string>;
}

export const useSettingsStore = create<SettingsStoreType>((set) => ({
  savedTheme: "light",
  setSavedTheme: (savedTheme) => set({ savedTheme }),

  activeTheme: "light",
  setActiveTheme: (activeTheme) => set({ activeTheme }),

  savedLanguage: "en",
  setSavedLanguage: (savedLanguage) => set({ savedLanguage }),

  activeLanguage: "en",
  setActiveLanguage: (activeLanguage) => set({ activeLanguage }),

  imagePreview: null,
  setImagePreview: (imagePreview) => set({ imagePreview }),

  activeSection: "",
  setActiveSection: (activeSection) => set({ activeSection }),
}));
