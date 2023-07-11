
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore' 

const firebaseConfig = {
  apiKey: "AIzaSyCn_Fi39J0vMpppK343RqGgf_0E2tQzCek",
  authDomain: "moviesuniverse-4f6f1.firebaseapp.com",
  projectId: "moviesuniverse-4f6f1",
  storageBucket: "moviesuniverse-4f6f1.appspot.com",
  messagingSenderId: "81602634575",
  appId: "1:81602634575:web:8875c672cd056503815b3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db , "reviews");
export const usersRef = collection(db , "users");

export default app;