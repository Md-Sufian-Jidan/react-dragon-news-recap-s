// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdTbrahlwHyQ7e_G2h2aznq7veWDwaWFY",
  authDomain: "react-dragon-news-s.firebaseapp.com",
  projectId: "react-dragon-news-s",
  storageBucket: "react-dragon-news-s.appspot.com",
  messagingSenderId: "744875119165",
  appId: "1:744875119165:web:cdbc3d0fb8178a56a9d054"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;