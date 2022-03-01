import { Layers } from "../interfaces";
import { CircleProps } from "./interfaces";

export const LAYERS: { posKey: Layers; circle: CircleProps }[] = [
  {
    posKey: "back1",
    circle: {
      title: "misc",
      color: "secondary",
      size: "xs",
      link: "/misc",
      style: {
        top: "24%",
        left: "31%",
        boxShadow: "0 16px 48px var(--color-secondary)",
      },
    },
  },
  {
    posKey: "back2",
    circle: {
      title: "Experience",
      color: "primary",
      size: "2xl",
      link: "/experience",
      style: {
        top: "22%",
        left: "6%",
        boxShadow: "0 16px 48px var(--color-primary)",
      },
    },
  },
  {
    posKey: "back3",
    circle: {
      title: "Examples",
      color: "positive",
      size: "l",
      link: "/examples",
      style: {
        top: "60%",
        left: "20%",
        boxShadow: "0 16px 64px var(--color-positive)",
      },
    },
  },
  {
    posKey: "back4",
    circle: {
      title: "Contacts",
      color: "negative",
      size: "m",
      link: "/contacts",
      style: {
        top: "53%",
        left: "5%",
        boxShadow: "0 16px 80px var(--color-negative)",
      },
    },
  },
  {
    posKey: "back5",
    circle: {
      title: "Skills",
      color: "attention",
      size: "s",
      link: "/skills",
      style: {
        top: "30%",
        left: "30%",
        boxShadow: "0 16px 96px var(--color-attention)",
      },
    },
  },
];
