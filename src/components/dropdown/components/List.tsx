import React, { forwardRef, useCallback } from "react";
import cn from "classnames";

import { Shape } from "@src/components/shape";

import { ListProps } from "./interfaces";

import s from "../styles/dropdown.module.scss";

export const List = forwardRef<HTMLDivElement, ListProps>((props, ref) => {
  const { list, onClose } = props;

  const handleClick = useCallback((itemClick: () => void) => {
    itemClick();
    onClose();
  }, []);

  return (
    <div className={s.list} ref={ref}>
      <Shape className={s.list_shape} />

      {list.map((item) => (
        <button
          key={item.title}
          className={cn(
            s.list_item,
            s[`list_item_${String(item.title).toLowerCase()}`]
          )}
          onClick={() => handleClick(item.onClick)}
          type="button"
        >
          {item.title}

          <div className={s.list_item_color} />
        </button>
      ))}
    </div>
  );
});
