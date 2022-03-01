import React, { FC, memo } from "react";
import { useParams } from "react-router-dom";

import s from "./styles/display.module.scss";

const DisplayComponent: FC = () => {
  const { page } = useParams();

  console.log(page);

  return <div className={s.display}></div>;
};

export const Display = memo(DisplayComponent);
