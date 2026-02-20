import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDKPm9JJp4TVEiRs_UkWqf4p5lHJ5yEQ7U",
  authDomain: "sitechamados.firebaseapp.com",
  projectId: "sitechamados",
  storageBucket: "sitechamados.firebasestorage.app",
  messagingSenderId: "364988237756",
  appId: "1:364988237756:web:74963467744deac4174db9",
  measurementId: "G-EQP8LYDWNB"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };