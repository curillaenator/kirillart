import React, { FC } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

import { LAYERS } from "./constants";
import { CirclesLayerProps } from "./interfaces";

import s from "./styles/circles.module.scss";

export const CirclesLayer: FC<CirclesLayerProps> = ({ circlePositions }) => {
  return (
    <div className={s.circles}>
      {LAYERS.map((layer) => {
        const { posKey, circle } = layer;

        return (
          <Link
            key={circle.title}
            to={circle.link}
            className={cn(
              s.circle,
              s[`circle_${circle.color}`],
              s[`circle_${circle.size}`]
            )}
            style={{ ...circle.style, ...circlePositions[posKey] }}
          >
            <span>{circle.title || ""}</span>
          </Link>
        );
      })}
    </div>
  );
};
