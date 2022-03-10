// import { useState, useEffect } from "react";
// import { getFirestore, doc, getDoc } from "firebase/firestore";

// import { UserData } from "../interfaces";

import { HOME } from "../constants";

export const useUserData = () => {
  // const [data, setData] = useState<UserData | null>(HOME);
  // const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   setLoading(true);

  //   const userRef = doc(getFirestore(), "users", userId);

  //   getDoc(userRef)
  //     //@ts-ignore
  //     .then((snap) => setData(snap.data()))
  //     .finally(() => setLoading(false));
  // }, [userId]);

  // console.log(data);

  return { data: HOME };
};
