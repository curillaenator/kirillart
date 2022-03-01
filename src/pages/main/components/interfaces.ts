import { CSSProperties, ReactText } from "react";
import { Layers } from "../interfaces";

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
  style: CSSProperties;
  title: ReactText;
  link: string;
}

export interface CirclesLayerProps {
  circlePositions: Record<Layers, CSSProperties>;
}
