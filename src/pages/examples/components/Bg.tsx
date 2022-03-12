/* eslint-disable */

import React, { FC, useEffect, memo } from "react";

import { usePositionStyle } from "@src/utils";

import { Background } from "@src/components/background";

import { BgProps } from "./interfaces";

import s from "../styles/examples.module.scss";

const BgComponent: FC<BgProps> = ({ handleSetWatch }) => {
  const { layerRotation, positionStyles, watchMouse } = usePositionStyle();

  useEffect(() => handleSetWatch({ watchFn: watchMouse }), []);

  return (
    <div className={s.background} style={layerRotation}>
      <Background positionStyles={positionStyles} />
    </div>
  );
};

export const Bg = memo(BgComponent);
