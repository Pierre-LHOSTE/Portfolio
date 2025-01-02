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

  showForm: boolean;
  setShowForm: SetStateFunction<boolean>;
}

export const useSettingsStore = create<SettingsStoreType>((set) => ({
  savedTheme: "auto",
  setSavedTheme: (savedTheme) => set({ savedTheme }),

  activeTheme: "dark",
  setActiveTheme: (activeTheme) => set({ activeTheme }),

  savedLanguage: "auto",
  setSavedLanguage: (savedLanguage) => set({ savedLanguage }),

  activeLanguage: "en",
  setActiveLanguage: (activeLanguage) => set({ activeLanguage }),

  imagePreview: null,
  setImagePreview: (imagePreview) => set({ imagePreview }),

  activeSection: "",
  setActiveSection: (activeSection) => set({ activeSection }),

  showForm: false,
  setShowForm: (showForm) => set({ showForm }),
}));
