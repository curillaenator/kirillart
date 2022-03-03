import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@src/components/button";

import s from "./styles/examples.module.scss";

export const Examples: FC = () => {
  const navigate = useNavigate();

  return (
    <div className={s.examples}>
      <header className={s.header}>
        <Button size="m" onClick={() => navigate(-1)}>
          Back
        </Button>
      </header>
    </div>
  );
};
