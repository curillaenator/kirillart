import React, { FC, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";

import { usePositionStyle } from "@src/utils";

import { Background } from "@src/components/background";
import { Slide, Header } from "./components";

import { SLIDES } from "./contsants";

import { SlideProps } from "./components/interfaces";

import s from "./styles/examples.module.scss";

export const Examples: FC = () => {
  const navigate = useNavigate();
  const { exampleId } = useParams();

  const { layerRotation, positionStyles, watchMouse } = usePositionStyle();

  const [examples, setExamples] = useState<SlideProps[]>([]);
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    if (!!exampleId && !!swiper) {
      const navIndex = SLIDES.findIndex((slide) => slide.id === exampleId);

      setActiveIndex(navIndex);
      swiper.slideTo(navIndex);
    }
  }, [exampleId, swiper]);

  return (
    <div className={s.examples} onMouseMove={watchMouse}>
      <Header
        title={examples[activeIndex]?.title || ""}
        prevDisabled={activeIndex === 0}
        nextDisabled={activeIndex === examples.length - 1}
        onBack={() => navigate(-1)}
        onPrev={() => swiper?.slidePrev()}
        onNext={() => swiper?.slideNext()}
      />

      <div className={s.background} style={layerRotation}>
        <Background positionStyles={positionStyles} />
      </div>

      <main className={s.main}>
        <Swiper
          className={s.swiper}
          slidesPerView={1}
          spaceBetween={30}
          keyboard={{ enabled: !exampleId }}
          modules={[Keyboard]}
          onSwiper={(swiper) => setSwiper(swiper)}
          onActiveIndexChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
            navigate("/works", { replace: true });
          }}
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
