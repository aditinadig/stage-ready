// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRKLbAJhjiMLG04wNeSLyO9a1Fj2oKN7g",
  authDomain: "stageready-e1101.firebaseapp.com",
  projectId: "stageready-e1101",
  storageBucket: "stageready-e1101.firebasestorage.app",
  messagingSenderId: "900067085629",
  appId: "1:900067085629:web:29d4e01f863175ed46c954"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
