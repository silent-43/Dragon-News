// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnyFSoZWp0dJwJ9whVslUsQcRNkZvaWtk",
  authDomain: "dragon-news-c8d63.firebaseapp.com",
  projectId: "dragon-news-c8d63",
  storageBucket: "dragon-news-c8d63.firebasestorage.app",
  messagingSenderId: "98033285723",
  appId: "1:98033285723:web:95726f982d030ea4dddd7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;