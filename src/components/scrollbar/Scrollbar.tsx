import React, { forwardRef } from "react";

import s from "./styles/scrollbar.module.scss";

interface ScrollbarProps {
  maxHeight?: number;
}

const Scrollbar = forwardRef<HTMLDivElement, ScrollbarProps>((props, ref) => {
  const { maxHeight = "9999px", children } = props;

  return (
    <div className={s.scrollbar} style={{ maxHeight }} ref={ref}>
      {children}
    </div>
  );
});

Scrollbar.displayName = "Scrollbar";

export { Scrollbar };
