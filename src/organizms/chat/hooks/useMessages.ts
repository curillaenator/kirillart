import { useCallback, useEffect, useState } from "react";
import { useStore } from "effector-react";
import {
  getDatabase,
  ref,
  set,
  push,
  child,
  onValue,
  off,
} from "firebase/database";

import { userStore } from "@src/store/user";

interface Message {
  messageId: string;
  userId: string;
  text: string;
}

interface Rooms {
  roomId: string;
  lastMessage: string;
}

export const useMessages = () => {
  const { userId } = useStore(userStore);

  const [currentRoom, setCurrentRoom] = useState<string | null>(null);
  const [rooms, setRooms] = useState<Rooms[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);

  const isArturov = userId === process.env.ARTUROV_ID;

  const sendMessage = useCallback(
    (text: string) => {
      if (!userId) return;

      const db = getDatabase();

      const roomId = isArturov ? currentRoom : userId;

      const messageId = push(child(ref(db), "messages")).key as string;
      const newMessage: Message = { messageId, userId, text };

      set(ref(db, `messages/${roomId}/${messageId}`), newMessage);
    },
    [userId, currentRoom, isArturov]
  );

  const selectRoom = useCallback((roomId: string) => {
    setCurrentRoom((prevRoomId) => {
      if (prevRoomId === roomId) {
        return prevRoomId;
      }

      const db = getDatabase();

      if (!!prevRoomId) {
        const roomRef = ref(db, `messages/${prevRoomId}`);
        off(roomRef, "value");
      }

      return roomId;
    });
  }, []);

  useEffect(() => {
    const db = getDatabase();

    if (isArturov) {
      const roomRef = ref(db, `messages/${currentRoom}`);

      onValue(roomRef, (snap) => {
        if (!snap.exists()) return;

        const roomMessages = Object.values({ ...snap.val() }) as Message[];

        setMessages(roomMessages);
      });
    }
  }, [currentRoom, isArturov]);

  useEffect(() => {
    const db = getDatabase();

    if (isArturov) {
      const dialogsRef = ref(db, "messages");

      onValue(dialogsRef, (snap) => {
        if (!snap.exists()) return;

        const dialogsObj = { ...snap.val() };

        const dialogsWithLastMessage = Object.keys(dialogsObj).map((key) => {
          const keyMessages = dialogsObj[key];
          const messagesIdMap = Object.keys(keyMessages);
          const lastMessageId = messagesIdMap[messagesIdMap.length - 1];

          return { roomId: key, lastMessage: keyMessages[lastMessageId].text };
        });

        const dialogsWithoutArturovId = dialogsWithLastMessage.filter(
          (d) => d.roomId !== process.env.ARTUROV_ID
        );

        setRooms(dialogsWithoutArturovId);
        // setCurrentRoom(dialogsWithoutArturovId[0].roomId);
      });
    }

    if (!isArturov) {
      const messagesRef = ref(db, `messages/${userId}`);

      onValue(messagesRef, (snap) => {
        if (!snap.exists()) return;

        const messages = Object.values({ ...snap.val() }) as Message[];

        setMessages(messages);
      });
    }
  }, [userId, isArturov]);

  return {
    isArturov,
    userId,
    rooms,
    currentRoom,
    messages,
    selectRoom,
    sendMessage,
  };
};
