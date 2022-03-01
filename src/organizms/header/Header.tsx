import React, { FC, memo } from "react";

import { useTheme } from "./hooks/useTheme";

import { Button } from "@src/components/button/Button";

// import { THEMES } from "./constants";

import s from "./styles/header.module.scss";

const HeaderComponent: FC = () => {
  const { themeSelector, darkmodeSetter } = useTheme();

  return (
    <header className={s.base}>
      <Button size="m" onClick={themeSelector}>
        Change theme
      </Button>

      <Button size="m" onClick={darkmodeSetter}>
        Change mode
      </Button>
    </header>
  );
};

export const Header = memo(HeaderComponent);
