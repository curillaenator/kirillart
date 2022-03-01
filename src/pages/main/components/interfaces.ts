import { CSSProperties } from "react";

export type Opacities = "100" | "80" | "60" | "40" | "20";

type CircleColors =
  | "primary"
  | "secondary"
  | "positive"
  | "attention"
  | "negative";

type CircleSizes = "2xl" | "xl" | "l" | "m" | "s" | "xs";

export interface CircleProps {
  color: CircleColors;
  size: CircleSizes;
  style?: CSSProperties;
  // top?: string;
  // left?: string;
}

export interface CirclesLayerProps {
  opacity?: Opacities;
  circles?: CircleProps[];
}
