import { IconNames } from "@src/assets/icons";

export type SwitchSizes = "2xl" | "xl" | "l" | "m" | "s" | "xs";

export interface SwitchProps {
  size?: SwitchSizes;
  icon?: IconNames;
  value: boolean;
  onChange: (value: boolean) => void;
}
