import { Layers } from "../interfaces";
import { CircleProps } from "./interfaces";

export const LAYERS: { posKey: Layers; circle: CircleProps }[] = [
  {
    posKey: "back1",
    circle: {
      title: "Home",
      color: "secondary",
      size: "xs",
      link: "/home",
      iconName: "home",
      style: {
        top: "16%",
        left: "32%",
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
      iconName: "experience",
      style: {
        top: "18%",
        left: "6%",
      },
    },
  },
  {
    posKey: "back3",
    circle: {
      title: "Works",
      color: "positive",
      size: "l",
      link: "/works",
      iconName: "works",
      style: {
        top: "58%",
        left: "22%",
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
      iconName: "contacts",
      style: {
        top: "54%",
        left: "5%",
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
      iconName: "skills",
      style: {
        top: "30%",
        left: "30%",
      },
    },
  },
];
