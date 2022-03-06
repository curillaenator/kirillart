import React, { FC, memo } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import cn from "classnames";

import { Shape } from "@src/components/shape";
import { Aboutme, Contacts, Skills } from "./components";

import { ABOUTME } from "./constants";

import s from "./styles/display.module.scss";

const DisplayComponent: FC = () => {
  const location = useLocation();

  if (location.pathname === "/") return <Navigate to="home" />;

  return (
    <div className={s.display}>
      <div className={s.screen}>
        <Shape
          isAdaptive
          className={cn(s.screen_shape, {
            [s.screen_shape_invisible]: /home/i.test(location.pathname),
          })}
          borderRadius={32}
        />

        <Routes>
          <Route path="home" element={<Aboutme {...ABOUTME} />} />
          <Route path="experience" element={<h3>experience</h3>} />
          <Route path="skills" element={<Skills />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<Navigate to="home" />} />
        </Routes>
      </div>
    </div>
  );
};

export const Display = memo(DisplayComponent);
