import React, { FC } from "react";
import cn from "classnames";

import { CirclesLayerProps } from "./interfaces";

import s from "./styles/layers.module.scss";

export const CirclesLayer: FC<CirclesLayerProps> = ({
  circles = [],
  opacity = "100",
}) => {
  return (
    <div className={s.layers}>
      {circles.map((circle) => (
        <div
          className={cn(
            s.circle,
            s[`circle_${circle.color}`],
            s[`circle_${circle.size}`],
            s[`circle_${opacity}`]
          )}
          style={circle.style}
        />
      ))}
    </div>
  );
};
