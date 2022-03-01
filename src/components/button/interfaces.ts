export type ButtonAppearances =
  | "primary"
  | "secondary"
  | "positive"
  | "attention"
  | "negative";

export type ButtonSizes = "2xl" | "xl" | "l" | "m" | "s" | "xs";

export interface ButtonProps {
  size?: ButtonSizes;
  appearance?: ButtonAppearances;
  onClick?: () => void;
}
