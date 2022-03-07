import React, { FC } from "react";

import s from "./styles/scrollbar.module.scss";

export const Scrollbar: FC<{ maxHeight?: number }> = ({
  maxHeight = "9999px",
  children,
}) => {
  return (
    <div className={s.scrollbar} style={{ maxHeight }}>
      {children}
    </div>
  );
};
