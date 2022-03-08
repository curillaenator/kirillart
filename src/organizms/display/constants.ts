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

export const HARDSKILLS: NonNullable<SkillsProps["hardskills"]> =
  "I'm mostly focudes on <b style='color: var(--color-attention)'>React</b> environment with its modern approach. <br /> <br /> Here are technologies I use in my job and in my own projects, represented in <b style='color: var(--color-attention)'>Works</b> section:";

export const SOFTSKILLS: NonNullable<SkillsProps["softskills"]> =
  "I do speak <b style='color: var(--color-attention)'>English</b> and Russian <br /> <br /> I'm a fast learner and permanently trying to enchance my knowledge. Although it's quite chalenging I'd love to work with people who have higher qualification so I can rise faster as a developer <br /> <br /> I'm able to analise code weither it should be improved/refactored/rewritten etc. I mean the purpose is quality of the code <br /> <br /> I use to work in a remote <b style='color: var(--color-attention)'>Team</b> of developers with various capabilities who are focused on maintaining reliable and fast UI either it is Kit of reusable UI components in design system or whole app pages. So I'm sure <b style='color: var(--color-attention)'>communication</b> among the team is key to success. Whatever it is - helping teamate or participating in huge debates over usage of ongoing technology in project - healthy discussion helps to spread workload equaly among the team, it saves time and definitely helps to rise skills";

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
