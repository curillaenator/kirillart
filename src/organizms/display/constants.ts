import MY_AVATAR from "./assets/avatar.jpg";

import { HomeProps } from "./components/home/interfaces";
import { SkillsProps } from "./components/skills/interfaces";

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

export const INTRO: NonNullable<SkillsProps["intro"]> =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur enim magni quia, quam natus illo earum distinctio rerum voluptatum blanditiis quasi ea ipsum doloremque consequatur aliquid? Dignissimos inventore cumque incidunt consectetur iste ad, ducimus asperiores, nostrum saepe maxime blanditiis unde at, nam reprehenderit in iure fugit voluptas? Tempora, exercitationem dignissimos?";

export const TECHBLOCKS: NonNullable<SkillsProps["techblocks"]> = [
  {
    title: "Develop with",
    techlist: [
      "React",
      "Redux",
      "Effector",
      "JavaScript",
      "TypeScript",
      "Webpack",
      "Ajax",
      "HTML5",
    ],
  },
  {
    title: "Beautify with",
    techlist: ["Styled-Components", "Sass", "Tailwind", "Bootstrap", "CSS3"],
  },
  {
    title: "Make it solid with",
    techlist: [
      "MongoDB",
      "Express",
      "NodeJS",
      "Storybook",
      "Firebase",
      "Jest",
      "RTL",
      "Git",
      "Jira",
    ],
  },
];
