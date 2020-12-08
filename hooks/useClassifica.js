import { useEffect, useState } from "react";
import { firestore } from "../firebase/firebase.config";

const useFirestore = () => {
  const [classifica, setClassifica] = useState([]);

  useEffect(() => {
    const unsub = firestore
      .collection("video")
      .orderBy("likes", "desc")
      //.orderBy("giorno", "desc")
      .limit(3)
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setClassifica(documents);
      });
    return () => unsub();
  }, []);

  return { classifica };
};

export default useFirestore;
