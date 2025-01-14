import type { Preview } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React, { useEffect, useState } from "react";
const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
import { useSettingsStore } from "../src/stores/settings.store";
import "../src/styles/index.css";
import "../src/styles/app.css";
import "../src/styles/reset.css";
import TypesafeI18n from "../src/i18n/i18n-react";
import { loadLocaleAsync } from "../src/i18n/i18n-util.async";
import "overlayscrollbars/overlayscrollbars.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    backgrounds: {
      default: isDarkTheme ? "dark" : "light",
      values: [
        { name: "light", value: "#fff" },
        { name: "dark", value: "#000" },
      ],
    },

    nextjs: {
      appDirectory: true,
      router: {
        basePath: "/",
      },
    },
  },

  decorators: [
    (Story) => {
      const setActiveTheme = useSettingsStore((state) => state.setActiveTheme);
      setActiveTheme(isDarkTheme ? "dark" : "light");
      const locale = "fr";
      const [localesLoaded, setLocalesLoaded] = useState(false);

      useEffect(() => {
        loadLocaleAsync(locale).then(() => setLocalesLoaded(true));
      }, []);

      if (!localesLoaded) {
        return null;
      }

      return (
        <div className={isDarkTheme ? "dark-theme" : "light-theme"}>
          <TypesafeI18n locale={locale}>
            <Story />
          </TypesafeI18n>
        </div>
      );
    },
  ],
};

export default preview;
