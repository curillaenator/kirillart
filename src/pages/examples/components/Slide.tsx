import React, { FC } from "react";
import Gallery from "react-photo-gallery";

import { SlideProps } from "../interfaces";

import s from "./slide.module.scss";

export const Slide: FC<SlideProps> = (props) => {
  const { id, title, screenshots } = props;

  return (
    <div className={s.slide}>
      <div className={s.description}>
        <h2 className={s.title}>{title}</h2>
      </div>

      {screenshots && screenshots.length && (
        <div className={s.gallery}>
          <Gallery photos={screenshots} />
        </div>
      )}
    </div>
  );
};
