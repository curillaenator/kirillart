import { CSSProperties } from "react";
import { Layers } from "@src/pages/main/interfaces";

export interface BackgroundProps {
  positionStyles: Record<Layers, CSSProperties>;
}
