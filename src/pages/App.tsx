import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";

import { Layout } from "./layout";
import { Main } from "./main";
import { Examples } from "./examples";

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="works" element={<Examples />} />
        <Route path="/*" element={<Main />} />
      </Route>
    </Routes>
  );
};
