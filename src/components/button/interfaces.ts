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
  disabled?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
}
