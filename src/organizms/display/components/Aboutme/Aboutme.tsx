import React, { FC } from "react";
import { Wrapper } from "../Wrapper";
import { useStore } from "effector-react";

import { useGoogleAuth } from "@src/utils";
import { userStore } from "@src/store/user";

import { Button } from "@src/components/button";

import { Scrollbar } from "@src/components/scrollbar";

export const Aboutme: FC = () => {
  const { userId } = useStore(userStore);
  const isArturov = userId === process.env.ARTUROV_ID;

  const { signInWithGoogle } = useGoogleAuth();

  return (
    <Wrapper>
      <Scrollbar>
        <h3>Aboutme</h3>

        {!isArturov && <Button iconName="chrome" onClick={signInWithGoogle} />}
      </Scrollbar>
    </Wrapper>
  );
};
