import React, { FC } from "react";
import cn from "classnames";

import { Shape } from "@src/components/shape";
import { Icon } from "@src/components/icon";

import { SwitchProps } from "./interfaces";

import s from "./styles/switch.module.scss";

export const Switch: FC<SwitchProps> = (props) => {
  const { size = "xs", icon, value, onChange } = props;

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

        {icon && <Icon iconName={icon} className={s.switch_toggler_icon} />}
      </div>
    </button>
  );
};
