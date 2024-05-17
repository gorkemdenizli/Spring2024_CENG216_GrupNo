import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_CD9XFhEsK36IOUHY3KgRYN-wtheCjHI",
  authDomain: "appaa-ee707.firebaseapp.com",
  projectId: "appaa-ee707",
  storageBucket: "appaa-ee707.appspot.com",
  messagingSenderId: "400053832564",
  appId: "1:400053832564:web:3f72c5cc5c5d133e983a21"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
