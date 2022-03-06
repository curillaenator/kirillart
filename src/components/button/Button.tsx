import React, { FC } from "react";
import cn from "classnames";

import { Shape } from "@src/components/shape";
import { Icon } from "@src/components/icon";

import { ButtonProps } from "./interfaces";

import { cnAppearance, cnSizes } from "./styles/styles";
import s from "./styles/button.module.scss";

export const Button: FC<ButtonProps> = (props) => {
  const {
    size = "l",
    isGhost = false,
    appearance = "primary",
    iconName,
    reversed = false,
    disabled = false,
    type = "button",
    className,
    children,
    ...rest
  } = props;

  return (
    <button
      {...rest}
      disabled={disabled}
      type={type}
      className={cn(s.button, cnSizes[size], className, {
        [cnAppearance[appearance]]: !isGhost && !disabled,
        [s.button_ghost]: isGhost && !disabled,
        [s.button_inversed]: reversed,
        [s.button_disabled]: disabled,
      })}
    >
      {!isGhost && <Shape className={s.button_shape} isAdaptive />}

      {iconName && <Icon iconName={iconName} className={s.button_icon} />}

      {children || ""}
    </button>
  );
};
