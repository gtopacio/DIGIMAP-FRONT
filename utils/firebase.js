import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCCBpTIdmZXuZvKyYdIfGUY-t_JVg-Cemc",
  authDomain: "digimap-3dp.firebaseapp.com",
  projectId: "digimap-3dp",
  storageBucket: "digimap-3dp.appspot.com",
  messagingSenderId: "386026440323",
  appId: "1:386026440323:web:cb7f4480f1ae40ca9f7db6"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);