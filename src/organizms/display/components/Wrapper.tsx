import React, { FC } from "react";

import s from "../styles/display.module.scss";

export const Wrapper: FC = ({ children }) => {
  return <div className={s.screenWrapper}>{children}</div>;
};
