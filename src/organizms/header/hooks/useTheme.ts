import { useStore } from "effector-react";
import { themeStore, setTheme, setDarkMode, Themes } from "@src/store/theme";

import { THEMES } from "../constants";

export const useTheme = () => {
  const { theme, darkMode } = useStore(themeStore);

  const themesNames = Object.keys(THEMES) as Themes[];

  const themesList = themesNames.map((themeName) => ({
    title: THEMES[themeName],
    onClick: () => setTheme(themeName),
  }));

  return {
    darkMode,
    theme,
    themesList,
    darkmodeSetter: () => setDarkMode(!darkMode),
  };
};
