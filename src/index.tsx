import React, { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { App } from "@src/pages/App";

import "swiper/scss";

import "@src/index.scss";

render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
