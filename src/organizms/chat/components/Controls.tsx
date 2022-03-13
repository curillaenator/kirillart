import React, { FC, useState } from "react";

import { Button } from "@src/components/button";

import { ControlsProps } from "../interfaces";

import s from "../styles/chat.module.scss";

export const Controls: FC<ControlsProps> = ({ onSendClick }) => {
  const [text, setText] = useState<string>("");

  const clickHandler = () => {
    onSendClick(text);
    setText("");
  };

  return (
    <div className={s.controls}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className={s.send_button}>
        <Button
          iconName="send"
          isGhost
          disabled={!text}
          onClick={clickHandler}
        />
      </div>
    </div>
  );
};
