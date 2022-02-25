import React, { FC } from "react";
import cn from "classnames";
import { Outlet } from "react-router-dom";
import { useStore } from "effector-react";

import { Header } from "@src/organizms";

import { themeStore } from "@src/store/theme";

import s from "./styles/layout.module.scss";

export const Layout: FC = () => {
  const { theme } = useStore(themeStore);

  return (
    <div className={cn(s.base, s[theme])}>
      <Header theme={theme} />

      <Outlet />
    </div>
  );
};
