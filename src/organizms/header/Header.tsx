import React, { FC } from "react";

import s from "./styles/header.module.scss";

import { setTheme } from "@src/store/theme";

export const Header: FC<{ theme: string }> = ({ theme }) => {
  const togler = () => {
    if (theme === "default") setTheme("alt");
    if (theme === "alt") setTheme("default");
  };

  return (
    <header className={s.base}>
      <h1 className={s.title}>This is header</h1>
      <button onClick={togler}>change theme</button>
    </header>
  );
};
