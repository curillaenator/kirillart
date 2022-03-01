import { useState, useCallback, MouseEvent, CSSProperties } from "react";
import { LAYERS_RATES, INITIAL_POSITION } from "../constants";

import { Layers } from "../interfaces";

export const usePositionStyle = () => {
  const [position, setPosition] = useState(INITIAL_POSITION);

  const { cX, cY, posX, posY } = position;

  const watchMouse = useCallback(
    (e: MouseEvent) => {
      setPosition({
        cX: window.innerWidth / 2,
        cY: window.innerHeight / 2,
        posX: e.pageX - window.innerWidth / 2,
        posY: e.pageY - window.innerHeight / 2,
      });
    },
    [window.innerWidth]
  );

  const layerRotation: CSSProperties = {
    transform: ` rotate3d(0, 1, 0, ${(posX / cX) * 8}deg) rotate3d(-1, 0, 0, ${
      (posY / cY) * 8
    }deg)`,
  };

  const circlePositions = Object.fromEntries(
    Object.keys(LAYERS_RATES).map((layer) => {
      const q = LAYERS_RATES[layer];
      return [layer, { transform: `translate(${posX / q}px, ${posY / q}px)` }];
    })
  ) as Record<Layers, CSSProperties>;

  return {
    layerRotation,
    circlePositions,
    watchMouse,
  };
};
