import React, { FC } from "react";
import cn from "classnames";

import { Wrapper } from "../Wrapper";

import { AboutmeProps } from "./interfaces";

import s from "./styles/aboutme.module.scss";

export const Aboutme: FC<AboutmeProps> = (props) => {
  const { greating, imageURL, userName, job, description, slogan } = props;

  return (
    <Wrapper>
      <div className={s.aboutme}>
        <div className={s.user}>
          <div className={s.texts}>
            <h1
              className={cn(s.texts_primary, s.texts_left, s.texts_fontsize48)}
            >
              {userName}
            </h1>

            <h2 className={cn(s.texts_contrast, s.texts_space, s.texts_left)}>
              {job}
            </h2>
          </div>

          <div className={s.user_photo}>
            <img src={imageURL} alt={userName as string} />
          </div>
        </div>

        <div className={s.texts}>
          <p className={cn(s.texts_bright, s.texts_space, s.texts_left)}>
            {greating}
          </p>

          <p className={cn(s.texts_bright, s.texts_space, s.texts_left)}>
            {description}
          </p>

          <h3 className={cn(s.texts_contrast, s.texts_left)}>{slogan}</h3>
        </div>
      </div>
    </Wrapper>
  );
};
