import { useCallback } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const useGoogleAuth = () => {
  const signInWithGoogle = useCallback(() => {
    const auth = getAuth();
    const { currentUser } = auth;

    const provider = new GoogleAuthProvider();

    if (!currentUser) {
      return alert("Bad anon auth");
    }

    signInWithPopup(auth, provider)
      .then(async (res) => {
        const { user } = res;

        alert(`Signin success with ${user}`);
      })
      .catch((err) => {
        const { code, message } = err;

        alert(`Error ${code} - ${message}`);
      });
  }, []);

  return { signInWithGoogle };
};
