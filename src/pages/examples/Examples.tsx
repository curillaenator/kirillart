import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";

import { Button } from "@src/components/button";
import { Slide } from "./components/Slide";

import { SLIDES } from "./contsants";

import { SlideProps } from "./interfaces";

import s from "./styles/examples.module.scss";

export const Examples: FC = () => {
  const navigate = useNavigate();

  const [examples, setExamples] = useState<SlideProps[]>([]);

  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className={s.examples}>
      <header className={s.header}>
        <Button size="m" iconName="back" isGhost onClick={() => navigate(-1)}>
          Back
        </Button>

        <h1>{examples[activeIndex]?.title || ""}</h1>

        <div className={s.prevnext}>
          <Button
            size="s"
            appearance="secondary"
            onClick={() => swiper?.slidePrev()}
            disabled={activeIndex === 0}
            iconName="arrowLeft"
          >
            Prev
          </Button>

          <Button
            size="s"
            appearance="secondary"
            onClick={() => swiper?.slideNext()}
            disabled={activeIndex === examples.length - 1}
            iconName="arrowRight"
            reversed
          >
            Next
          </Button>
        </div>
      </header>

      <main className={s.main}>
        <Swiper
          className={s.swiper}
          slidesPerView={1}
          spaceBetween={30}
          keyboard={{ enabled: true }}
          modules={[Keyboard]}
          onSwiper={(swiper) => setSwiper(swiper)}
          onActiveIndexChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          onBeforeInit={() => setExamples(SLIDES)}
          onBeforeDestroy={() => setExamples([])}
        >
          {examples.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Slide {...slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </div>
  );
};
