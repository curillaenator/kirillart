import React, { FC } from "react";
import ImageGallery from "react-image-gallery";

import { Icon } from "@src/components/icon";

import { SlideProps } from "./interfaces";

import s from "./styles/slide.module.scss";

export const Slide: FC<SlideProps> = (props) => {
  const { description, links, stack, screenshots } = props;

  return (
    <div className={s.slide}>
      <div className={s.description}>
        <div className={s.space}>
          <h2 className={s.title}>Description</h2>

          <p className={s.short}>{description}</p>
        </div>

        {links && (
          <div className={s.space}>
            <h2 className={s.title}>Links</h2>

            <div className={s.flex}>
              {Object.keys(links).map((linkTitle) => (
                <a
                  href={links[linkTitle]}
                  className={s.link}
                  target="_blank"
                  title={linkTitle}
                >
                  <Icon
                    iconName={linkTitle.toLowerCase()}
                    className={s.link_icon}
                  />
                </a>
              ))}
            </div>
          </div>
        )}

        {stack && (
          <>
            <h2 className={s.title}>Stack</h2>

            <div className={s.flex}>
              {Object.keys(stack).map((techName) => (
                <img
                  className={s.techIcon}
                  src={stack[techName]}
                  alt={techName}
                  title={techName}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {screenshots && (
        <div className={s.gallery}>
          <ImageGallery
            items={screenshots}
            showPlayButton={false}
            disableKeyDown
            disableSwipe
          />
        </div>
      )}
    </div>
  );
};
