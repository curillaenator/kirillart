import MY_AVATAR from "./assets/avatar.jpg";

import { HomeProps } from "./components/home/interfaces";
import { WebIcons } from "@src/assets/webIcons";

export const HOME: HomeProps = {
  imageURL: MY_AVATAR,
  userName: "Kirill Arturov",
  job: "Frontend Developer",
  greating:
    "I'm looking for opportunities to be a part of strong TEAM creating outstanding products!!!",
  description:
    "With this webapp I expose my abilities and skills as well as demonstrate some of ones by the app itself =)",
  slogan: "Feel free to explore!!!",
};

export const MAJOR_STACK: WebIcons[] = [
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "HTML5",
];

export const STYLING: WebIcons[] = [
  "CSS3",
  "Sass",
  "Styled-Components",
  "Tailwind",
  "Bootstrap",
];

export const REST: WebIcons[] = [
  "NodeJS",
  "Firebase",
  "MongoDB",
  "Express",
  "Effector",
  "Jest",
  "RTL",
  "Git",
  "Jira",
];
