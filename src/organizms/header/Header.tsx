import React, { FC } from "react";
import { useStore } from "effector-react";

import { Button } from "@src/components/button/Button";

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
      <Button size="m" onClick={togler}>
        Change theme
      </Button>

      <Button size="m" onClick={() => setDarkMode(!darkMode)}>
        Change mode
      </Button>
    </header>
  );
};
