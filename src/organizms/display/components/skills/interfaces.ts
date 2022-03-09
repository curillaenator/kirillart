import { ReactText } from "react";
import { WebIcons } from "@src/assets/webIcons";

export interface TechblockProps {
  title: ReactText;
  techlist: WebIcons[];
}
export interface SkillsProps {
  data?: {
    hardskills: ReactText;
    softskills: ReactText;
    techblocks: TechblockProps[];
  };
}
