import React, { FC } from "react";
import cn from "classnames";

import { Techicon } from "@src/components/icon";

import { TechblockProps } from "../interfaces";

import s from "../styles/skills.module.scss";

export const Techblock: FC<TechblockProps> = ({ title, techlist }) => {
  return (
    <div>
      <h3 className={cn(s.texts_right, s.texts_mb8)}>{title}</h3>

      <div className={s.flexrow}>
        {techlist.map((tech) => (
          <Techicon iconName={tech} />
        ))}
      </div>
    </div>
  );
};
