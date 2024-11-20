// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRUUxps5X5NfAvwRTcq_XZkjDYMO48xQg",
  authDomain: "ferreexpress-e5a5a.firebaseapp.com",
  projectId: "ferreexpress-e5a5a",
  storageBucket: "ferreexpress-e5a5a.firebasestorage.app",
  messagingSenderId: "432420802066",
  appId: "1:432420802066:web:81d98b826b1f634551d2cb"
};

// Initialize Firebase
// Inicialización de la app de Firebase
const app = initializeApp(firebaseConfig);

// Inicialización de Firestore y Auth
export const db = getFirestore(app);
export const auth = getAuth(app);