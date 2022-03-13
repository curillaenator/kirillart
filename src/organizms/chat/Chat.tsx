import React, { FC, memo, useState, useRef, useEffect } from "react";
import cn from "classnames";

import { Button } from "@src/components/button";
import { Scrollbar } from "@src/components/scrollbar";
import { Controls } from "./components";

import { useMessages } from "./hooks/useMessages";

import s from "./styles/chat.module.scss";

const ChatComponent: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    isArturov,
    userId,
    rooms,
    currentRoom,
    messages,
    selectRoom,
    sendMessage,
  } = useMessages();

  const messagesScrollRef = useRef<HTMLDivElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const height = messagesRef.current?.clientHeight;
    messagesScrollRef.current?.scrollBy(0, height || 0);
  }, [messages]);

  return (
    <div className={cn(s.chat, { [s.chat_closed]: !isOpen })}>
      {isArturov && (
        // <Scrollbar>
        <div className={s.rooms}>
          {rooms.map((room) => (
            <button
              className={cn(s.room, {
                [s.room_activated]: room.roomId === currentRoom,
              })}
              key={room.roomId}
              onClick={() => selectRoom(room.roomId)}
            >
              <p>{room.lastMessage}</p>
            </button>
          ))}
        </div>
        // </Scrollbar>
      )}

      <div className={s.dialog}>
        {/* @ts-ignore */}
        <Scrollbar ref={messagesScrollRef}>
          <div className={s.messages} ref={messagesRef}>
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
      </div>

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
