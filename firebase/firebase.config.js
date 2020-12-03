import firebase from "firebase";
require("firebase/firestore");
require("firebase/storage");

import firebaseConfig from "./firebase.credentials";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();
const storage = firebase.storage();

export { firestore, storage };
