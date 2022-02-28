import React, { FC } from "react";
import { useStore } from "effector-react";

import s from "./styles/header.module.scss";

import { themeStore, setTheme, setDarkMode } from "@src/store/theme";

export const Header: FC = () => {
  const { theme, darkMode } = useStore(themeStore);

  const togler = () => {
    if (theme === "default") setTheme("alt");
    if (theme === "alt") setTheme("default");
  };

  return (
    <header className={s.base}>
      <button onClick={togler}>change theme</button>
      <h1 className={s.title}>This is header</h1>
      <p>some text</p>
      <button onClick={() => setDarkMode(!darkMode)}>change mode</button>
    </header>
  );
};
