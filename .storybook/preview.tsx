import type { Preview } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";
const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
import { useSettingsStore } from "../src/stores/settings.store";
import "../src/styles/index.css";
import "../src/styles/app.css";
import "../src/styles/reset.css";

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

      return (
        <div className={isDarkTheme ? "dark-theme" : "light-theme"}>
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
