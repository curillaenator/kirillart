import React, { FC } from "react";
import cn from "classnames";

import { Scrollbar } from "@src/components/scrollbar";
import { Wrapper } from "../Wrapper";
import { Techblock } from "./components/Techblock";

import { MAJOR_STACK, STYLING, REST } from "../../constants";

import s from "./styles/skills.module.scss";

export const Skills: FC = () => {
  return (
    <Wrapper>
      <Scrollbar>
        <div className={s.skills}>
          <div className={cn(s.skills_block, s.texts)}>
            <h2 className={cn(s.blocktitle, s.texts_right)}>Hardskills</h2>

            <p className={s.texts_right}>lasjsclkasklasn</p>

            <Techblock title="Major" techlist={MAJOR_STACK} />

            <Techblock title="Styling" techlist={STYLING} />

            <Techblock title="Rest" techlist={REST} />
          </div>

          <div className={s.skills_block}>
            <h2>Softskills</h2>
          </div>
        </div>
      </Scrollbar>
    </Wrapper>
  );
};
