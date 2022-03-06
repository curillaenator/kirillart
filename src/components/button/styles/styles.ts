import { ButtonAppearances, ButtonSizes } from "../interfaces";

import s from "./button.module.scss";

export const cnAppearance: Record<ButtonAppearances, string> = {
  primary: s.button_primary,
  secondary: s.button_secondary,
  positive: s.button_positive,
  attention: s.button_attention,
  negative: s.button_negative,
};

export const cnGhostAppearance: Record<ButtonAppearances, string> = {
  primary: s.button_ghost_primary,
  secondary: s.button_ghost_secondary,
  positive: s.button_ghost_positive,
  attention: s.button_ghost_attention,
  negative: s.button_ghost_negative,
};

export const cnSizes: Record<ButtonSizes, string> = {
  "2xl": s.button_2xl,
  xl: s.button_xl,
  l: s.button_l,
  m: s.button_m,
  s: s.button_s,
  xs: s.button_xs,
};
