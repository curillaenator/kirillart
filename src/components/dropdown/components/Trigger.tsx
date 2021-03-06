import React, { FC } from "react";
import { Shape } from "@src/components/shape";

import { TriggerProps } from "./interfaces";

import s from "../styles/dropdown.module.scss";

export const Trigger: FC<TriggerProps> = (props) => {
  const { title, onOpen } = props;

  return (
    <button className={s.trigger} onClick={onOpen} type="button">
      <Shape className={s.trigger_shape} borderRadius={16} />

      <span className={s.trigger_title}>{title}</span>

      <svg
        className={s.trigger_icon}
        width="8"
        height="6"
        viewBox="0 0 8 6"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0.706206 2.41374L3.29621 5.00374C3.68621 5.39374 4.31621 5.39374 4.70621 5.00374L7.29621 2.41374C7.92621 1.78374 7.47621 0.703735 6.58621 0.703735H1.40621C0.516206 0.703735 0.0762062 1.78374 0.706206 2.41374Z" />
      </svg>
    </button>
  );
};
