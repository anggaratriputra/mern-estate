// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-5ffd4.firebaseapp.com",
  projectId: "mern-estate-5ffd4",
  storageBucket: "mern-estate-5ffd4.appspot.com",
  messagingSenderId: "69101310972",
  appId: "1:69101310972:web:deca02c65388584bfb9879"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);