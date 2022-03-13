import { useEffect } from "react";
import { getAuth, onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { setCurrentUser } from "@src/store/user";

export const useAuthStateChanged = () => {
  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (!user) {
        signInAnonymously(auth);
        return;
      }

      const { uid, photoURL } = user;

      setCurrentUser({ userId: uid, messages: [], photoURL: photoURL || "" });
    });
  }, []);
};
