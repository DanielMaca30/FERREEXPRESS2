import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCyYtbs8z_W5548w2-L05iKK9RrdhzwKxE",
    authDomain: "ferreexpress-a88b2.firebaseapp.com",
    projectId: "ferreexpress-a88b2",
    storageBucket: "ferreexpress-a88b2.firebasestorage.app",
    messagingSenderId: "859226202953",
    appId: "1:859226202953:web:38134b3f10ef03deb37098"
  };

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };