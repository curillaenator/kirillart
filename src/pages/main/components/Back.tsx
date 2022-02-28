import React, { FC } from "react";
import cn from "classnames";

import s from "./styles/layers.module.scss";

export const Back: FC = () => {
  return (
    <div className={s.layers}>
      <div className={cn(s.circle, s.circle_primary, s.circle_2xl)} />
      <div className={cn(s.circle, s.circle_positive, s.circle_l)} />
    </div>
  );
};
