import TypesafeI18n from "@/i18n/i18n-react";
import type { Locales } from "@/i18n/i18n-types";
import { detectLocale } from "@/i18n/i18n-util";
import { loadAllLocalesAsync } from "@/i18n/i18n-util.async";
import { useSettingsStore } from "@/stores/settings.store";
import { type ReactNode, useEffect, useState } from "react";
import { navigatorDetector } from "typesafe-i18n/detectors";

export default function Locale({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const savedLocale = useSettingsStore((state) => state.savedLanguage);
  const firstLocale =
    savedLocale === "auto" ? detectLocale(navigatorDetector) : (savedLocale as Locales);
  const [locale, setLocale] = useState<Locales>(firstLocale);
  const [localesLoaded, setLocalesLoaded] = useState(false);
  const setSavedLocale = useSettingsStore((state) => state.setSavedLanguage);

  useEffect(() => {
    if (savedLocale === "auto") {
      setLocale(detectLocale(navigatorDetector));
    } else {
      setLocale(savedLocale as Locales);
    }
  }, [savedLocale]);

  useEffect(() => {
    const localLocale = localStorage.getItem("locale") || "";
    if (!["en", "fr", "auto"].includes(localLocale)) {
      localStorage.setItem("locale", "auto");
    }
    if (["en", "fr", "auto"].includes(localLocale)) {
      setSavedLocale(localLocale);
    }
  }, [setSavedLocale]);

  useEffect(() => {
    loadAllLocalesAsync().then(() => setLocalesLoaded(true));
  }, []);

  if (!localesLoaded) {
    return null;
  }

  return (
    <TypesafeI18n key={locale} locale={locale}>
      {children}
    </TypesafeI18n>
  );
}
