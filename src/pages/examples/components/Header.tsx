import React, { FC, memo } from "react";

import { Button } from "@src/components/button";

import { HeaderProps } from "./interfaces";

import s from "./styles/header.module.scss";

const HeaderComponent: FC<HeaderProps> = (props) => {
  const { title, onBack, prevDisabled, onPrev, nextDisabled, onNext } = props;

  return (
    <header className={s.header}>
      <Button size="m" iconName="back" isGhost onClick={onBack}>
        Back
      </Button>

      <h1>{title}</h1>

      <div className={s.prevnext}>
        <Button
          size="s"
          onClick={onPrev}
          disabled={prevDisabled}
          iconName="arrowLeft"
        >
          Prev
        </Button>

        <Button
          size="s"
          onClick={onNext}
          disabled={nextDisabled}
          iconName="arrowRight"
          reversed
        >
          Next
        </Button>
      </div>
    </header>
  );
};

export const Header = memo(HeaderComponent);
