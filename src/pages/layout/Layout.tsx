import React, { FC } from "react";
import cn from "classnames";
import { Outlet } from "react-router-dom";

import { themes } from "./styles/themes";

import { LayoutProps } from "./interfaces";

import styles from "./styles/layout.module.scss";

export const Layout: FC<LayoutProps> = ({ theme = "alt" }) => {
  return (
    <div className={cn(styles.base, themes[theme])}>
      <Outlet />
    </div>
  );
};
