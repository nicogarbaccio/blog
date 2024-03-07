// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-c7eb8.firebaseapp.com",
  projectId: "blog-c7eb8",
  storageBucket: "blog-c7eb8.appspot.com",
  messagingSenderId: "370538986913",
  appId: "1:370538986913:web:32d8faaab0c13c5401dfe0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
