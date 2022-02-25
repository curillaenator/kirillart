import React, { FC } from "react";

import s from "./styles/header.module.scss";

import { setTheme, setDarkMode } from "@src/store/theme";

export const Header: FC<{ theme: string; dm: boolean }> = ({ theme, dm }) => {
  const togler = () => {
    if (theme === "default") setTheme("alt");
    if (theme === "alt") setTheme("default");
  };

  return (
    <header className={s.base}>
      <h1 className={s.title}>This is header</h1>
      <p>some text</p>
      <button onClick={togler}>change theme</button>
      <button onClick={() => setDarkMode(!dm)}>change mode</button>
    </header>
  );
};
