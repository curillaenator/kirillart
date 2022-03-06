import React, { FC } from "react";
import cn from "classnames";
import ImageGallery from "react-image-gallery";
import parse from "html-react-parser";

import { Button } from "@src/components/button";
import { Icon } from "@src/components/icon";

import { SlideProps } from "./interfaces";

import { webIcons } from "@src/assets/webIcons";

import s from "./styles/slide.module.scss";

export const Slide: FC<SlideProps> = (props) => {
  const { description, links, stack, screenshots } = props;

  return (
    <div className={s.slide}>
      <div className={s.description}>
        <div>
          <h2 className={s.title}>Idea</h2>

          <p className={s.short}>{parse(description)}</p>
        </div>

        {links && (
          <div>
            <h2 className={s.title}>Watch app on</h2>

            <div className={s.flex}>
              {Object.keys(links).map((linkTitle) => (
                <a href={links[linkTitle]} className={s.link} target="_blank">
                  <Icon
                    iconName={linkTitle.toLowerCase()}
                    className={s.link_icon}
                  />

                  <span className={s.link_title}>{linkTitle}</span>
                </a>
              ))}
            </div>
          </div>
        )}

        {stack && (
          <div>
            <h2 className={s.title}>Stack</h2>

            <div className={s.flex}>
              {stack.map((techName) => (
                <div className={s.techIcon}>
                  <img
                    className={s.techIcon_image}
                    src={webIcons[techName]}
                    alt={techName}
                  />

                  <span className={s.techIcon_title}>{techName}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {screenshots && (
        <div className={s.gallery}>
          <ImageGallery
            lazyLoad
            autoPlay
            disableKeyDown
            disableSwipe
            items={screenshots}
            showPlayButton={false}
            showFullscreenButton={false}
            additionalClass={s.imageGallery}
            renderLeftNav={(onclick) => (
              <Button
                size="s"
                iconName="arrowLeft"
                onClick={onclick}
                className={cn(s.imageGallery_button, s.imageGallery_left)}
              />
            )}
            renderRightNav={(onclick) => (
              <Button
                size="s"
                iconName="arrowRight"
                onClick={onclick}
                className={cn(s.imageGallery_button, s.imageGallery_right)}
              />
            )}
          />
        </div>
      )}
    </div>
  );
};
