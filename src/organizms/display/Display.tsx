import React, { FC, memo } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import cn from "classnames";

import { Shape } from "@src/components/shape";
import { Home, Aboutme, Contacts, Skills, Experience } from "./components";

import s from "./styles/display.module.scss";

const DisplayComponent: FC = () => {
  const { pathname } = useLocation();

  if (pathname === "/") return <Navigate to="home" />;

  return (
    <div className={s.display}>
      <div className={s.screen}>
        {pathname !== "/home" && (
          <Shape isAdaptive className={cn(s.screen_shape)} borderRadius={32} />
        )}

        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="home/aboutme" element={<Aboutme />} />

          <Route path="experience" element={<Experience />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contacts" element={<Contacts />} />

          <Route path="*" element={<Navigate to="home" />} />
        </Routes>
      </div>
    </div>
  );
};

export const Display = memo(DisplayComponent);
