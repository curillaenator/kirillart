import { useCallback } from "react";
import { useStore } from "effector-react";
import { themeStore, setTheme, setDarkMode, Themes } from "@src/store/theme";

import { THEMES } from "../constants";

export const useTheme = () => {
  const { theme, darkMode } = useStore(themeStore);

  const themeSelector = useCallback(() => {
    const themesNames = Object.keys(THEMES) as Themes[];

    const curThemeIndex = themesNames.findIndex(
      (themeName) => themeName === theme
    );
    const lastIndex = themesNames.length - 1;

    if (curThemeIndex === lastIndex) return setTheme(themesNames[0]);

    setTheme(themesNames[curThemeIndex + 1]);
  }, [theme]);

  return {
    theme,
    themeSelector,
    darkmodeSetter: () => setDarkMode(!darkMode),
  };
};
