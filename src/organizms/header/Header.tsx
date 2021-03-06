import React, { FC, memo } from "react";

import { useTheme } from "./hooks/useTheme";

import { Switch } from "@src/components/switch";
import { Dropdown } from "@src/components/dropdown";

import { THEMES } from "./constants";

import s from "./styles/header.module.scss";

const HeaderComponent: FC = () => {
  const { theme, themesList, darkMode, darkmodeSetter } = useTheme();

  return (
    <header className={s.base}>
      <div className={s.block}>
        <Dropdown title={THEMES[theme]} list={themesList} />
      </div>

      <div className={s.block}>
        <Switch
          size="l"
          icon="mode"
          value={darkMode}
          onChange={darkmodeSetter}
        />
      </div>
    </header>
  );
};

export const Header = memo(HeaderComponent);
