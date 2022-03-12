import React, { FC, useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";

import { Slide, Header, Bg } from "./components";

import { SLIDES } from "./contsants";

import { Watch } from "./interfaces";

import s from "./styles/examples.module.scss";

export const Examples: FC = () => {
  const navigate = useNavigate();
  const { exampleId } = useParams();

  const [watch, setWatch] = useState<Watch>({ watchFn: () => {} });
  const handleSetWatch = useCallback((watch: Watch) => setWatch(watch), []);

  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    if (!!exampleId && !!swiper) {
      swiper.slideTo(+exampleId);
      navigate("/works", { replace: true });
    }
  }, [exampleId, swiper, navigate]);

  return (
    <div className={s.examples} onMouseMove={watch.watchFn}>
      <Header
        title={SLIDES[activeIndex]?.title || ""}
        prevDisabled={activeIndex === 0}
        nextDisabled={activeIndex === SLIDES.length - 1}
        onBack={() => navigate(-1)}
        onPrev={() => swiper?.slidePrev()}
        onNext={() => swiper?.slideNext()}
      />

      <Bg handleSetWatch={handleSetWatch} />

      <main className={s.main}>
        <Swiper
          className={s.swiper}
          slidesPerView={1}
          spaceBetween={30}
          keyboard={{ enabled: !exampleId }}
          modules={[Keyboard]}
          onSwiper={(swiper) => setSwiper(swiper)}
          onActiveIndexChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          // onBeforeInit={() => setExamples(SLIDES)}
          // onBeforeDestroy={() => setExamples([])}
        >
          {SLIDES.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Slide {...slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </div>
  );
};
