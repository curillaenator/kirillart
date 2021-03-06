import React, { FC } from "react";

import { usePositionStyle } from "@src/utils";

import { Background } from "@src/components/background";
import { Header, Display, Chat } from "@src/organizms"; // Chat
import { CirclesLayer } from "./components/CirclesLayer";

import s from "./styles/main.module.scss";

export const Main: FC = () => {
  const { layerRotation, positionStyles, watchMouse } = usePositionStyle();

  return (
    <div className={s.main} onMouseMove={watchMouse}>
      <Header />

      <div className={s.layer_base} style={layerRotation}>
        <Background positionStyles={positionStyles} />

        <CirclesLayer circlePositions={positionStyles} />
      </div>

      <Display />

      <Chat />
    </div>
  );
};
