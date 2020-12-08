import { useEffect, useState } from "react";
import { firestore } from "../firebase/firebase.config";

export default function useLikes(id) {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    if (!id) return 0;

    firestore
      .collection("video")
      .doc(id)
      .onSnapshot(
        (next) => {
          setLikes(next.data().likes || 0);
        },
        (e) => {
          console.log(e);
        }
      );
  }, [id]);

  return likes;
}
