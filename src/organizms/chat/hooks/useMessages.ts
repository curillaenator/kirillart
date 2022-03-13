import { useCallback, useEffect } from "react";
import { useStore } from "effector-react";
import { getDatabase, ref, set, push, child, onValue } from "firebase/database";

import { setUserMessages, Message, userStore } from "@src/store/user";

export const useMessages = () => {
  const { userId, messages } = useStore(userStore);
  const db = getDatabase();

  useEffect(() => {
    const messagesRef = ref(db, `messages/${userId}`);

    onValue(messagesRef, (snap) => {
      const messages = Object.values({ ...snap.val() }) as Message[];
      setUserMessages(messages);
    });
  }, [userId]);

  const sendMessage = useCallback(
    (text: string) => {
      if (!userId) return;

      const messageId = push(child(ref(db), "messages")).key as string;
      const newMessage: Message = { messageId, userId, text };

      set(ref(db, `messages/${userId}/${messageId}`), newMessage);
    },
    [userId]
  );

  return {
    userId,
    messages,
    sendMessage,
  };
};
