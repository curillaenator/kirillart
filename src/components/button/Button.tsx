import React, { FC, forwardRef } from "react";
import cn from "classnames";
import { Shape } from "@src/components/shape";

import { ButtonProps } from "./interfaces";

import s from "./styles/button.module.scss";

export const Button: FC<ButtonProps> = (props) => {
  const { size = "l", appearance = "primary", children, ...rest } = props;

  return (
    <button
      {...rest}
      className={cn(s.button, s[`button_${size}`], s[`button_${appearance}`])}
    >
      <Shape className={s.button_shape} isAdaptive />

      {children || ""}
    </button>
  );
};
