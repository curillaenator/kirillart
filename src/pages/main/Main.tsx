import React from "react";
import cn from "classnames";

import { usePositionStyle } from "./hooks/usePositionStyle";

import { Header } from "@src/organizms";
import { CirclesLayer } from "./components/CirclesLayer";

import { LAYERS } from "./constants";
import s from "./styles/main.module.scss";

export const Main = () => {
  const { calcedStyles, watchMouse } = usePositionStyle();

  return (
    <div className={s.main} onMouseMove={watchMouse}>
      <Header />

      {LAYERS.map((layer) => (
        <div className={s.back_base} style={calcedStyles[layer.style]}>
          <CirclesLayer circles={layer.circles} />
        </div>
      ))}
    </div>
  );
};
