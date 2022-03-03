import React, { FC } from "react";
import cn from "classnames";

import { icons } from "@src/assets/icons";
import { IconProps } from "./interfaces";

import s from "./styles/icon.module.scss";

export const Icon: FC<IconProps> = ({ iconName, className }) => {
  const IconComponent = icons[iconName] as React.ElementType;
  return <IconComponent className={cn(className, s.icon)} />;
};
