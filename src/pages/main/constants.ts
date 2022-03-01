import { Layers } from "./interfaces";
import { CircleProps } from "./components/interfaces";

export const LAYERS_RATES: Record<string, number> = {
  back5: 7,
  back4: 8,
  back3: 10,
  back2: 16,
  back1: 24,

  middle: 14,
};

export const INITIAL_POSITION = {
  cX: window.innerWidth / 2,
  cY: window.innerHeight / 2,
  posX: 0,
  posY: 0,
};

export const LAYERS: { style: Layers; circles: CircleProps[] }[] = [
  {
    style: "back1",
    circles: [
      {
        color: "secondary",
        size: "xs",
        style: {
          top: "54%",
          left: "36%",
          boxShadow: "0 16px 48px var(--color-secondary)",
        },
      },
    ],
  },
  {
    style: "back2",
    circles: [
      {
        color: "primary",
        size: "2xl",
        style: {
          top: "22%",
          left: "6%",
          boxShadow: "0 16px 48px var(--color-primary)",
        },
      },
    ],
  },
  {
    style: "back3",
    circles: [
      {
        color: "positive",
        size: "l",
        style: {
          top: "60%",
          left: "20%",
          boxShadow: "0 16px 64px var(--color-positive)",
        },
      },
    ],
  },
  {
    style: "back5",
    circles: [
      {
        color: "attention",
        size: "s",
        style: {
          top: "30%",
          left: "30%",
          boxShadow: "0 16px 80px var(--color-attention)",
        },
      },
    ],
  },
  {
    style: "back4",
    circles: [
      {
        color: "negative",
        size: "m",
        style: {
          top: "66%",
          left: "5%",
          boxShadow: "0 16px 80px var(--color-negative)",
        },
      },
    ],
  },
];
