import React, { FC } from "react";
import cn from "classnames";

import { Techicon } from "@src/components/icon";

import { TechblockProps } from "../interfaces";

import s from "../styles/skills.module.scss";

export const Techblock: FC<TechblockProps> = ({ title, techlist }) => {
  return (
    <div className={s.techblock}>
      <h3 className={cn(s.texts_right, s.texts_mb16)}>{title}</h3>

      <div className={cn(s.flexrow)}>
        {techlist.map((tech) => (
          <Techicon key={tech} iconName={tech} />
        ))}
      </div>
    </div>
  );
};
