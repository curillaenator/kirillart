import React, { FC } from "react";
// import Gallery from "react-photo-gallery";

import { Icon } from "@src/components/icon";

import { SlideProps } from "../interfaces";

import s from "./styles/slide.module.scss";

export const Slide: FC<SlideProps> = (props) => {
  const { id, title, links } = props;

  return (
    <div className={s.slide}>
      <div className={s.description}>
        <h2 className={s.title}>{title}</h2>

        <p className={s.short}></p>

        {/* {links && links.length && (
          <a href={github} className={s.link} target="_blank">
            <Icon iconName="github" className={s.link_icon} />
          </a>
        )} */}
      </div>

      {/* {screenshots && screenshots.length && (
        <div className={s.gallery}>
          <Gallery photos={screenshots} />
        </div>
      )} */}
    </div>
  );
};
