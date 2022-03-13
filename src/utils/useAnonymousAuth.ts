import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { setAnonymousUser } from "@src/store/user";

export const useAnonymousAuth = () => {
  const auth = getAuth();

  signInAnonymously(auth);

  onAuthStateChanged(auth, (user) => {
    if (!user) return console.log("problems with user");

    const { uid } = user;

    setAnonymousUser({ userId: uid, messages: [] });
  });
};
