import React, { FC } from "react";
import cn from "classnames";
import parse from "html-react-parser";

import { Scrollbar } from "@src/components/scrollbar";
import { Wrapper } from "../Wrapper";
import { Techblock } from "./components/Techblock";

import { HARDSKILLS, TECHBLOCKS, SOFTSKILLS } from "../../constants";

import { SkillsProps } from "./interfaces";

import s from "./styles/skills.module.scss";

export const Skills: FC<SkillsProps> = (props) => {
  const {
    hardskills = HARDSKILLS,
    techblocks = TECHBLOCKS,
    softskills = SOFTSKILLS,
  } = props;

  return (
    <Wrapper>
      <Scrollbar>
        <div className={s.skills}>
          <div className={cn(s.skills_block, s.texts)}>
            <h2 className={cn(s.texts_right, s.texts_primary)}>Hardskills</h2>

            <p className={cn(s.texts_right, s.texts_lh)}>
              {parse(hardskills as string)}
            </p>

            {techblocks.map((techblock) => (
              <Techblock
                key={techblock.title}
                title={techblock.title}
                techlist={techblock.techlist}
              />
            ))}
          </div>

          <div className={s.skills_block}>
            <h2 className={cn(s.texts_right, s.texts_primary)}>Softskills</h2>

            <p className={cn(s.texts_right, s.texts_lh)}>
              {parse(softskills as string)}
            </p>
          </div>
        </div>
      </Scrollbar>
    </Wrapper>
  );
};
