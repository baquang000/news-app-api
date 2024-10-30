// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoINKFPbCs_XW5bQcXgvzT14GLxGQEFf8",
  authDomain: "newsapp-ceef2.firebaseapp.com",
  databaseURL: "https://newsapp-ceef2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "newsapp-ceef2",
  storageBucket: "newsapp-ceef2.appspot.com",
  messagingSenderId: "1013815505570",
  appId: "1:1013815505570:web:77b68ee4d5c336a9309dfb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firebaseDataBase = getDatabase(app);
