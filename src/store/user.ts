import { createStore, createEvent } from "effector";

export interface Message {
  messageId: string;
  userId: string;
  text: string;
}

interface User {
  userId: string | null;
  messages: Message[];
}

const INITIAL_USER: User = {
  userId: null,
  messages: [],
};

export const setAnonymousUser = createEvent<string>();
export const setUserMessages = createEvent<Message[]>();

export const userStore = createStore<User>(INITIAL_USER)
  .on(setAnonymousUser, (state, userId) => ({ ...state, userId }))
  .on(setUserMessages, (state, messages) => ({ ...state, messages }));
