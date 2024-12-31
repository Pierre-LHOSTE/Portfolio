import Select from "@/components/select/Select";
import { useI18nContext } from "@/i18n/i18n-react";
import { useSettingsStore } from "@/stores/settings.store";
import type { SavedTheme } from "@/types/settings";
import { useEffect, useState } from "react";

const themes = ["dark", "light", "auto"] as SavedTheme[];

export default function LangSelect() {
  const { LL } = useI18nContext();
  const savedTheme = useSettingsStore((state) => state.savedTheme);
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const setSavedTheme = useSettingsStore((state) => state.setSavedTheme);

  useEffect(() => {
    setSelectedTheme(savedTheme);
  }, [savedTheme]);

  useEffect(() => {
    if (selectedTheme === null) return;
    setSavedTheme(selectedTheme as SavedTheme);
    localStorage.setItem("theme", selectedTheme);
  }, [selectedTheme, setSavedTheme]);

  return (
    <Select
      options={themes.map((theme) => ({
        value: theme,
        label: LL.theme[theme](),
      }))}
      handleChange={(theme) => setSelectedTheme(theme as SavedTheme)}
      value={selectedTheme ?? ""}
      setValue={setSelectedTheme}
    />
  );
}
