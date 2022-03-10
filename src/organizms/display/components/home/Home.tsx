import React, { FC } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";

import { useUserData } from "./hooks";

import { Icon } from "@src/components/icon";
import { Wrapper } from "../Wrapper";

import s from "./styles/home.module.scss";

export const Home: FC = () => {
  const { data } = useUserData();
  const { photoUrl, greating, userName, job, description, slogan } = data;

  return (
    <Wrapper>
      <div className={s.home}>
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
            <img
              src={photoUrl}
              alt={userName as string}
              className={s.user_photo_image}
            />

            <Link to="aboutme" className={s.user_photo_link}>
              <Icon iconName="cursor" className={s.user_photo_link_icon} />

              <h3 className={s.user_photo_link_text}>About me</h3>
            </Link>
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
