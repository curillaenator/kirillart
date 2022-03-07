import React, { FC } from "react";
import cn from "classnames";

import { Scrollbar } from "@src/components/scrollbar";
import { Wrapper } from "../Wrapper";
import { Techblock } from "./components/Techblock";

import { INTRO, TECHBLOCKS } from "../../constants";

import { SkillsProps } from "./interfaces";

import s from "./styles/skills.module.scss";

export const Skills: FC<SkillsProps> = (props) => {
  const { intro = INTRO, techblocks = TECHBLOCKS } = props;

  return (
    <Wrapper>
      <Scrollbar>
        <div className={s.skills}>
          <div className={cn(s.skills_block, s.texts)}>
            <h2 className={cn(s.texts_right, s.texts_primary)}>Hardskills</h2>

            <p className={s.texts_right}>{intro}</p>

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

            <p className={s.texts_right}>{intro}</p>
          </div>
        </div>
      </Scrollbar>
    </Wrapper>
  );
};
