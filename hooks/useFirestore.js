import { useEffect, useState } from "react";
import { firestore } from "../firebase/firebase.config";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);
  const [prima, setPrima] = useState(null);

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

    setPrima(docs[0]);
    return () => unsub();
  }, [collection]);

  return { docs, prima };
};

export default useFirestore;
