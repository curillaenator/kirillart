import React, { FC } from "react";
import { Link } from "react-router-dom";

import { usePositionStyle } from "./hooks/usePositionStyle";

import { Header, Display } from "@src/organizms";
import { CirclesLayer } from "./components/CirclesLayer";

import s from "./styles/main.module.scss";

//@ts-ignore
import avatar from "./assets/avatar.jpeg";

export const Main: FC = () => {
  const { layerRotation, circlePositions, watchMouse } = usePositionStyle();

  return (
    <div className={s.main} onMouseMove={watchMouse}>
      <Header />

      <div className={s.layer_base} style={layerRotation}>
        <CirclesLayer circlePositions={circlePositions} />

        {/* <Link to="kirill">
          <img
            src={avatar}
            alt="Avatar"
            className={s.avatar}
            style={circlePositions.back2}
          />
        </Link> */}
      </div>

      <Display />
    </div>
  );
};
