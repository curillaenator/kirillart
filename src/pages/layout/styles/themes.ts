import { Themes } from "../interfaces";

import styles from "./layout.module.scss";

export const themes: Record<Themes, string> = {
  default: styles.default,
  alt: styles.alt,
};
