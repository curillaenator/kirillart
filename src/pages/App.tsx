import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { Layout } from "./layout";
import { Main } from "./main";
import { Examples } from "./examples";

import { FB_CONFIG } from "@src/api/constants";

const app = initializeApp(FB_CONFIG);
getAnalytics(app);

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="works" element={<Examples />} />
        <Route path="works/:exampleId" element={<Examples />} />
        <Route path="/*" element={<Main />} />
      </Route>
    </Routes>
  );
};
