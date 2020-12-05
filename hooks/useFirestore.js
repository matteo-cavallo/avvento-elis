import { useEffect, useState } from "react";
import { firestore } from "../firebase/firebase.config";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = firestore
      .collection("video")
      .orderBy("pubblicazione", "desc")
      //.orderBy("giorno", "desc")
      .where("pubblicazione", "<=", new Date())
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });
    return () => unsub();
  }, [collection]);

  return { docs };
};

export default useFirestore;
