// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-18fff.firebaseapp.com",
  projectId: "mern-estate-18fff",
  storageBucket: "mern-estate-18fff.appspot.com",
  messagingSenderId: "1055709182947",
  appId: "1:1055709182947:web:89a3238e8313e17f653ed6"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);