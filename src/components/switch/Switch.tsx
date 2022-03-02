import React, { FC } from "react";
import cn from "classnames";

import { Shape } from "@src/components/shape";
import { SwitchProps } from "./interfaces";

import { icons } from "@src/assets/icons";

import s from "./styles/switch.module.scss";

export const Switch: FC<SwitchProps> = (props) => {
  const { size = "xs", icon, value, onChange } = props;

  const IconComponent = (icon ? icons[icon] : "svg") as React.ElementType;

  return (
    <button
      type="button"
      className={cn(s.switch, s[`switch_${size}`], {
        [s.switch_active]: value,
      })}
      onClick={() => onChange(!value)}
    >
      <Shape className={s.switch_shape} borderRadius={16} />

      <div className={s.switch_toggler}>
        <Shape className={s.switch_toggler_shape} borderRadius={16} />

        {icon && <IconComponent className={s.switch_toggler_icon} />}
      </div>
    </button>
  );
};
