import React from "react";

import { usePositionStyle } from "./hooks/usePositionStyle";

import { Header } from "@src/organizms";
import { Back } from "./components/Back";

import s from "./styles/main.module.scss";

export const Main = () => {
  const { calcedStyles, watchMouse } = usePositionStyle();

  return (
    <div className={s.main} onMouseMove={watchMouse}>
      <Header />

      <div className={s.back} style={calcedStyles.back}>
        <Back />
      </div>
    </div>
  );
};
