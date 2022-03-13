import React, { FC, memo, useState } from "react";
import cn from "classnames";

import { Button } from "@src/components/button";
import { Scrollbar } from "@src/components/scrollbar";
import { Controls } from "./components";

import { useMessages } from "./hooks/useMessages";

import s from "./styles/chat.module.scss";

const ChatComponent: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { userId, messages, sendMessage } = useMessages();

  return (
    <div className={cn(s.chat, { [s.chat_closed]: !isOpen })}>
      <Scrollbar>
        <div className={s.messages}>
          {messages.map((msg) => (
            <div
              key={msg.messageId}
              className={cn(s.message, {
                [s.message_author]: msg.userId === userId,
              })}
            >
              {msg.text}
            </div>
          ))}
        </div>
      </Scrollbar>

      <Controls onSendClick={sendMessage} />

      {userId && (
        <div className={s.chat_open_button}>
          <Button
            appearance="primary"
            size="2xl"
            iconName={isOpen ? "arrowRight" : "chat"}
            onClick={() => setIsOpen((o) => !o)}
          />
        </div>
      )}
    </div>
  );
};

export const Chat = memo(ChatComponent);
