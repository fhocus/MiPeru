// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnuwuq_9_mbGfgayg9X9xWZH-PuxinjJc",
  authDomain: "miperu-65371.firebaseapp.com",
  projectId: "miperu-65371",
  storageBucket: "miperu-65371.firebasestorage.app",
  messagingSenderId: "721708897688",
  appId: "1:721708897688:web:a943b7470cc1d0801107ed",
  measurementId: "G-1QC709JLFX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);