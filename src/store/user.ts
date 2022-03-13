import { createStore, createEvent } from "effector";

interface User {
  userId: string | null;
  // messages: Message[];
  photoURL: string;
}

const INITIAL_USER: User = {
  userId: null,
  // messages: [],
  photoURL: "",
};

export const setCurrentUser = createEvent<User>();
// export const setUserMessages = createEvent<Message[]>();

export const userStore = createStore<User>(INITIAL_USER).on(
  setCurrentUser,
  (state, user) => ({ ...state, ...user })
);
// .on(setUserMessages, (state, messages) => ({ ...state, messages }));
