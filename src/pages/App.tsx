import React, { FC } from "react";
import { Routes, Route, useParams } from "react-router-dom";

import { Layout } from "./layout";
import { Main } from "./main";

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/:page" element={<Main />} />
      </Route>
    </Routes>
  );
};
