import React, { FC } from "react";
import { Wrapper } from "../Wrapper";

import { Scrollbar } from "@src/components/scrollbar";

export const Contacts: FC = () => {
  return (
    <Wrapper>
      <Scrollbar>
        <h3>Contacts</h3>
      </Scrollbar>
    </Wrapper>
  );
};
