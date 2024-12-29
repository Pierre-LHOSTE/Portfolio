import Select from "@/components/select/Select";
import { useI18nContext } from "@/i18n/i18n-react";
import type { Locales } from "@/i18n/i18n-types";
import { useState } from "react";

const locales = ["en", "fr"] as Locales[];

export default function LangSelect() {
  const { LL, setLocale } = useI18nContext();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <Select
      options={locales.map((locale) => ({
        value: locale,
        label: LL.locale[locale](),
      }))}
      handleChange={(local) => setLocale(local as Locales)}
    />
  );
}
