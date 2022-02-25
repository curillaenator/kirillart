import React, { FC } from "react";

import s from "./styles/header.module.scss";

export const Header: FC = () => {
  return (
    <header className={s.base}>
      <h1 className={s.title}>This is header</h1>
      <p>flex?</p>
    </header>
  );
};
