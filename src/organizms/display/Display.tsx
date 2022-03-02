import React, { FC, memo } from "react";
import { Routes, Route } from "react-router-dom";

import { Shape } from "@src/components/shape";
import { Aboutme } from "./components";

import s from "./styles/display.module.scss";

const DisplayComponent: FC = () => {
  return (
    <div className={s.display}>
      <div className={s.screen}>
        <Shape isAdaptive className={s.screen_shape} borderRadius={32} />

        <Routes>
          <Route path="aboutme" element={<Aboutme />} />
          <Route path="experience" element={<h3>experience</h3>} />
          <Route path="skills" element={<h3>skills</h3>} />
          <Route path="contacts" element={<h3>contacts</h3>} />
          <Route path="examples" element={<h3>examples</h3>} />
        </Routes>
      </div>
    </div>
  );
};

export const Display = memo(DisplayComponent);
