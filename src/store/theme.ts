import { createStore, createEvent } from "effector";

type Themes = "default" | "alt";

interface ThemeStore {
  theme: Themes;
  darkMode: boolean;
}

const INITIAL_THEME: ThemeStore = {
  theme: "default",
  darkMode: false,
};

export const setTheme = createEvent<Themes>();
export const setDarkMode = createEvent<boolean>();

export const themeStore = createStore<ThemeStore>(INITIAL_THEME)
  .on(setTheme, (state, theme) => ({ ...state, theme }))
  .on(setDarkMode, (state, darkMode) => ({ ...state, darkMode }));
