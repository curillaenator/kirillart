import React, { FC } from "react";
import cn from "classnames";
import { Outlet } from "react-router-dom";
import { useStore } from "effector-react";

import { themeStore } from "@src/store/theme";

import s from "./styles/layout.module.scss";

export const Layout: FC = () => {
  const { theme, darkMode } = useStore(themeStore);

  return (
    <div
      className={cn(s.base, s[theme], {
        [s.base_darkmode]: darkMode,
        [s.base_lightmode]: !darkMode,
      })}
    >
      <Outlet />
    </div>
  );
};
