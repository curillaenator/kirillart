import { MouseEvent } from "react";

export interface Watch {
  watchFn: (e: MouseEvent) => void;
}
