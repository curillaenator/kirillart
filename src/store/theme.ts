import { createStore, createEvent } from "effector";

type Themes = "default" | "alt";
interface ThemeStore {
  theme: Themes;
}

export const setTheme = createEvent<Themes>();

export const themeStore = createStore<ThemeStore>({ theme: "default" }).on(
  setTheme,
  (state, theme) => ({ ...state, theme })
);
