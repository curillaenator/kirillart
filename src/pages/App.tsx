import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";

import { Layout } from "./layout";
import { Main } from "./main";

export const App: FC = () => {
  const theme = "default";

  return (
    <Routes>
      <Route path="/" element={<Layout theme={theme} />}>
        <Route index element={<Main />} />
      </Route>
    </Routes>
  );
};
