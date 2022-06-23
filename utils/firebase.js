import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAxtBdMorQo9aQ8xruYtL53tC0L2KBEj-E",
  authDomain: "digimap-3dp-13228.firebaseapp.com",
  projectId: "digimap-3dp-13228",
  storageBucket: "digimap-3dp-13228.appspot.com",
  messagingSenderId: "621469499940",
  appId: "1:621469499940:web:b6be52270fb81980a10eb1"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);