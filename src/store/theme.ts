import { createStore, createEvent } from "effector";

export type Themes =
  | "default"
  | "firecracker"
  | "life"
  | "ocean"
  | "alternative";

interface ThemeStore {
  theme: Themes;
  darkMode: boolean;
}

const INITIAL_THEME: ThemeStore = {
  theme: "ocean",
  darkMode: true,
};

export const setTheme = createEvent<Themes>();
export const setDarkMode = createEvent<boolean>();

export const themeStore = createStore<ThemeStore>(INITIAL_THEME)
  .on(setTheme, (state, theme) => ({ ...state, theme }))
  .on(setDarkMode, (state, darkMode) => ({ ...state, darkMode }));
