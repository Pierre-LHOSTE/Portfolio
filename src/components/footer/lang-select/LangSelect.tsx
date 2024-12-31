import Select from "@/components/select/Select";
import { useI18nContext } from "@/i18n/i18n-react";
import type { Locales } from "@/i18n/i18n-types";
import { useSettingsStore } from "@/stores/settings.store";
import { useEffect, useState } from "react";

const locales = ["en", "fr"] as Locales[];

export default function LangSelect() {
  const { LL } = useI18nContext();
  const [selectedLocale, setSelectedLocale] = useState<string | null>(null);
  const setSavedLocale = useSettingsStore((state) => state.setSavedLanguage);
  const savedLocale = useSettingsStore((state) => state.savedLanguage);

  useEffect(() => {
    setSelectedLocale(savedLocale);
  }, [savedLocale]);

  useEffect(() => {
    if (selectedLocale === null) return;
    setSavedLocale(selectedLocale);
    localStorage.setItem("locale", selectedLocale);
  }, [selectedLocale, setSavedLocale]);

  return (
    <Select
      options={[
        ...locales.map((locale) => ({
          value: locale,
          label: LL.locale[locale](),
        })),
        {
          value: "auto",
          label: LL.locale.auto(),
        },
      ]}
      handleChange={(locale) => setSelectedLocale(locale)}
      value={selectedLocale ?? ""}
      setValue={setSelectedLocale}
    />
  );
}
